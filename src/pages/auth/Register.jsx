import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaEye, FaEyeSlash } from 'react-icons/fa';
import './Auth.css';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register: registerUser } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const password = watch('password');

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data (in real app, this would come from API)
      const userData = {
        id: Date.now(),
        email: data.email,
        name: data.name,
        phone: data.phone
      };
      
      registerUser(userData);
      toast.success('Registration successful! Welcome to BurgerHub!');
      navigate('/');
    } catch (error) {
      toast.error('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={6}>
            <div className="auth-card">
              <div className="text-center mb-4">
                <h2>Create Account</h2>
                <p className="text-muted">Join BurgerHub and start ordering delicious food</p>
              </div>

              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Full Name</Form.Label>
                      <div className="input-group">
                        <span className="input-icon">
                          <FaUser />
                        </span>
                        <Form.Control
                          type="text"
                          placeholder="Enter your full name"
                          {...register('name', {
                            required: 'Full name is required',
                            minLength: {
                              value: 2,
                              message: 'Name must be at least 2 characters'
                            }
                          })}
                          className={errors.name ? 'is-invalid' : ''}
                        />
                      </div>
                      {errors.name && (
                        <Form.Control.Feedback type="invalid">
                          {errors.name.message}
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <div className="input-group">
                        <span className="input-icon">
                          <FaPhone />
                        </span>
                        <Form.Control
                          type="tel"
                          placeholder="Enter your phone number"
                          {...register('phone', {
                            required: 'Phone number is required',
                            pattern: {
                              value: /^[\+]?[1-9][\d]{0,15}$/,
                              message: 'Please enter a valid phone number'
                            }
                          })}
                          className={errors.phone ? 'is-invalid' : ''}
                        />
                      </div>
                      {errors.phone && (
                        <Form.Control.Feedback type="invalid">
                          {errors.phone.message}
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <div className="input-group">
                    <span className="input-icon">
                      <FaEnvelope />
                    </span>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className={errors.email ? 'is-invalid' : ''}
                    />
                  </div>
                  {errors.email && (
                    <Form.Control.Feedback type="invalid">
                      {errors.email.message}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <div className="input-group">
                    <span className="input-icon">
                      <FaLock />
                    </span>
                    <Form.Control
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Create a password"
                      {...register('password', {
                        required: 'Password is required',
                        minLength: {
                          value: 6,
                          message: 'Password must be at least 6 characters'
                        },
                        pattern: {
                          value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                          message: 'Password must contain at least one uppercase letter, one lowercase letter, and one number'
                        }
                      })}
                      className={errors.password ? 'is-invalid' : ''}
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  {errors.password && (
                    <Form.Control.Feedback type="invalid">
                      {errors.password.message}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <div className="input-group">
                    <span className="input-icon">
                      <FaLock />
                    </span>
                    <Form.Control
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Confirm your password"
                      {...register('confirmPassword', {
                        required: 'Please confirm your password',
                        validate: value => value === password || 'Passwords do not match'
                      })}
                      className={errors.confirmPassword ? 'is-invalid' : ''}
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <Form.Control.Feedback type="invalid">
                      {errors.confirmPassword.message}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Check
                    type="checkbox"
                    label="I agree to the Terms of Service and Privacy Policy"
                    {...register('terms', {
                      required: 'You must agree to the terms and conditions'
                    })}
                    isInvalid={!!errors.terms}
                  />
                  {errors.terms && (
                    <Form.Control.Feedback type="invalid">
                      {errors.terms.message}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-100 mb-3"
                  disabled={loading}
                >
                  {loading ? 'Creating Account...' : 'Create Account'}
                </Button>

                <div className="text-center">
                  <p className="mb-0">
                    Already have an account?{' '}
                    <Link to="/login" className="link-primary">
                      Sign in
                    </Link>
                  </p>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register; 