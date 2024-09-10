import React from "react";
import {Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
function Section7() {
  return (
    <>
      <section className="contact_section">
        <Container>
          <Row className="justify-content-center">
            <Col sm={8} className="text-center">
              <h4>We Guarantee</h4>
              <h2>30 Minutes Delivery!</h2>
              <p>
                Aliquam a augue suscipit, luctus neque purus ipsum neque undo
                dolor primis libero tempus, blandit a cursus varius luctus neque
                magna
              </p>
              <Link to="/"><button className=" px-4 py-2 order_now btn_red">Call: 999-888-7777
              </button></Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section7;
