import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle,FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from "../Q-Zone/QZone";
import bg from '../../../assets/bg1.png'

const RightNav = () => {
  return (
    <div>
     <div>
     <h4 className="mb-4">Login With </h4>
      <Button className="mb-2" variant="outline-primary"> <FaGoogle/> Login With Google</Button>
      <Button variant="outline-secondary"><FaGithub/> Login With GitHub</Button>
     </div>
     <div className="mt-4 mb-4" >
          <h4 className="py-4">Find Us On</h4>
          <ListGroup vertical>
      <ListGroup.Item><FaFacebook/> FaceBook</ListGroup.Item>
      <ListGroup.Item><FaTwitter /> Tweeter</ListGroup.Item>
      <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
   
    </ListGroup>
     </div>
     <div className="text-center">
          <QZone></QZone>
     </div>
     <div className="mt-4">
          <img src={bg} alt="" />
     </div>
    </div>
  );
};

export default RightNav;
