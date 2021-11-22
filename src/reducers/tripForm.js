const initialState = {
    name: "",
    startDate: "",
    endDate: "",
    festivalLength: "",
    ticketCost: "",
    travelGroup: "", 
    stayName: "", 
    stayAddress: "", 
    stayCost: ""
}


export default (state=initialState, action) => {
    switch (action.type) {
        case "UPDATE_NEW_TRIP_FORM":
            return {
                ...state,
                [action.formData.name]: action.formData.value
            }
        case "RESET_NEW_TRIP_FORM":
            return initialState
            case "UPDATE_EXISTING_TRIP":
                return action.updatedFormData
        default:
            return state
    }
}