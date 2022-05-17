import React, { useState, useEffect } from 'react';
import Input from './components/general/Input';
import SelectInput from './components/general/SelectInput';
import Button from './components/general/Button';
import SearchBar from './components/general/SearchBar';
import axios from 'axios';
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

  // init state for isLoggedIn
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // init state for userUsername
  const [userUsername, setUserUsername] = useState('');

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

  // event handler for on mount
  useEffect(() => {
    // get value of accessToken from localStorage
    const accessToken = localStorage.getItem('accessToken');
    // send post request to /api/auth with auth header set to 'Bearer <accessToken>'
    axios
      .post(`http://localhost:8000/api/auth`, {}, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        // on success, set isLoggedIn to true
        setIsLoggedIn(true);
        // on success, set userUsername to res.data.username
        setUserUsername(res.data.username);
      })
      .catch((err) => {
        // on failure, set isLoggedIn to false
        setIsLoggedIn(false);
        // on failure, set userUsername to ''
        setUserUsername('');
      });
  }, []);

  return (
    <div className="App">
      {/* <Input 
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
      /> */}

      {/* if isLoggedIn is true, show Dashboard component */}
      {isLoggedIn ? (
        <Dashboard userUsername={userUsername} />
      ) : (
        /* if isLoggedIn is false, show Authentication component */
        <Authentication />
      )}

    </div>
  );
}

export default App;
