import './App.css';
import React from 'react';

class App extends React.Component {
  componentDidMount() {
    fetch("http://localhost:3000/api/v1/users/1")
    .then(r=>r.json())
    .then(console.log)
  }
  render() {
  return (
    "Hello I'm React"
  );
  }
}

export default App;
