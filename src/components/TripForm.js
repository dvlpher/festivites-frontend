import React from "react";
import { updateTripForm } from "../actions/tripForm.js";
import { createTrip } from "../actions/myTrips.js";
import { connect } from 'react-redux'

const TripForm = ({ formData, history, updateTripForm, createTrip, userId}) => {
    const { name, startDate, endDate } = formData 

    const handleChange= event => {
        console.log("trigger handle change")
        const{ name, value } = event.target
        updateTripForm(name, value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        createTrip({
            ...formData,
                userId,
            }, history)

        // formData: {
        //     name: ""
        //     startDate: ""
        //     endDate: ""
        //}
        
    }

    
    return( 
    <form onSubmit={handleSubmit}> 
        <input placeholder={"Name"} name="name" onChange= {handleChange} value={name}/>
        <input placeholder={"Start Date"} name="startDate" onChange={handleChange}  value={startDate}/>
        <input placeholder={"End Date"} name="endDate" onChange={handleChange} value={endDate}/>
        <input type="submit" value= "Create Trip" />
    </form>
)};

 const mapStateToProps = state => {
    const userId =  state.currentUser ? state.currentUser.id : "" 
     return {
        formData: state.tripForm,
        userId
    }
}

export default connect(mapStateToProps, { updateTripForm, createTrip })(TripForm);

//start_date
//end_date
//location_id
//user_id
//
