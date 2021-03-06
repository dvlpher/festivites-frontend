import React from "react";
import { connect } from "react-redux"
import { logout } from "../actions/currentUser.js"
import { withRouter } from "react-router";

const Logout = ({ logout, history }) => {
   return (
    <div>
        <form onSubmit={(event) => {
            event.preventDefault()
            logout()
            history.push('/')
        }
        }>
            
            <input  className="Logout" value="Log Out" type="submit"/>
          
         </form>
         </div>
    )
}


export default withRouter(connect(null, { logout } )(Logout))
