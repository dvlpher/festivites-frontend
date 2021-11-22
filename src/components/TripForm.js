import React from "react";
import { updateTripForm } from "../actions/tripForm.js";
import { connect } from 'react-redux'

const TripForm = ({ formData, updateTripForm, userId, trip, handleSubmit, editMode  }) => {
    const { name, startDate, endDate, festivalLength, ticketCost, travelGroup, stayName, stayAddress, stayCost   } = formData 

    const handleChange= event => {
        console.log("trigger handle change")
        const{ name, value } = event.target
        updateTripForm(name, value)
    }

    
    return( 
        <form onSubmit={event => {
            event.preventDefault()
            handleSubmit(formData, userId)
          }}>
        <input placeholder={"Name"} name="name" onChange= {handleChange} value={name}/>
        <input placeholder={"Start Date"} name="startDate" onChange={handleChange}  value={startDate}/>
        <input placeholder={"End Date"} name="endDate" onChange={handleChange} value={endDate}/>
        <input placeholder={"Length of Festival"} name="festivalLength" onChange={handleChange} value={festivalLength}/>
        <input placeholder={"Ticket Cost"} name="ticketCost" onChange={handleChange} value={ticketCost}/>
        <input placeholder={"Travel Group"} name="travelGroup" onChange={handleChange} value={travelGroup}/>
        <input placeholder={"Name of Stay Location"} name="stayName" onChange={handleChange} value={stayName}/>
        <input placeholder={"Stay Address"} name="stayAddress" onChange={handleChange} value={stayAddress}/>
        <input placeholder={"Cost of Stay"} name="stayCost" onChange={handleChange} value={stayCost}/>

        <input
        type="submit"
        value={editMode ? "Update Trip" : "Create Trip" }
      />
    </form>
)};

const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.id : ""
    return {
      formData: state.tripForm,
      userId
    }
  }

export default connect(mapStateToProps, { updateTripForm })(TripForm);

//start_date
//end_date
//location_id
//user_id
//
