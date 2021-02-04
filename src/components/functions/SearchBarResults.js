import React from "react";

function SearchBarResults({ items, isQueryOpen, setQuery, setItems, history }) {
  const handleSubmit = (text) => {
    setQuery(text);
    setItems(false);
    history.push(`/${text}`);
  };

  if (!isQueryOpen) return null;
  return (
    <div className="popup">
      {items.map((item, index) => {
        return (
          <div
            onClick={() => handleSubmit(item.title)}
            className="popup_item"
            key={index}
          >
            {/* {console.log(item.title)} */}
            {item.title}
            {console.log(isQueryOpen)}
          </div>
        );
      })}
      {items.length < 1 && <div className="warning">Nothing Found</div>}
    </div>
  );
}

export default SearchBarResults;
