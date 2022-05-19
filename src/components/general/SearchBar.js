import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './general.css';


export default function SearchBar({title, setTitle}) {
  // returns a <input> element with the given attributes.

  // props:
  // - title: String - input label
  // - setTitle: Function - function to set the value of the input

  return (
    <div className="search-bar-container">
      <FontAwesomeIcon icon="search" className="search-bar-icon" />
      <input
        className="search-bar"
        type="text"
        value={title}
        onChange={setTitle}
        placeholder="Search"
      />
    </div>
  );
}