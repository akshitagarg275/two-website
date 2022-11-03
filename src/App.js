import React from "react";
import AppSection from "./AppSection";
import CardSection from "./CardSection";
import Footer from "./footer";
import Jumbotron from "./jumbotron";
import Nav from "./nav";

const App =() =>{
  return (
    <div>
      <Nav></Nav>
      <Jumbotron></Jumbotron>
      <CardSection></CardSection>
      <AppSection></AppSection>
      <Footer></Footer>
    </div>
  )
}

export default App