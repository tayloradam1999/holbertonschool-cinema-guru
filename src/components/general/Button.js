import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './general.css';


export default function Button({label, className, type, icon, onClick}) {
  // returns a <button> element with the given attributes.

  // Props:
  // - label: String - button label
  // - className: String - button className
  // - type: String - button type
  // - icon: (optional)FontAwesomeIcon - icon name to decorate button
  // - onClick: (optional)Function - function to call when button is clicked

  return (
    <div className="button-container">
      <button
        className={className}
        onClick={onClick}
        type={type}
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