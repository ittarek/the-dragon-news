// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import LeftNav from "../pages/Shared/LeftNave/LeftNav";
import RightNav from "../pages/Shared/RighNav/RightNav";

const Main = () => {
  return (
    <div>
      <Header></Header>

      <Container>
        <Row>
          <Col lg={3}>
                   <LeftNav></LeftNav>
          </Col>
          <Col lg={6}>main side coming soon</Col>
          <Col lg={3}>
                    <RightNav></RightNav>
          </Col>
        </Row>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default Main;