import { combineReducers } from 'redux';
import jobReducer from './jobReducer';
import authReducer from './authReducer';
import applicationReducer from './applicationReducer';
import appliedReducer from './appliedReducer'

const rootReducer = combineReducers({
    jobs: jobReducer,
    auth: authReducer,
    applications: applicationReducer,
    applied: appliedReducer
})
export default rootReducer;