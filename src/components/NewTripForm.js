import React from "react";
import { updateNewTripForm } from "../actions/newTripForm.js";
import { connect } from 'react-redux'

const NewTripForm = ({ name, startDate, endDate, history}) => {

    const handleChange= event => {

        const{ name, value } = event.target
        updateNewTripForm(name, value)
    }

    const handleSubmit = event => event.preventDefault()
    return(
    <form onSubmit={handleSubmit}> 
        <input placeholder={"Name"} name="name" onChange= {handleChange} value={name}/>
        <input placeholder={"Start Date"} name="startDate" onChange={handleChange}  value={startDate}/>
        <input placeholder={"End Date"} name="endDate" onChange={handleChange} value={endDate}/>
        <input type="submit" value= "Create Trip" />
    </form>
)};

 const mapStateToProps = state => {
     const { name, startDate, endDate} = state.newTripForm
     return {
       name,
        startDate,
        endDate
    }
}

export default connect(mapStateToProps)(NewTripForm);

//start_date
//end_date
//location_id
//user_id
//
