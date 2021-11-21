import React from "react";
import { connect } from "react-redux"
import { updateSignupForm } from "../actions/signupForm.js";
import { signup } from "../actions/currentUser.js"

const Signup = ({signupFormData, updateSignupForm, signup, history }) => {

    const handleUserInputChange = event => {
        // event.preventDefault()
        const { name, value} = event.target
        const updatedFormInfo = {
            ...signupFormData,
            [name]: value
        }
        updateSignupForm(updatedFormInfo)
    }

    const handleHometownInputChange = event => {
        event.preventDefault()
        const { name, value} = event.target
        const updatedFormInfo = {
            ...signupFormData,
            hometown:
            {
                ...signupFormData.hometown,
            [name]: value
            }
        }
        updateSignupForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        signup(signupFormData, history)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder = "name" value={signupFormData.name} name="name" type="text" onChange={handleUserInputChange} />
            <input placeholder = "username" value={signupFormData.username} name="username" type="text" onChange={handleUserInputChange} />
            <input placeholder= "password" value={signupFormData.password} name="password" type="text" onChange={handleUserInputChange} />
            <input placeholder = "city" value={signupFormData.hometown.city} name="city" type="text" onChange={handleHometownInputChange} />
            <input placeholder = "state" value={signupFormData.hometown.state} name="state" type="text" onChange={handleHometownInputChange} />
            <input placeholder = "country" value={signupFormData.hometown.country} name="country" type="text" onChange={handleHometownInputChange} />
            <input value="Sign Up" type="submit"/>
         </form>
    )
}

const mapStateToProps = state => {
    return {
        signupFormData: state.signupForm
    }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup)
