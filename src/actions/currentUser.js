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
            return fetch("http://localhost:3000/api/v1/login" {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username: "brandon", password: "password"})
            })
        }
    }
        