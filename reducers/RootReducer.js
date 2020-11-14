import {combineReducers} from 'redux';
import todos from './TodoReducer';
import visibilityFilter from './VisibilityFilter';

export default combineReducers({
    todos,
    visibilityFilter
});
