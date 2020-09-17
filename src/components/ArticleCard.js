import React from "react"; // tells the file we are using React

import { Link } from "react-router-dom";

function ArticleCard({ articleData }) {
  return (
    <div className="articleCard">
      <div className="articleCardImage">
        <img src={articleData.image.url} alt={articleData.image.alt}></img>
      </div>
      <div className="articleCardText">
        <h2> {articleData.title} </h2>
        <p>{articleData.publishedDate}</p>
        <p>{articleData.blurb}</p>
        <Link to={`/article/${articleData.id}`}>Read More</Link>
      </div>
    </div>
  );
}

export default ArticleCard;
