/**
 * Created by sunsu on 2016/9/21.
 */
import {type} from '../actionType/actionType'
import {loanInitData} from '../data/data'
import clone from '../util/deepClone'
export default function data(state=loanInitData,action){
    switch (action.type) {
        case type.CHANGE_PAGE_CONTENT:
            return action.data
        case type.CHANGE_CURRENT_PAGE_CONTENT:
            let result = clone(state);
            result.map((item, index)=> {
                if (item._key == action.data.key) {
                    item.value = action.data.val;
                }
            });
            switch(action.data.key){
                case 'drivingLicenseHas':
                    if (!action.data.length) {
                        if (JSON.stringify(result).indexOf(action.data.items[0]._key) == -1) {
                            let preData = result.slice(0, action.data.index),
                                nextData = result.slice(action.data.index);
                            return preData.concat(action.data.items).concat(nextData);
                        }
                        else return result;
                    }
                    else {
                        if (JSON.stringify(result).indexOf(action.data.items[0]._key) != -1) {
                            let data = result.slice();
                            data.splice(action.data.index, action.data.length);
                            return data;
                        }
                        return result;
                    }
                case 'carFactory':
                    console.log(action.data.items);
                    return result;
                default:
                    return result;
            }
            if (action.data.items){

            }
            return result;
        default:
            return state;
    }
}