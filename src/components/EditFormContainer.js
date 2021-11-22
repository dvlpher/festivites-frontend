import React from 'react';
import TripForm from './TripForm'
import { updateTrip, deleteTrip } from '../actions/myTrips'
import { updateExistingTrip, resetTripForm } from '../actions/tripForm.js'
import { connect } from 'react-redux'

class EditFormContainer extends React.Component {
  componentDidMount(){
    this.props.trip && this.props.updateExistingTrip(this.props.trip)
  }

  componentDidUpdate(prevProps) {
    this.props.trip && !prevProps.trip && this.props.updateExistingTrip(this.props.trip)
  }

  componentWillUnmount() {
    this.props.resetTripForm()
  }

  handleSubmit = (formData) => {
    const { updateTrip, trip, history } = this.props
    updateTrip({
      ...formData,
      tripId: trip.id
    }, history)
  }

  render() {
    const { history, deleteTrip, trip } = this.props
    const tripId = trip ? trip.id : null
    return  <>
              <TripForm editMode handleSubmit={this.handleSubmit} />
              <br/>
              <button style={{color: "red"}} onClick={()=>deleteTrip(tripId, history)}>Delete this trip</button>
            </>
  }
};

export default connect(null, { updateTrip, updateExistingTrip, resetTripForm, deleteTrip })(EditFormContainer);