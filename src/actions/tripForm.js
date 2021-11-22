//synch actions


export const updateTripForm = (name, value) => {
    const formData = { name, value }
    return {
        type: "UPDATE_NEW_TRIP_FORM",
        formData
    }
}

export const resetTripForm = () => {
    return {
      type: "RESET_NEW_TRIP_FORM",
    }
  }

  export const updateExistingTrip = trip => {
      return {
          type: "UPDATE_EXISTING_TRIP"
      }
  }