import React from "react"; // tells the file we are using React

function ArticleCard({ articleData }) {
  return (
    <div>
      <h2> {articleData.title}</h2>
    </div>
  );
}

export default ArticleCard;
