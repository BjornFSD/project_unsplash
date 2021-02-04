import React from "react";
import SearchBar from "../functions/SearchBar";
import { useHistory } from "react-router-dom";

function SearchPage() {
  const history = useHistory();

  const trends = ["flower", "wallpapers", "backgrounds", "happy", "love"];

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/${e.target.textContent}`);
  };

  const showTrends = trends.map((item, index) => {
    return (
      <span className="searchPage_box-trends--title" key={index}>
        <span onClick={handleSubmit}>{item}</span>
        <span>, </span>
      </span>
    );
  });

  return (
    <div className="searchPage">
      <div className="searchPage_box">
        <p className="searchPage_box-title">Unsplash</p>
        <p className="searchPage_box-description">
          The internet’s source of freely-usable images. <br />
          Powered by creators everywhere.
        </p>
        <div className="searchPage_box-bar">
          <SearchBar />
        </div>
        <div className="searchPage_box-trends">
          <p className="searchPage_box-trends--title">Trending: {showTrends}</p>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
