import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './general.css';


export default function Button(props) {
  // returns a <button> element with the given attributes.

  // Props:
  // - label: String - button label
  // - className: String - button className
  // - type: String - button type
  // - icon: (optional)FontAwesomeIcon - icon name to decorate button
  // - onClick: (optional)Function - function to call when button is clicked

  // destructuring props
  const { label, className, icon, onClick, type } = props;

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