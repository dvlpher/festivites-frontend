import { resetTripForm } from "./tripForm.js"

//synchronous actions
export const setMyTrips = trips => {
    return {
      type: "SET_MY_TRIPS",
      trips
    }
  }

export const clearTrips = () => {
  return {
    type: "CLEAR_TRIPS"
  }
}


export const addTrip = trip => {
  return{
  type: "ADD_TRIP",
  trip
}
}

export const deleteTripSuccess = tripId => {
  return {
    type: "DELETE_TRIP",
    tripId
  }
}

export const updateTripSuccess = trip => {
  return {
    type: "UPDATE_TRIP",
    trip
  }
}

  //async actions
export const getMyTrips = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/trips", {
          credentials: "include",
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
        })
          .then(r => r.json())
          .then(response => {
            if (response.error) {
              alert(response.error)
            } else {
              dispatch(setMyTrips(response.data))
            }
          })
          .catch(console.log)
      }
}

export const createTrip = (tripData, history) => {
  return dispatch => {
    const railsTripData = {
        user_id: tripData.userId,
        start_date: tripData.startDate,
        end_date: tripData.endDate,
        name: tripData.name,
        festival_length: tripData.festivalLength,
        ticket_cost: tripData.ticketCost,
        travel_group: tripData.travelGroup,
        stay_name: tripData.stayName,
        stay_address: tripData.stayAddress,
        stay_cost: tripData.stayCost
    }
    return fetch("http://localhost:3000/api/v1/trips", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(railsTripData)
    })
    .then(r => r.json())
    .then(resp => {
      if(resp.error) {
        alert(resp.error)
      } else {
      dispatch(addTrip(resp.data))
      dispatch(resetTripForm())
      history.push(`/trips/${resp.data.id}`)
      }
    })
  }
}

export const updateTrip = (tripData, history) => {
  return dispatch => {
    const railsTripData = {
      start_date: tripData.startDate,
        end_date: tripData.endDate,
        name: tripData.name,
        user_id: tripData.userId,
        festival_length: tripData.festivalLength,
        ticket_cost: tripData.ticketCost,
        travel_group: tripData.travelGroup,
        stay_name: tripData.stayName,
        stay_address: tripData.stayAddress,
        stay_cost: tripData.stayCost
    }
    return fetch(`http://localhost:3000/api/v1/trips/${tripData.tripId}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(railsTripData)
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(updateTripSuccess(resp.data))
          history.push(`/trips/${resp.data.id}`)
        }
      })
      .catch(console.log)

  }
}

export const deleteTrip = (tripId, history) => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/trips/${tripId}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(deleteTripSuccess(tripId))
          history.push(`/trips`)
        }
      })
      .catch(console.log)

  }

}