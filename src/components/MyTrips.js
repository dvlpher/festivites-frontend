import React from "react";
import TripCard from './TripCard.js'
import { connect } from "react-redux"

const MyTrips = props => {
    const tripCards = props.trips.length > 0 ? props.trips.map(t => <TripCard trip={t} key={t.id} />) : null
    return (
        tripCards
    )
}

const mapStateToProps = state => {
    return {
        trips: state.myTrips 
    }
}

export default connect(mapStateToProps)(MyTrips)