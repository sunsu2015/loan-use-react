/**
 * Created by sunsu on 2016/9/20.
 */
import {type} from '../actionType/actionType'

export default function data(state='loan',action){
    switch (action.type){
        case type.CHANGE_TAB:
            return action.activeTab;
        default:
            return state;
    }
}