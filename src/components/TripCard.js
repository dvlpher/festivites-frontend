import React from "react";
import { Link } from "react-router-dom";




const TripCard = ({ trip }) => {
    return (
    
      trip ?
    <div>
      <br>
      </br>
     <strong> <h3>{trip.attributes.name}</h3></strong>
    <p> Start Date: { trip.attributes.start_date ? trip.attributes.start_date: "Please update your start date" } </p>
    <p> End Date: {trip.attributes.end_date ? trip.attributes.end_date: "Please update your end date"  } </p>
    <p> Length of Festival: {trip.attributes.festival_length} </p>
    <p> Ticket Cost: {trip.attributes.ticket_cost}</p>
    <p> Who's All Going: {trip.attributes.travel_group}</p>
    <p> Camping or Hotel: {trip.attributes.stay_name}</p>
    <p> Address: {trip.attributes.stay_address}</p>
    <p> Cost of Stay: {trip.attributes.stay_cost}</p>
    <Link to={`/trips/${trip.id}/edit`}>Update your festival</Link>

    </div> :
    <p>This trip does not exist</p>
    )
}

export default TripCard