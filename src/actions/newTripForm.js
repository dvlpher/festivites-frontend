//synch actions

export const updateNewTripForm = (name, value) => {
    console.log("ACTION IS BEING FIRED")
    return {
        type: "UPDATE_NEW_TRIP_FORM",
        formData: { name, value }
    }
}