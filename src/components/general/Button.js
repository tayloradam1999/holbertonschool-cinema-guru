import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './general.css';


export default function Button(props) {
  // returns a <button> element with the given attributes.

  // props:
  // - label: String - button label
  // - className: String - button className
  // - icon: (optional)FontAwesomeIcon - icon name to decorate button
  // - onClick: (optional)Function - function to call when button is clicked

  // destructuring props
  const { label, className, icon, onClick } = props;

  return (
    <div className="button-container">
      <button
        className={className}
        onClick={onClick}
      >
        {/* if icon is defined */}
        {icon &&
          <FontAwesomeIcon
            icon={icon}
            className="button-icon"
          />
        }
        <span className="button-label">
          {label}
        </span>
      </button>
    </div>
  )
}