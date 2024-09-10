import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col sm={6} lg={3} className="mb-5 mb-lg-0">
              <div className="text-center">
                <h4>LOCAION</h4>
                <p>5505 Waterford District</p>
                <p>Dr, Miami, FL 33126</p>
                <p>United States</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h4>Working Hours</h4>
                <p>Mon-Fri: 9:00AM - 10:00PM </p>
                <p>Saturday: 10:00AM - 8:30PM</p>
                <p>Sunday: 12:00PM - 5:00PM</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h4>Order Now</h4>
                <p>Quaerat neque purus ipsum</p>
                <p>
                  <Link to="tel:999888777" className="calling">999-888-777</Link>
                  
                </p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h4>Follow Us</h4>
                <p>Quaerat neque purus ipsum</p>
                <ul className="list-unstyled text-center mt-2">
                  <li>
                    <Link to="/" className="icon">
                      <i className="bi bi-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="icon">
                      <i className="bi bi-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="icon">
                      <i className="bi bi-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="icon">
                      <i className="bi bi-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="copyrights">
            <Col>
              <div>
                <ul className="list-unstyled text-center mb-0">
                  <li>
                    <p>
                      © 2024 <span>ASHUTANWAR</span>. All Rights Reserved
                    </p>
                  </li>
                  <li>
                    <p>About Us</p>
                  </li>
                  <li>
                    <p>Terms Of Use</p>
                  </li>
                  <li>
                    <p>Privacy Policy</p>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
