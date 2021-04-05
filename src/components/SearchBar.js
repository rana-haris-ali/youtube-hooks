import React, { useState } from "react";
import "./stylesheets/SearchBar.css";

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState("");

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    // this.setState({ term: event.target.value});
    onTermSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={(e) => onFormSubmit(e)} className="ui form">
        <div className="field">
          <label>Search</label>
          <input type="text" value={term} onChange={onInputChange} autoFocus />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
