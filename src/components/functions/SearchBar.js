import React, { useState, useRef, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import SearchBarResults from "./SearchBarResults";

function SearchBar() {
  const wrapper = useRef(null);
  let { searched } = useParams();
  const [query, setQuery] = useState(searched || "");
  const [isQueryOpen, setIsQueryOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [dataQuery, setDataQuery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isQueryLoading, setIsQueryLoading] = useState(false);

  const history = useHistory();

  const handleChange = (e) => {
    setQuery(e.target.value);

    setIsLoading(true);
    if (e.target.value.length > 2) {
      setIsQueryOpen(true);
    } else setIsQueryOpen(false);
  };

  useEffect(() => {
    const Key = `HlL5_dbbZ4d-auuSDjttLYgLR5xy6TBrZwl-oHSF7xg`;
    const SearchQuerry = `https://api.unsplash.com/search/collections?per_page=20&query=${query}&client_id=${Key}`;

    fetch(SearchQuerry)
      .then((response) => response.json())
      .then((data) => {
        setDataQuery(data);
        setIsLoading(false);
        setIsQueryLoading(true);
      })
      .catch((e) => {
        console.error(e);
        setIsLoading(false);
      });
    if (!isLoading) {
      QueryLoader();
    }
    // console.log(dataQuery);
  }, [query, isLoading]);

  const QueryLoader = () => {
    if (isQueryLoading) {
      setItems(
        dataQuery.results.filter((item) =>
          item.title.includes(query.toLowerCase())
        )
      );
      setIsQueryLoading(false);
      // console.log(dataQuery);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/${query}`);
    setIsQueryOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    const { current: wrap } = wrapper;
    if (wrap && !wrap.contains(event.target)) {
      setIsQueryOpen(false);
    }
  };

  return (
    <form ref={wrapper} className="form">
      <input
        value={query}
        className="form_input"
        onChange={handleChange}
        type="text"
        placeholder="Search free high-resolution photos"
      />
      <button
        onClick={handleSubmit}
        className="form_button"
        type="submit"
      ></button>
      <SearchBarResults
        isQueryOpen={isQueryOpen}
        items={items}
        setQuery={setQuery}
        setItems={setItems}
        query={query}
        history={history}
      />
    </form>
  );
}

export default SearchBar;
