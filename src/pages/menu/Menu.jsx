import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge, Form, InputGroup, Dropdown } from 'react-bootstrap';
import { useCart } from '../../context/CartContext';
import { products, categories, getProductsByCategory, searchProducts } from '../../data/products';
import { FaSearch, FaStar, FaShoppingCart, FaFilter, FaSort } from 'react-icons/fa';
import toast from 'react-hot-toast';
import './Menu.css';
import Layout from '../../components/layouts/layout';


const Menu = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const { addToCart } = useCart();

  useEffect(() => {
    let results = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      results = getProductsByCategory(selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      results = searchProducts(searchQuery);
    }

    // Sort results
    results.sort((a, b) => {
      let aValue, bValue;
      
      switch (sortBy) {
        case 'price':
          aValue = a.price;
          bValue = b.price;
          break;
        case 'rating':
          aValue = a.rating;
          bValue = b.rating;
          break;
        case 'calories':
          aValue = a.calories;
          bValue = b.calories;
          break;
        default:
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    setFilteredProducts(results);
  }, [selectedCategory, searchQuery, sortBy, sortOrder]);

  const handleAddToCart = (product) => {
    addToCart(product, 1);
    toast.success(`${product.name} added to cart!`);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSort = (sortType) => {
    if (sortType === sortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(sortType);
      setSortOrder('asc');
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i <= rating ? 'star-filled' : 'star-empty'}
        />
      );
    }
    return stars;
  };

  return (
    <>
   <Layout>
    <div className="menu-page">
      <Container>
        {/* Header */}
        <Row className="mb-4">
          <Col>
            <h1 className="menu-title">Our Menu</h1>
            <p className="menu-subtitle">Discover our delicious selection of burgers and sides</p>
          </Col>
        </Row>

        {/* Filters and Search */}
        <Row className="mb-4">
          <Col md={6} lg={4}>
            <InputGroup>
              <InputGroup.Text>
                <FaSearch />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Search menu items..."
                value={searchQuery}
                onChange={handleSearch}
              />
            </InputGroup>
          </Col>
          <Col md={6} lg={4}>
            <Dropdown>
              <Dropdown.Toggle variant="outline-secondary" className="w-100">
                <FaFilter /> Category: {categories.find(c => c.id === selectedCategory)?.name}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {categories.map((category) => (
                  <Dropdown.Item
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    active={selectedCategory === category.id}
                  >
                    {category.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col md={6} lg={4}>
            <Dropdown>
              <Dropdown.Toggle variant="outline-secondary" className="w-100">
                <FaSort /> Sort by: {sortBy.charAt(0).toUpperCase() + sortBy.slice(1)}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleSort('name')}>
                  Name {sortBy === 'name' && (sortOrder === 'asc' ? '↑' : '↓')}
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleSort('price')}>
                  Price {sortBy === 'price' && (sortOrder === 'asc' ? '↑' : '↓')}
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleSort('rating')}>
                  Rating {sortBy === 'rating' && (sortOrder === 'asc' ? '↑' : '↓')}
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleSort('calories')}>
                  Calories {sortBy === 'calories' && (sortOrder === 'asc' ? '↑' : '↓')}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

        {/* Results Count */}
        <Row className="mb-3">
          <Col>
            <p className="text-muted">
              Showing {filteredProducts.length} of {products.length} items
            </p>
          </Col>
        </Row>

        {/* Products Grid */}
        <Row>
          {filteredProducts.map((product) => (
            <Col key={product.id} lg={4} md={6} className="mb-4">
              <Card className="product-card h-100">
                <div className="product-image-container">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    className="product-image"
                    alt={product.name}
                  />
                  {product.popular && (
                    <Badge bg="warning" className="popular-badge">
                      Popular
                    </Badge>
                  )}
                </div>
                <Card.Body className="d-flex flex-column">
                  <div className="product-header">
                    <Card.Title className="product-title">{product.name}</Card.Title>
                    <div className="product-rating">
                      {renderStars(product.rating)}
                      <span className="rating-text">({product.rating})</span>
                    </div>
                  </div>
                  
                  <Card.Text className="product-description">
                    {product.description}
                  </Card.Text>
                  
                  <div className="product-details">
                    <div className="product-info">
                      <span className="calories">{product.calories} cal</span>
                      <span className="price">${product.price}</span>
                    </div>
                  </div>
                  
                  <div className="ingredients">
                    <small className="text-muted">
                      <strong>Ingredients:</strong> {product.ingredients.join(', ')}
                    </small>
                  </div>
                  
                  <Button
                    variant="primary"
                    className="add-to-cart-btn mt-auto"
                    onClick={() => handleAddToCart(product)}
                  >
                    <FaShoppingCart /> Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <Row>
            <Col className="text-center">
              <div className="no-results">
                <h3>No items found</h3>
                <p>Try adjusting your search or filter criteria</p>
                <Button
                  variant="outline-primary"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </div>
    </Layout>
    </>
  );
};

export default Menu; 