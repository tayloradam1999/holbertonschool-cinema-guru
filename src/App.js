import React, { useState, useEffect } from 'react';
// import Input from './components/general/Input';
// import SelectInput from './components/general/SelectInput';
// import Button from './components/general/Button';
// import SearchBar from './components/general/SearchBar';
import axios from 'axios';
import './App.css';
import Authentication from './routes/auth/Authentication';
import Dashboard from './routes/dashboard/Dashboard';

function App() {
  // init state for isLoggedIn
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // init state for userUsername
  const [userUsername, setUserUsername] = useState('');

  // event handler for on mount
  useEffect(() => {
    // get value of accessToken from localStorage
    const accessToken = localStorage.getItem('accessToken');
    // send post request to /api/auth with auth header set to 'Bearer <accessToken>'
    axios
      .post(`http://localhost:8000/api/auth`, {}, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        // on success, set isLoggedIn to true
        setIsLoggedIn(true);
        // on success, set userUsername to res.data.username
        setUserUsername(res.data.username);
        console.log(res.data.username);
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
      {/* if isLoggedIn is true, show Dashboard component */}
      {isLoggedIn ? (
        <Dashboard 
          userUsername={userUsername} 
          setIsLoggedIn={setIsLoggedIn} 
        />
      ) : (
        /* if isLoggedIn is false, show Authentication component */
          <Authentication 
            setIsLoggedIn={setIsLoggedIn}
            setUserUsername={setUserUsername}
          />
        // <Authentication />
      )}

    </div>
  );
}

export default App;
