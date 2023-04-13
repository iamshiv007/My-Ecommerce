import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'

import {
    userReducer,
    profileReducer,
    forgotPasswordReducer,
    allUsersReducer,
    userDetailsReducer
} from './reducers/userReducer'

const reducer = combineReducers({
    user:userReducer,
    allUsers:allUsersReducer,
    profile:profileReducer,
    forgotPassword:forgotPasswordReducer,
    userDetails:userDetailsReducer,
})

const middleware = [thunk]

const store = createStore(
    reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store