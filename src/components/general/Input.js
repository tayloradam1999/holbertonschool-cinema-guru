import React, { useState } from 'react';
import './general.css';


const Input = (props) => {
  // returns a <input> element with the given attributes.

  // label: String - input label
  // type: String - input type
  // className: String - input className
  // value: Any - input value
  // setValue: Function - function to set the value of the input
  // icon: (optional)FontAwesomeIcon - icon name to decorate input
  // inputAttributes: (optional)Object - attributes to add to the input element

  // type attribute possible values:
  //   - text
  //   - password
  //   - number

  // destructuring props
  const { label, type, className, value, icon, inputAttributes } = props;

  // init state
  const [inputValue, setValue] = useState(value);

  function handleInput(event) {
    // set the value of the input
    setValue(event.target.value);
  };

  return (
    <div className="input-container">
      {icon && <i className={`fa fa-${icon}`}></i>}
      <label className="input-label">{label}</label>
      <input
        className={className}
        type={type}
        value={inputValue}
        onChange={handleInput}
        {...inputAttributes}
      />
    </div>
  );
}


export default Input;