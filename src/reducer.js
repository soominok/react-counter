import { combineReducers } from 'redux' 
import counterReducer from '../counter/counter.counterReducer'

const rootReducer = combineReducers({
    counterReducer
})

export default rootReducer