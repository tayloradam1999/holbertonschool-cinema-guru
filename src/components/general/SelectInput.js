import React, { useState } from 'react';
import './general.css';


export default function SelectInput({label, options, className, value}) {
  // returns a <input> element with the given attributes.

  // props:
  // - label: String - input label
  // - options: Array - array of select options
  // - className: String - input className
  // - value: Any - input value

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
