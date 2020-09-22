import React from "react"; // tells the file we are using React

import { Link } from "react-router-dom";

const days = [
  "Sunday", // 0
  "Monday", // 1
  "Tuesday", // 2
  "Wednesday", // 3
  "Thursday", // ...
  "Friday",
  "Saturday",
  "Sunday",
];

const months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function ArticleCard({ articleData }) {
  const date = new Date(articleData.publishedDate);
  const dayOfWeek = date.getDay();
  const calendarDate = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const day = days[dayOfWeek];

  return (
    <div className="articleCard">
      <div className="articleCardImage">
        <img src={articleData.image.url} alt={articleData.image.alt}></img>
      </div>
      <div className="articleCardText">
        <h2> {articleData.title} </h2>
        <p>{`${days[dayOfWeek]} ${months[month]} ${calendarDate}, ${year}`}</p>
        <p>{articleData.blurb}</p>
        <Link to={`/article/${articleData.id}`}>Read More</Link>
      </div>
    </div>
  );
}

export default ArticleCard;
