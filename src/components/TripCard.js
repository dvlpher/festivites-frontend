import React from "react";
import { Link } from "react-router-dom";




const TripCard = ({ trip }) => {
    return (
    
      trip ?
    <div>
     <strong> FESTIVAL: {trip.attributes.name} </strong>
    <p> Start Date: { trip.attributes.start_date ? trip.attributes.start_date: "Please update your start date" } </p>
    <p> End Date: {trip.attributes.end_date ? trip.attributes.end_date: "Please update your end date"  } </p>
    <p> Length of Festival:  </p>
    <p> Performers: </p>
    <p> Ticket Cost:</p>
    <p> Who's All Going: </p>
    <p> Camping or Hotel: </p>
    <p> Address: </p>
    <p> Cost of Stay: </p>
    <Link to={`/trips/${trip.id}/edit`}>Update your festival</Link>

    </div> :
    <p>This trip does not exist</p>
    )
}

export default TripCard