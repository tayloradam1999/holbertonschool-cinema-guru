import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './general.css';


const Input = ({label, type, className, value, setValue, icon, inputAttributes}) => {
  // returns a <input> element with the given attributes.

  // props:
  // - label: String - input label
  // - type: String - input type
  // - className: String - input className
  // - value: Any - input value
  // - setValue: Function - function to set the value of the input
  // - icon: (optional)FontAwesomeIcon - icon name to decorate input
  // - inputAttributes: (optional)Object - attributes to add to the input element

  // type attribute possible values:
  // - text
  // - password
  // - number

  // init state
  const [inputValue, setInputValue] = useState(value);

  // set the value of the input
  const setValueFunc = (event) => {
    setInputValue(event.target.value);
    setValue(event.target.value);
  };

  return (
    <div className="input-container">
      <div className="input-above">
        {/* if icon is defined */}
        {icon &&
          <FontAwesomeIcon
            icon={icon}
            className="input-icon"
          />
        }
        <label className="input-label">
          {label}
        </label>
      </div>
      <input
        className={className}
        type={type}
        value={inputValue}
        onChange={setValueFunc}
        {...inputAttributes}
        autoComplete="off"
      />
    </div>
  );
}


export default Input;