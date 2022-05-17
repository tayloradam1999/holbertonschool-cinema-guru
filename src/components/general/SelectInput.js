import React, { useState } from 'react';
import './general.css';


export default function SelectInput(props) {
  // returns a <input> element with the given attributes.

  // label: String - input label
  // options: Array - array of select options
  // className: String - input className
  // value: Any - input value

  // destructuring props
  const { label, options, className, value, setValue } = props;


  return (
    <div className="input-container">
      <div className="input-above">
        <label className="input-label">
          {label}
        </label>
      </div>
      <select
        className={className}
        value={value}
        onChange={setValue}
      >
        {options.map((option, index) => (
          <option
            key={index}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
