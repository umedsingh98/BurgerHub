import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import burger from "../../assets/video/burger.mp4";
import fallbackImage from "../../assets/hero/bg.jpg";
function Section1() {
  return (
    <section className="hero_section">
      <div className="overlay"></div>
      <video src={burger} autoPlay loop muted playsInline className="video" poster={fallbackImage} />
      <div className=" hero_main text-center img-fluid">
        <h1>Cheese Lovers, Rejoice!</h1>
        <h2 >Double the Cheese, Double the Flavor</h2>
        <p className="pt-2 pb-2">
        Our Double Cheeseburger is a gooey, cheesy masterpiece, stacked with two juicy patties,topped with caramelized onions, and finished with a creamy cheese sauce. This is cheese heaven.
        </p>
        <Link to="/order" className="btn btn-lg">
          <button className="order_now">Order Now</button>
        </Link>
      </div>
    </section>
  );
}

export default Section1;
