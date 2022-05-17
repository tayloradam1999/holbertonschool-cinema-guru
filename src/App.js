import React, { useState } from 'react';
import Input from './components/general/Input';
import SelectInput from './components/general/SelectInput';
import Button from './components/general/Button';
import SearchBar from './components/general/SearchBar';
import './App.css';

function App() {
  // init state for text input
  const [inputValue, setTextValue] = useState('');
  // init state for number input
  const [numberValue, setNumberValue] = useState('');
  // init state for select input
  const [selectValue, setSelectValue] = useState('');
  // init state for search bar
  const [searchBarValue, setSearchBarValue] = useState('');

  // event handler for input text change
  function handleInput(event) {
    // set the value of the input
    console.log('working');
    setTextValue(event.target.value);
  }

  // event handler for number input number change
  function handleNumberInput(event) {
    // set the value of the input
    console.log('working');
    setNumberValue(event.target.value);
  }

  // event handler for select input change
  function handleSelectInput(event) {
    // set the value of the input
    console.log('working');
    setSelectValue(event.target.value);
  }

  // event handler for search bar input change
  function setTitle(event) {
    // set the value of the input
    console.log('working');
    setSearchBarValue(event.target.value);
  }

  // event handler for onClick event of the button
  function onClick(event) {
    // button functionality
    console.log('button clicked');
  }


  return (
    <div className="App">
      <Input 
        label="Username:"
        type="text"
        className="input-text"
        value={inputValue}
        setValue={handleInput}
        icon="user"
        inputAttributes={{placeholder: "Username"}} 
      />
      <Input
        label="Min Date:"
        type="number"
        className="input-number"
        value={numberValue}
        setValue={handleNumberInput}
        icon=""
        inputAttributes={{ placeholder: "0" }}
      />
      <SelectInput
        label="Sort:"
        options={['Default', 'Latest', 'Oldest', 'Highest Rated', 'Lowest Rated']}
        className="input-select"
        value={selectValue}
        setValue={handleSelectInput}
      />
      <Button
        label="Search"
        className="button-search"
        icon="search"
        onClick={onClick}
      />
      <Button
        label="Show more"
        className="button-show-more"
        icon=""
        onClick={onClick}
      />
      <SearchBar
        title={searchBarValue}
        setTitle={setTitle}
      />
    </div>
  );
}

export default App;
