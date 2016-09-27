/**
 * Created by sunsu on 2016/9/20.
 */
import {type} from '../actionType/actionType'

export default function data(state=[{value:'loan',name:'贷款信息'},{value:'basic',name:'基本信息'},{value:'contact',name:'联系方式'}],action){
    switch (action.type){
        case type.CHANGE_TABS_LIST:
            return [{value:'loan',name:'贷款信息'},{value:'basic',name:'基本信息'},{value:'contact',name:'联系方式'}]
        default:
            return state;
    }
}