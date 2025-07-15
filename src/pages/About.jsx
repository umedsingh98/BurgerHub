import React from "react";
import Layout from "../components/layouts/layout";
import aboutImg from "../assets/about/about-1.jpg";
import pizzaImg from "../assets/about/pizza.png";
import saladImg from "../assets/about/salad.png";
import deliveryImg from "../assets/about/delivery-bike.png";
import ashuImg from "../assets/blog/ashu.jpg";
// import reviewAuthor1 from "../assets/blog/review-author-1.jpg";
// import reviewAuthor2 from "../assets/blog/review-author-2.jpg";

const team = [
  { name: "Ashu Kumar", role: "Founder & Chef", img: ashuImg },
  { name: "Priya Singh", role: "Manager", img: ashuImg },
  { name: "Rahul Sharma", role: "Delivery Head", img: ashuImg },
];

const About = () => (
  <Layout>
    <section style={{ background: "var(--light-white)", padding: "3rem 0 2rem 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", gap: 40, flexWrap: "wrap", padding: "0 1rem" }}>
        <div style={{ flex: 1, minWidth: 300 }}>
          <h1 style={{ fontSize: "2.5rem", color: "var(--light-black)", marginBottom: 16 }}>About <span style={{ color: "var(--yellow)" }}>BurgerHub</span></h1>
          <p style={{ fontSize: 18, color: "var(--grey)", marginBottom: 24 }}>
            Welcome to BurgerHub, your go-to destination for delicious, handcrafted burgers and more! Since our founding, we've been passionate about serving fresh, high-quality food with a smile. Our journey started with a simple idea: to bring people together over great taste and unforgettable experiences.
          </p>
        </div>
        <div style={{ flex: 1, minWidth: 300, textAlign: "center" }}>
          <img src={aboutImg} alt="About BurgerHub" style={{ maxWidth: "100%", borderRadius: 16, boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }} />
        </div>
      </div>
    </section>

    <section style={{ background: "#fff", padding: "2rem 0" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 1rem" }}>
        <h2 style={{ color: "var(--light-black)", fontSize: "2rem", marginBottom: 16 }}>Our Story</h2>
        <p style={{ color: "var(--grey)", fontSize: 17, marginBottom: 0 }}>
          BurgerHub began as a small family-run eatery, fueled by a love for burgers and a dream to create a community hub. Over the years, we've grown, but our commitment to quality and customer satisfaction remains unchanged. Every burger is made with the freshest ingredients, and every guest is treated like family.
        </p>
      </div>
    </section>

    <section style={{ background: "var(--light-grey)", padding: "2.5rem 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-around", gap: 32, flexWrap: "wrap", padding: "0 1rem" }}>
        <div style={{ flex: 1, minWidth: 220, textAlign: "center" }}>
          <img src={pizzaImg} alt="Fresh Ingredients" style={{ width: 80, marginBottom: 12 }} />
          <h3 style={{ color: "var(--light-black)", fontSize: "1.3rem", marginBottom: 8 }}>Fresh Ingredients</h3>
          <p style={{ color: "var(--grey)", fontSize: 15 }}>We use only the freshest, locally sourced ingredients for every meal.</p>
        </div>
        <div style={{ flex: 1, minWidth: 220, textAlign: "center" }}>
          <img src={saladImg} alt="Healthy Options" style={{ width: 80, marginBottom: 12 }} />
          <h3 style={{ color: "var(--light-black)", fontSize: "1.3rem", marginBottom: 8 }}>Healthy Options</h3>
          <p style={{ color: "var(--grey)", fontSize: 15 }}>From classic burgers to fresh salads, we have something for everyone.</p>
        </div>
        <div style={{ flex: 1, minWidth: 220, textAlign: "center" }}>
          <img src={deliveryImg} alt="Fast Delivery" style={{ width: 80, marginBottom: 12 }} />
          <h3 style={{ color: "var(--light-black)", fontSize: "1.3rem", marginBottom: 8 }}>Fast Delivery</h3>
          <p style={{ color: "var(--grey)", fontSize: 15 }}>Enjoy your favorite meals delivered hot and fresh to your door.</p>
        </div>
      </div>
    </section>

    <section style={{ background: "#fff", padding: "2.5rem 0" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 1rem" }}>
        <h2 style={{ color: "var(--light-black)", fontSize: "2rem", marginBottom: 24, textAlign: "center" }}>Meet Our Team</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap" }}>
          {team.map((member, idx) => (
            <div key={idx} style={{ background: "var(--light-grey)", borderRadius: 12, padding: 24, minWidth: 200, textAlign: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <img src={member.img} alt={member.name} style={{ width: 90, height: 90, borderRadius: "50%", objectFit: "cover", marginBottom: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }} />
              <h4 style={{ color: "var(--light-black)", fontSize: "1.1rem", marginBottom: 4 }}>{member.name}</h4>
              <p style={{ color: "var(--grey)", fontSize: 15, margin: 0 }}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About; 