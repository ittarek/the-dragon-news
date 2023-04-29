import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
// import { Card } from 'react-bootstrap/Card';
import EditorsInside from "../EditorsInsid/EditorsInside";

const News = () => {
  const newsDetails = useLoaderData();
  const { _id, image_url, title,category_id, details } = newsDetails;

  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            {" "}
            <Button variant="danger"><FaArrowLeft></FaArrowLeft> All news in this category</Button>
          </Link>
        </Card.Body>
      </Card>


      <div className="mt-5">
          <Card>
                    <EditorsInside></EditorsInside>
          </Card>
      </div>
    </div>
  );
};

export default News;
