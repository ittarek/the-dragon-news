import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [catagories, setCatagories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/catagories")
      .then((res) => res.json())
      .then((data) => {
        setCatagories(data);
        // console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="sticky-top">
      <h4>All Category</h4>

      <div className="ps-2">
        {catagories.map((category) => (
              
            <p  key={category.id}>
              <Link to={`/category/${category.id}`}  className="text-decoration-none">{category.name}</Link>
            </p>
        
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
