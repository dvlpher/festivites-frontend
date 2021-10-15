//synchrnous action creators
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

//make a request to the backen
//asynchronous action creator
export const login = credentials => {
        return dispatch => {
            return fetch("http://localhost:3000")
        }
    }
        