const initalState = {
    username: "",
    password: ""
}


export default (state = initalState, action) => {
    switch(action.type) {
        case "UPDATE_LOGIN_FORM":
            return action.formData
            case "RESET_LOGIN_FORM":
            return initalState
        default:
            return state
    }
}