import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBar = () => {

          const { user ,loggedOut} = useContext(AuthContext);
          const handleLoggedOut =()=>{
            loggedOut()
            .then()
            .catch(error=>{
              console.log(error.message);
            })
          }
          return (
                    <Container>
                           <Navbar
        className="mb-4"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
         
                <Link to='/category/0' className='my-auto me-2'>Home</Link>
           
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#career"> Career</Nav.Link>
            </Nav>
            <Nav className="d-flex align-items-center">
              {user && (
              
                <Link  className='px-2 w-75'>  <FaUserCircle></FaUserCircle></Link>
             
              )}
      
                {user ? (
                  <Link>
                    <Button onClick={handleLoggedOut} variant="secondary">LogOut</Button>
                  </Link>
                ) : (
                  <Link to="/login">
                    <button>LogIn</button>
                  </Link>
                )}{" "}
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>   
                    </Container>
          );
};

export default NavigationBar;