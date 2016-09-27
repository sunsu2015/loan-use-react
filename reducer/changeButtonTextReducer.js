/**
 * Created by sunsu on 2016/9/20.
 */
import {type} from '../actionType/actionType'

export default function data(state='下一步',action){
    switch (action.type){
        case type.CHANGE_BUTTON_TEXT:
            return action.buttonText;
        default:
            return state;
    }
}