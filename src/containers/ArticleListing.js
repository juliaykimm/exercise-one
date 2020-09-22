import React from "react"; // tells the file we are using React
// Component imports
import ArticleCard from "../components/ArticleCard";
// Data imports
import Data from "../components/data";

function ArticleListing() {
  // props send data through the flow of components
  return (
    <main className="ArticleListing">
      <header>
        <h1>Articles</h1>
      </header>
      {Data.map((article, i) => (
        <ArticleCard key={i} articleData={article} />
      ))}
    </main>
  );
}

export default ArticleListing;
