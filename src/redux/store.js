import { createStore, combineReducers } from 'redux'
import PhoneReducer from './phone/reducerPhone'
import TvReducer from './tv/reducerTv'

const rootReducer = combineReducers({
    phone: PhoneReducer,
    television: TvReducer
})

const store = createStore(rootReducer);





export default store;