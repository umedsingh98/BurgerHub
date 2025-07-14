import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Badge, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { products, categories, getProductsByCategory } from "../../data/products";
import { FaStar, FaShoppingCart, FaFire } from "react-icons/fa";
import toast from "react-hot-toast";

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <FaStar
        key={i}
        className={i <= rating ? 'star-filled' : 'star-empty'}
        style={{ color: i <= rating ? '#ffc107' : '#e9ecef' }}
      />
    );
  }
  return stars;
};

function Section3() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product, 1);
    toast.success(`${product.name} added to cart!`);
  };

  const getDisplayProducts = () => {
    if (activeCategory === 'all') {
      return products.slice(0, 8); // Show first 8 products for home page
    }
    return getProductsByCategory(activeCategory).slice(0, 8);
  };

  const displayProducts = getDisplayProducts();

  return (
    <>
      <section className="menu_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
              <h2>Our Menu</h2>
              <p className="para">
                Discover our delicious selection of handcrafted burgers, fresh sides, and refreshing beverages. 
                Each item is carefully prepared with premium ingredients for the ultimate dining experience.
              </p>
            </Col>
          </Row>

          {/* Category Tabs */}
          <Row className="mb-4">
            <Col>
              <Nav variant="pills" className="justify-content-center menu-tabs">
                {categories.map((category) => (
                  <Nav.Item key={category.id}>
                    <Nav.Link
                      active={activeCategory === category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className="menu-tab"
                    >
                      {category.name}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
          </Row>

          {/* Products Grid */}
          <Row>
            {displayProducts.map((product) => (
              <Col key={product.id} sm={6} lg={4} xl={3} className="mb-4">
                <Card className="menu-card h-100">
                  <div className="product-image-container">
                    <Card.Img 
                      variant="top" 
                      src={product.image} 
                      className="menu-card-image"
                      alt={product.name}
                    />
                    {product.popular && (
                      <Badge bg="warning" className="popular-badge">
                        <FaFire /> Popular
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
                        <strong>Ingredients:</strong> {product.ingredients.slice(0, 3).join(', ')}
                        {product.ingredients.length > 3 && '...'}
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

          {/* View Full Menu Button */}
          <Row className="mt-4">
            <Col className="text-center">
              <Link to="/menu">
                <Button variant="outline-primary" size="lg" className="view-full-menu-btn">
                  View Full Menu
                </Button>
              </Link>
            </Col>
          </Row>

          {/* Promotional Ads */}
          <Row className="pt-5"> 
            <Col sm={6} lg={5}>
              <div className="ads_box ads_img1 img-fluid mb-5 mb-md-0">
                <h4 className="mb-0">Get Yours Free</h4>
                <h5>Cheese Fries</h5>
                <p className="mb-3">With any burger purchase over $15</p>
                <Link to="/menu">
                  <button className="px-4 py-2 btn_red">Order Now</button>
                </Link>
              </div>
            </Col>
            <Col sm={6} lg={7}>
              <div className="ads_box ads_img2 img-fluid">
                <h4 className="mb-0">Weekend Special</h4>
                <h5>Family Bundle</h5>
                <p className="mb-3">4 burgers + 4 sides + 4 drinks for $49.99</p>
                <Link to="/menu">
                  <button className="px-4 py-2 btn_red">Get Deal</button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section3;
