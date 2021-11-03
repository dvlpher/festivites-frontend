import React from "react";
import { connect } from "react-redux"
import { updateLoginForm } from "../actions/loginForm.js";

const Login = ({loginForm, updateLoginForm}) => {
    const handleInputChange = event => {
        const {name, value} = event.target
        const updatedFormInfo = {
            ...loginForm,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }
    return (
        <form onSubmit={undefined}>
            <input placeholder = "username" value={loginForm.username} name="username" type="text" onChange={handleInputChange} />
            <input placeholder= "password" value={loginForm.password} name="password" type="text" onChange={handleInputChange} />
            <input value="Log In" type="submit"/>
         </form>
    )
}

const mapStateToProps = state => {
    return {
        loginForm: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm })(Login)
