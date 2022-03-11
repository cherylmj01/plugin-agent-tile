import { combineReducers } from 'redux';

import { reduce as CustomAgentStatsReducer } from './CustomAgentStatsState';

// Register your redux store under a unique namespace
export const namespace = 'agent-tile';

// Combine the reducers
export default combineReducers({
  CustomAgentStats: CustomAgentStatsReducer,
});
