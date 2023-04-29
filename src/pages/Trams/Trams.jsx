import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Trams = () => {
          return (
                    <Container>
                              <h2>Trams and Conditions</h2>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit velit adipisci eaque maiores, ipsa soluta iste beatae expedita vel tenetur laboriosam placeat in optio ullam itaque provident iure sint voluptate?</p>
                              <p>Go To Register <Link to='/register'>Register</Link></p>
                    </Container>
          );
};

export default Trams;