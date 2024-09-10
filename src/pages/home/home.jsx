import React from "react";
import Layout from "../../components/layouts/layout";
import Section2 from "./Section2.jsx";
import Section1 from "./section1.jsx";
import "../../styles/home.css";
import Section3 from "./Section3.jsx";
import Section4 from "./Section4.jsx";
import Section5 from "./Section5.jsx";
import Section6 from "./Section6.jsx";
import Section7 from "./Section7.jsx";
function Home(){
  return(
    <>
    <Layout>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </Layout>
    </>
  );
}

export default Home;