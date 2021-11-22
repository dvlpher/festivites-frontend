import React from 'react';
import TripForm from './TripForm'
import { createTrip } from '../actions/myTrips'
import { connect } from 'react-redux'

const NewFormContainer = ({ history, createTrip }) => {

  const handleSubmit = (formData, userId) => {
    createTrip({
      ...formData,
      userId
    }, history)
  }
  return  <TripForm history={history} handleSubmit={handleSubmit} />
};

export default connect(null, { createTrip })(NewFormContainer);