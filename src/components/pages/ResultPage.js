import React, { createRef, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Search from "../functions/SearchBar";

function ResultPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [results, setResults] = useState([]);

  const handleClick = (img) => {
    setSelectedImage(img);
    setIsOpen(true);
  };

  let { searched } = useParams();

  useEffect(() => {
    const Key = `HlL5_dbbZ4d-auuSDjttLYgLR5xy6TBrZwl-oHSF7xg`;
    const SearchQuerry = `https://api.unsplash.com/search/photos?per_page=40&page=1&query=${searched}&client_id=${Key}`;
    const apiRequest = () => {
      fetch(SearchQuerry)
        .then((response) => response.json())
        .then((data) => {
          setResults(data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return apiRequest();
  }, [searched]);

  return (
    <div className="resultPage">
      <div className="resultPage_nav">
        <div className="resultPage_nav-logo">
          <Link to="/">Unsplash</Link>
        </div>
        <div className="resultPage_nav-searchBar">
          <Search />
        </div>
      </div>
      <div className="resultPage_main">
        <div className="resultPage_main-box">
          {results.map((img) => {
            return (
              <img
                onClick={() => {
                  handleClick(img);
                }}
                className="resultPage_main-box--img"
                id={img.id}
                src={img.urls.small}
                alt="img"
                key={img.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
