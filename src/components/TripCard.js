import React from "react";

const TripCard = ({ trip }) => {
    return (
     <strong> ALL OF MY TRIPS </strong>,
    <p> { trip.attributes.name } </p>
    )
}

export default TripCard