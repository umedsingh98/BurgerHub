import React from "react";
import {Carousel, CarouselCaption, CarouselItem, Col, Container, Row } from "react-bootstrap";
import Hut from "../../assets/shop/e-shop.png";
import Google from "../../assets/shop/googleplay.png";
import Appstore from "../../assets/shop/appstore.png";
import { Link } from "react-router-dom";
import Brand1 from "../../assets/brands/brand-11.png";
import Brand2 from "../../assets/brands/brand-12.png";
import Brand3 from "../../assets/brands/brand-13.png";
import Brand4 from "../../assets/brands/brand-14.png";
import Brand5 from "../../assets/brands/brand-15.png";
import Brand6 from "../../assets/brands/brand-16.png";
import Brand7 from "../../assets/brands/brand-17.png";
import Brand8 from "../../assets/brands/brand-18.png";
function Section5() {
  return (
    <>
      <section className="e_shop_section">
        <Container>
          <Row>
            <Col lg={5} className="text-left py-5">
              <h4>Download mobile App and</h4>
              <h1>save up to 20%</h1>
              <p>
                Aliquam a augue suscipit, luctus neque purus ipsum and neque
                dolor primis libero tempus, blandit varius
              </p>
              <Link to="/">
                <img
                  src={Google}
                  alt="googlestore"
                  className="img-fluid store me-3"
                />
              </Link>
              <Link to="/">
                <img
                  src={Appstore}
                  alt="appstore"
                  className="img-fluid store me-3"
                />
              </Link>
            </Col>
            <Col lg={6}>
              <img src={Hut} alt="eShop" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="brand_section">
        <Container>
          <Row>
            <Carousel>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="brand_img">
                     <img src={Brand1} className="img-fluid" alt="brand-1"></img>
                    </div>
                    <div className="brand_img">
                     <img src={Brand2} className="img-fluid" alt="brand-2"></img>
                    </div>
                    <div className="brand_img">
                     <img src={Brand3} className="img-fluid" alt="brand-3"></img>
                    </div>
                    <div className="brand_img">
                     <img src={Brand4} className="img-fluid" alt="brand-4"></img>
                    </div>
                    <div className="brand_img">
                     <img src={Brand5} className="img-fluid" alt="brand-5"></img>
                    </div>                    
                    <div className="brand_img">
                     <img src={Brand6} className="img-fluid" alt="brand-6"></img>
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <CarouselItem>
                <CarouselCaption>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="brand_img">
                     <img src={Brand3} className="img-fluid" alt="brand-3"></img>
                    </div>
                    <div className="brand_img">
                     <img src={Brand4} className="img-fluid" alt="brand-4"></img>
                    </div>                  
                    <div className="brand_img">
                     <img src={Brand5} className="img-fluid" alt="brand-5"></img>
                    </div>                    
                    <div className="brand_img">
                     <img src={Brand6} className="img-fluid" alt="brand-6"></img>
                    </div>
                    <div className="brand_img">
                     <img src={Brand7} className="img-fluid" alt="brand-7"></img>
                    </div>
                    <div className="brand_img">
                     <img src={Brand8} className="img-fluid" alt="brand-8"></img>
                    </div>
                  </div>
                </CarouselCaption>
              </CarouselItem>
            </Carousel>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section5;
