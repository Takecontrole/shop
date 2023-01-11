import React from "react";
import Main from "../components/Main";
import Swipe from "../components/Swipe";

//import AutoSlider from "../components/AutoSlider";

import Announcement from "../components/Announcement";

//import SecondCategories from "../components/SecondCategories";

import Brends from "../components/Brends";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

import Info from "../components/Info";
import styled from "styled-components";


const Container = styled.div`

  background-color: #C9ADA7;
`;


const Home = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      
      <Info/>
     
      <Swipe/>
       
      <Main/>
      <Brends/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  );
};

export default Home;
     //   <AutoSlider/>
