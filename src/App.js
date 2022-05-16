import './App.css';
import Input from './components/general/Input';
import React from 'react';


function App() {
  return (
    <div className="App">
      <Input label="Username" type="text" className="input-text" value="holbertonschool" icon="user" inputAttributes={{placeholder: "Username"}} />
    </div>
  );
}

export default App;
