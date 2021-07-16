import { createStore, combineReducers, applyMiddleware } from 'redux'
import PhoneReducer from './phone/reducerPhone'
import TvReducer from './tv/reducerTv'
import commentReducer from './commentaire/reducerComments'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    phone: PhoneReducer,
    television: TvReducer,
    comments: commentReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));





export default store;