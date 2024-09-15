import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import burger from "../../assets/video/burger.mp4";
function Section1() {
  return (
    <section className="hero_section">
      <div className="overlay"></div>
      <video src={burger} autoPlay loop muted className="video" />
      <div className=" hero_main text-center img-fluid">
        <h1>Sink Your Teeth Into Perfection</h1>
        <h2 >Juicy, Handcrafted Burgers, Grilled to Perfection.</h2>
        <p className="pt-2 pb-2">
          Enjoy our new Indian Tadka Masala Burger with Onion, Capsicum, Red
          <br />
          Chilli Sause and our secret ingredients.
        </p>
        <Link to="/order" className="btn btn-lg">
          <button className="order_now">Order Now</button>
        </Link>
      </div>
    </section>
  );
}

export default Section1;
