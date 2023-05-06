import React from "react";
import About from "./About";
import Blog from "./Blog";
import Feature from "./Feature";
import Price from "./Price";
import Quote from "./Quote";
import Service from "./Service";
import Team from "./Team";
import Testimonial from "./Testimonial";

function Home() {
  return (
    <div>
      <About/>
      <Feature/>
      <Service/>
      <Price/>
      <Quote/>
      <Testimonial/>
      <Team/>
      <Blog/>
    </div>
  );
}

export default Home;
