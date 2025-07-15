import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Alert, Modal } from 'react-bootstrap';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaMinus, FaPlus, FaShoppingCart, FaCreditCard, FaMapMarkerAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';
import './Cart.css';
import Layout from '../../components/layouts/layout';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [showCheckout, setShowCheckout] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [orderNotes, setOrderNotes] = useState('');

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      toast.success('Item removed from cart');
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleCheckout = () => {
    if (!user) {
      toast.error('Please login to checkout');
      navigate('/login');
      return;
    }
    
    if (cart.length === 0) {
      toast.error('Your cart is empty');
      return;
    }
    
    setShowCheckout(true);
  };

  const handlePlaceOrder = () => {
    if (!deliveryAddress.trim()) {
      toast.error('Please enter delivery address');
      return;
    }

    // Save order to localStorage
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const newOrder = {
      id: Date.now(),
      userId: user?.id,
      date: new Date().toISOString().slice(0, 10),
      items: cart.map(item => item.name),
      total: calculateTotal(),
      status: 'Delivered',
      address: deliveryAddress,
      notes: orderNotes,
      paymentMethod,
    };
    localStorage.setItem('orders', JSON.stringify([newOrder, ...orders]));

    toast.success('Order placed successfully! You will receive a confirmation email shortly.');
    clearCart();
    setShowCheckout(false);
    navigate('/');
  };

  const calculateSubtotal = () => {
    return getCartTotal();
  };

  const calculateDeliveryFee = () => {
    return getCartTotal() > 30 ? 0 : 5.99;
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.08; // 8% tax
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateDeliveryFee() + calculateTax();
  };

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <div className="empty-cart">
                <FaShoppingCart className="empty-cart-icon" />
                <h2>Your cart is empty</h2>
                <p>Looks like you haven't added any items to your cart yet.</p>
                <Button variant="primary" onClick={() => navigate('/menu')}>
                  Browse Menu
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  return (
    <Layout>
    <div className="cart-page">
      <Container>
        <Row>
          <Col lg={8}>
            <h1 className="cart-title">Shopping Cart</h1>
            
            {cart.map((item) => (
              <Card key={item.id} className="cart-item mb-3">
                <Card.Body>
                  <Row className="align-items-center">
                    <Col md={3}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="cart-item-image"
                      />
                    </Col>
                    <Col md={6}>
                      <h5 className="cart-item-title">{item.name}</h5>
                      <p className="cart-item-description">{item.description}</p>
                      <div className="cart-item-price">${item.price}</div>
                    </Col>
                    <Col md={3}>
                      <div className="quantity-controls">
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        >
                          <FaMinus />
                        </Button>
                        <span className="quantity-display">{item.quantity}</span>
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        >
                          <FaPlus />
                        </Button>
                      </div>
                      <div className="cart-item-total">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        className="remove-btn"
                        onClick={() => handleQuantityChange(item.id, 0)}
                      >
                        <FaTrash /> Remove
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
          </Col>

          <Col lg={4}>
            <Card className="order-summary">
              <Card.Header>
                <h4>Order Summary</h4>
              </Card.Header>
              <Card.Body>
                <div className="summary-item">
                  <span>Subtotal ({cart.length} items)</span>
                  <span>${calculateSubtotal().toFixed(2)}</span>
                </div>
                <div className="summary-item">
                  <span>Delivery Fee</span>
                  <span>
                    {calculateDeliveryFee() === 0 ? 'Free' : `$${calculateDeliveryFee().toFixed(2)}`}
                  </span>
                </div>
                <div className="summary-item">
                  <span>Tax (8%)</span>
                  <span>${calculateTax().toFixed(2)}</span>
                </div>
                <hr />
                <div className="summary-item total">
                  <span>Total</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>
                
                {calculateDeliveryFee() > 0 && (
                  <Alert variant="info" className="mt-3">
                    <small>
                      Add ${(30 - calculateSubtotal()).toFixed(2)} more to your order for free delivery!
                    </small>
                  </Alert>
                )}

                <Button
                  variant="primary"
                  size="lg"
                  className="w-100 mt-3"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Checkout Modal */}
        <Modal show={showCheckout} onHide={() => setShowCheckout(false)} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Checkout</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={6}>
                <h5>Delivery Information</h5>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <FaMapMarkerAlt /> Delivery Address
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter your delivery address"
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Order Notes (Optional)</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    placeholder="Special instructions for delivery"
                    value={orderNotes}
                    onChange={(e) => setOrderNotes(e.target.value)}
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <h5>Payment Method</h5>
                <Form.Group className="mb-3">
                  <Form.Check
                    type="radio"
                    label="Credit/Debit Card"
                    name="paymentMethod"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                  />
                  <Form.Check
                    type="radio"
                    label="Cash on Delivery"
                    name="paymentMethod"
                    checked={paymentMethod === 'cash'}
                    onChange={() => setPaymentMethod('cash')}
                  />
                </Form.Group>

                <div className="order-summary-mini">
                  <h6>Order Summary</h6>
                  <div className="summary-item">
                    <span>Subtotal</span>
                    <span>${calculateSubtotal().toFixed(2)}</span>
                  </div>
                  <div className="summary-item">
                    <span>Delivery</span>
                    <span>
                      {calculateDeliveryFee() === 0 ? 'Free' : `$${calculateDeliveryFee().toFixed(2)}`}
                    </span>
                  </div>
                  <div className="summary-item">
                    <span>Tax</span>
                    <span>${calculateTax().toFixed(2)}</span>
                  </div>
                  <hr />
                  <div className="summary-item total">
                    <span>Total</span>
                    <span>${calculateTotal().toFixed(2)}</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowCheckout(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handlePlaceOrder}>
              <FaCreditCard /> Place Order
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
    </Layout>
  );
};

export default Cart; 