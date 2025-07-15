import React, { useState } from "react";
import { Container, Nav, Navbar, Badge, Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import { FaUser, FaShoppingCart, FaSignOutAlt } from "react-icons/fa";
import "../../styles/headerStyle.css";
import Logo from "../../assets/logo/burgerLogo.jpg";

function Header() {
  const [nav, setNav] = useState();
  const { user, logout } = useAuth();
  const { getCartCount } = useCart();
  const navigate = useNavigate();

  const changeOnScroll = () => {
    const scrollValue = document?.documentElement.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };
  
  window.addEventListener("scroll", changeOnScroll);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className={`${nav === true ? "sticky" : ""}`}>
      
          <Navbar.Brand as={Link} to="/">
            <div className="logo">
              <img src={Logo} alt="Logo" className="img-fluid" />
              <span id="span1">Burger</span><span id="span2">Hub</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/menu">
                Menu
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About Us
              </Nav.Link>
              
              {/* Cart Icon */}
              <Nav.Link as={Link} to="/cart" className="cart-link">
                <div className="cart">
                  <FaShoppingCart className="fs-5" />
                  {getCartCount() > 0 && (
                    <Badge bg="danger" className="cart-badge">
                      {getCartCount()}
                    </Badge>
                  )}
                </div>
              </Nav.Link>

              <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "5px"}}> <hr style={{height: "60%", width: "2px", backgroundColor: "black"}}/> </div>

              {/* User Menu */}
              {user ? (
                <Dropdown align="end">
                  <Dropdown.Toggle variant="link" className="user-dropdown" style={{display:"flex", gap: "6px", textDecoration: "none", fontWeight: "600"}}>
                  <FaUser style={{border: "2px solid gray", borderRadius: "50%", width: "23px", height: "23px", padding: "1px"}}/>  {user.name}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/profile">
                      <FaUser /> Profile
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={handleLogout}>
                      <FaSignOutAlt /> Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Nav.Link className="login" as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        
      </Navbar>
    </header>
  );
}

export default Header;
