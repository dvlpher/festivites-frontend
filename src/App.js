import './App.css';
import React from 'react';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import MyTrips from './components/MyTrips.js';
import  NavBar  from './components/NavBar.js'
import { Route, Switch, withRouter } from "react-router-dom";
import Home from './components/Home.js'
import NewTripForm from './components/NewTripForm';

class App extends React.Component {
  componentDidMount() {
   this.props.getCurrentUser()
  }

  render() {
    const { loggedIn } = this.props

  return (
   <div className="App">
     {loggedIn ? <NavBar /> : <Home/> }
     
          <Switch>
          <Route exact path="/login" component={ Login } />
          <Route exact path="/signup" render={ ({history})=> <Signup history={history}/> } />
          <Route exact path="/trips" component={ MyTrips} />
          <Route exact path="/trips/new" component={ NewTripForm } />
          {/* <Route exact path="/" render={ (props)=> loggedIn ? <MyTrips {...props} /> : <Home {...props}/> } /> */}
          </Switch>
   </div>  
  );

  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}



export default withRouter(connect(mapStateToProps, { getCurrentUser }) (App));
