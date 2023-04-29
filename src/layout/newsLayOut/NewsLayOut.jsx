import React from "react";
import Header from "../../pages/Shared/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import RightNav from "../../pages/Shared/RighNav/RightNav";
import Footer from "../../pages/Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import NavigationBar from "../../pages/Shared/NavigationBar/NavigationBar";

const NewsLayOut = () => {
  return (
    <Container>
   
 

      <Container>
        <Row>
         
          <Col lg={9}>
           <div className="mt-5"> <Outlet></Outlet></div>
          </Col>
          <Col lg={3}>
        <div  className="mt-5">   <RightNav></RightNav></div> 
          </Col>
        </Row>
      </Container>

      <Footer></Footer>
    </Container>
  );
};

export default NewsLayOut;
