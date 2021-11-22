import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const MyTrips = props => {
  const tripCards = props.trips.length > 0 ?
    props.trips.map(t => (<p key={t.id}><Link to={`/trips/${t.id}`}>{t.attributes.name}</Link></p>)) :
    null

  return (
  <div><br></br><h2>MY FESTIVALS</h2>
  { tripCards }
  </div>
  
  )
}


const mapStateToProps = state => {
  return {
    trips: state.myTrips
  }
}

export default connect(mapStateToProps)(MyTrips)