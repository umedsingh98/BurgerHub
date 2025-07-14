import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Tab, Nav, Alert } from 'react-bootstrap';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHistory, FaCog, FaSignOutAlt, FaEdit } from 'react-icons/fa';
import toast from 'react-hot-toast';
import './Profile.css';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || ''
  });

  // Mock order history
  const orderHistory = [
    {
      id: 1,
      date: '2024-01-15',
      items: ['Classic Cheeseburger', 'French Fries', 'Vanilla Milkshake'],
      total: 24.97,
      status: 'Delivered'
    },
    {
      id: 2,
      date: '2024-01-10',
      items: ['Double Cheeseburger', 'Onion Rings'],
      total: 22.98,
      status: 'Delivered'
    },
    {
      id: 3,
      date: '2024-01-05',
      items: ['Bacon Cheeseburger', 'French Fries'],
      total: 19.98,
      status: 'Cancelled'
    }
  ];

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/');
  };

  const handleSaveProfile = () => {
    // In a real app, this would update the user profile via API
    toast.success('Profile updated successfully');
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Delivered':
        return <span className="badge bg-success">{status}</span>;
      case 'Cancelled':
        return <span className="badge bg-danger">{status}</span>;
      default:
        return <span className="badge bg-warning">{status}</span>;
    }
  };

  if (!user) {
    return (
      <div className="profile-page">
        <Container>
          <Alert variant="warning">
            Please <Button variant="link" onClick={() => navigate('/login')}>login</Button> to view your profile.
          </Alert>
        </Container>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <Container>
        <Row>
          <Col lg={3}>
            <Card className="profile-sidebar">
              <Card.Body className="text-center">
                <div className="profile-avatar">
                  <FaUser />
                </div>
                <h5 className="profile-name">{user.name}</h5>
                <p className="profile-email">{user.email}</p>
                
                <Nav variant="pills" className="flex-column profile-nav">
                  <Nav.Item>
                    <Nav.Link
                      active={activeTab === 'profile'}
                      onClick={() => setActiveTab('profile')}
                    >
                      <FaUser /> Profile
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      active={activeTab === 'orders'}
                      onClick={() => setActiveTab('orders')}
                    >
                      <FaHistory /> Order History
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      active={activeTab === 'settings'}
                      onClick={() => setActiveTab('settings')}
                    >
                      <FaCog /> Settings
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Button
                  variant="outline-danger"
                  className="w-100 mt-3"
                  onClick={handleLogout}
                >
                  <FaSignOutAlt /> Logout
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={9}>
            <Tab.Container activeKey={activeTab}>
              <Tab.Content>
                {/* Profile Tab */}
                <Tab.Pane eventKey="profile">
                  <Card>
                    <Card.Header className="d-flex justify-content-between align-items-center">
                      <h4>Profile Information</h4>
                      <Button
                        variant={isEditing ? "success" : "outline-primary"}
                        size="sm"
                        onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}
                      >
                        <FaEdit /> {isEditing ? 'Save' : 'Edit'}
                      </Button>
                    </Card.Header>
                    <Card.Body>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>
                              <FaUser /> Full Name
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              disabled={!isEditing}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>
                              <FaEnvelope /> Email
                            </Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              disabled={!isEditing}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>
                              <FaPhone /> Phone Number
                            </Form.Label>
                            <Form.Control
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              disabled={!isEditing}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>
                              <FaMapMarkerAlt /> Address
                            </Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={2}
                              name="address"
                              value={formData.address}
                              onChange={handleInputChange}
                              disabled={!isEditing}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Tab.Pane>

                {/* Orders Tab */}
                <Tab.Pane eventKey="orders">
                  <Card>
                    <Card.Header>
                      <h4>Order History</h4>
                    </Card.Header>
                    <Card.Body>
                      {orderHistory.length === 0 ? (
                        <div className="text-center py-4">
                          <p>No orders found</p>
                          <Button variant="primary" onClick={() => navigate('/menu')}>
                            Start Ordering
                          </Button>
                        </div>
                      ) : (
                        orderHistory.map((order) => (
                          <Card key={order.id} className="order-item mb-3">
                            <Card.Body>
                              <Row className="align-items-center">
                                <Col md={3}>
                                  <div className="order-date">
                                    <strong>Order #{order.id}</strong>
                                    <br />
                                    <small className="text-muted">{order.date}</small>
                                  </div>
                                </Col>
                                <Col md={6}>
                                  <div className="order-items">
                                    {order.items.join(', ')}
                                  </div>
                                </Col>
                                <Col md={2}>
                                  <div className="order-total">
                                    ${order.total}
                                  </div>
                                </Col>
                                <Col md={1}>
                                  {getStatusBadge(order.status)}
                                </Col>
                              </Row>
                            </Card.Body>
                          </Card>
                        ))
                      )}
                    </Card.Body>
                  </Card>
                </Tab.Pane>

                {/* Settings Tab */}
                <Tab.Pane eventKey="settings">
                  <Card>
                    <Card.Header>
                      <h4>Account Settings</h4>
                    </Card.Header>
                    <Card.Body>
                      <Row>
                        <Col md={6}>
                          <Card className="setting-card">
                            <Card.Body>
                              <h6>Change Password</h6>
                              <p className="text-muted">Update your account password</p>
                              <Button variant="outline-primary" size="sm">
                                Change Password
                              </Button>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col md={6}>
                          <Card className="setting-card">
                            <Card.Body>
                              <h6>Notification Preferences</h6>
                              <p className="text-muted">Manage your notification settings</p>
                              <Button variant="outline-primary" size="sm">
                                Manage Notifications
                              </Button>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                      <Row className="mt-3">
                        <Col md={6}>
                          <Card className="setting-card">
                            <Card.Body>
                              <h6>Privacy Settings</h6>
                              <p className="text-muted">Control your privacy preferences</p>
                              <Button variant="outline-primary" size="sm">
                                Privacy Settings
                              </Button>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col md={6}>
                          <Card className="setting-card">
                            <Card.Body>
                              <h6>Delete Account</h6>
                              <p className="text-muted">Permanently delete your account</p>
                              <Button variant="outline-danger" size="sm">
                                Delete Account
                              </Button>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile; 