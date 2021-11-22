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
// import TripForm from './components/TripForm';
import TripCard from './components/TripCard';
import { updateExistingTrip } from './actions/tripForm.js';
import NewFormContainer from './components/NewFormContainer';
import EditFormContainer from './components/EditFormContainer.js';

class App extends React.Component {
  componentDidMount() {
   this.props.getCurrentUser()
  }

  render() {
    const { loggedIn, myTrips, updateExistingTrip } = this.props

  return (
   <div className="App">
     {loggedIn ? <NavBar /> : <Home/> }
     
          <Switch>
          <Route exact path="/login" component={ Login } />
          <Route exact path="/signup" render={ ({history})=> <Signup history={history}/> } />
          <Route exact path="/trips" component={ MyTrips} />
          <Route exact path="/trips/new" component={ NewFormContainer } />
          <Route exact path="/trips/:id" render={ props => {
            const trip = myTrips.find(trip => trip.id === props.match.params.id)
            return < TripCard trip={trip} {...props} />
          } } />
          <Route exact path="/trips/:id/edit" render={ props => {
            const trip = myTrips.find(trip => trip.id === props.match.params.id)
            trip && updateExistingTrip(trip)
            return <EditFormContainer trip={trip} {...props}/>
          } } />
          </Switch>
   </div>  
  );

  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    myTrips: state.myTrips

  })
}



export default withRouter(connect(mapStateToProps, { getCurrentUser, updateExistingTrip }) (App));
