/**
 * Created by sunsu on 2016/9/20.
 */
import {combineReducers} from 'redux'
import changeTabReducer from './changTabReducer'
import changeTabsListReducer from './changeTabsListReducer'
import changeButtonTextReducer from './changeButtonTextReducer'
import changePageDataReducer from './changePageDataReducer'
import validateReducer from './validateReducer'
const reducer = combineReducers({
    activeTab:changeTabReducer,
    tabs:changeTabsListReducer,
    buttonText:changeButtonTextReducer,
    data:changePageDataReducer,
    validate:validateReducer
})
export default reducer