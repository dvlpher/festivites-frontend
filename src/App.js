import './App.css';
import React from 'react';
import Login from './components/Login.js'

class App extends React.Component {
  componentDidMount() {
    fetch("http://localhost:3000/api/v1/users/1")
    .then(r=>r.json())
    .then(console.log)
  }
  render() {
  return (
    <Login/>
  );
  }
}

export default App;
