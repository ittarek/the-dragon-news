import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "./NewsCard/NewsCard";

const Category = () => {
  const categoryNews = useLoaderData();
  // console.log(categoryNews);
  const { id } = useParams();

  return (
    <div>

  

      <div>
        {categoryNews.map((category) => (
          <NewsCard category={category} key={category._id}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
