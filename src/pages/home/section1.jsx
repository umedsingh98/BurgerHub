import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
function Section1() {
  return (
    <section className="hero_section">
            <div className="hero_text text-center">
              <h1 className="text-white">New Burger</h1>
              <h2 className="text-white">With Onions</h2>
              <p className="text-white pt-2 pb-2">Enjoy our new Indian Tadka Masala Burger with Onion, Capsicum,  Red Chilli Sause and our secret ingredients.</p>
              <Link to="/order" className="btn">
              <button className="order_now">Order Now</button>
              </Link>
            </div>
          </section>
  );
}

export default Section1;
