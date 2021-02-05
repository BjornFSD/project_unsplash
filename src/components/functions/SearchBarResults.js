import React from "react";

function SearchBarResults({ items, isQueryOpen, setQuery, setItems, history }) {
  const handleSubmit = (text) => {
    setQuery(text);
    setItems(false);
    history.push(`/${text}`);
  };

  if (!isQueryOpen) return null;
  return (
    <div className="searchBarHints">
      {items.map((item, index) => {
        return (
          <div
            onClick={() => handleSubmit(item.title)}
            className="searchBarHints_item"
            key={index}
          >
            {/* {console.log(item.title)} */}
            {item.title}
            {console.log(isQueryOpen)}
          </div>
        );
      })}
      {items.length < 1 && (
        <div className="searchBarHints_warn">Nothing Found</div>
      )}
    </div>
  );
}

export default SearchBarResults;
