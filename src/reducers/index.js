import { combineReducers } from 'redux';
import FamilyReducer from './family_reducer';
import ActiveMember from './family_active_reducer';

const rootReducer = combineReducers({
	family:FamilyReducer,
	ActiveMember:ActiveMember,
  
});
export default rootReducer;
