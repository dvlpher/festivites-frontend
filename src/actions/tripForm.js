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
      const updatedFormData = {
        name: trip.attributes.name,
        startDate: trip.attributes.start_date,
        endDate: trip.attributes.end_date,
        festivalLength: trip.attributes.festival_length,
        ticketCost: trip.attributes.ticket_cost,
        travelGroup: trip.attributes.travel_group, 
        stayName: trip.attributes.stay_name, 
        stayAddress: trip.attributes.stay_address, 
        stayCost: trip.attributes.stay_cost
      }
      return {
          type: "UPDATE_EXISTING_TRIP",
          updatedFormData
      }
  }