import React from "react";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import moment from "moment";

import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShare,
  FaShareAlt,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import Rating from "react-rating";

const NewsCard = ({ category }) => {
  const {
    _id,
    title,
    details,
    total_view,
    rating,
    published_date,
    author,
    img,
    image_url,
  } = category;

  return (
    <div>
      <Card className="text-center mb-5">
        <Card.Header className="d-flex">
          {" "}
          <Image style={{ height: "50px" }} src={author?.img} roundedCircle />
          <div className="d-flex  justify-content-between align-items-center flex-grow-1">
            <div>
              <p className="mb-0">{author.name}</p>
              <p>
                <small>
                  {moment(author?.published_date).format("YYYY-MM-DD")}
                </small>
              </p>
            </div>
            <div>
              <FaRegBookmark className="me-2"></FaRegBookmark>
              <FaShareAlt></FaShareAlt>
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length < 250 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 250)}...
                <Link to={`/news/${_id}`}>Read More</Link>
              </>
            )}
          </Card.Text>
 
        </Card.Body>
        <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
          <div className="d-flex gap-2 align-items-center">
            <Rating
              placeholderRating={rating.number}
              readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-warning"></FaStar>}
              
        
              fullSymbol= {<FaStar></FaStar>}
            ></Rating>
            <span className="pe-2">{rating?.number}</span>
          </div>

          <div>
            {" "}
            <FaEye></FaEye>
            {total_view}
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
