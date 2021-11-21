import React from "react";
import { connect } from "react-redux"
// import Login from './Login.js'
import Logout from './Logout.js'
import { NavLink } from "react-router-dom";


const NavBar = ({ currentUser }) => {
   return (
        <div className="NavBar">
       <NavLink exact activeClassName="active" to="/trips"> My Trips   </NavLink>
       <NavLink exact activeClassName="active" to="/trips/new"> Create New Trip   </NavLink>
       { !!currentUser ? <Logout /> : null }
        </div>
    )
}


//can destructure because the incoming argument is an object, state, coming from redux.
const mapStateToProps = ({ currentUser }) => {
    return { 
      currentUser
    }
  }

export default connect(mapStateToProps)(NavBar)
