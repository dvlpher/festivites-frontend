import './App.css';
import React from 'react';
import Login from './components/Login.js'
import Logout from './components/Logout.js'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'

class App extends React.Component {
  componentDidMount() {
   this.props.getCurrentUser()
  }

  render() {
  return (
    //saying if current user show logout button if not show login
    this.props.currentUser ? <Logout/> : <Login/>
  );

  }
}
//can destructure because the incoming argument is an object, state, coming from redux.
const mapStateToProps = ({ currentUser }) => {
  return { 
    currentUser
  }
}

export default connect (mapStateToProps, { getCurrentUser }) (App);
