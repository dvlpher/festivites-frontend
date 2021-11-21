import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
//import usersReducer from './reducers/users.js'
import currentUser from './reducers/currentUser.js'
import thunk from 'redux-thunk'
import loginForm from './reducers/loginForm.js'
import myTrips from './reducers/myTrips.js'
import signupForm from './reducers/signupForm.js'
import newTripForm from './reducers/newTripForm.js'


const reducer = combineReducers({
    currentUser,
    loginForm,
    myTrips,
    signupForm,
    newTripForm
  })
  
  //dev tools
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

  
  export default store