/**
 * Created by sunsu on 2016/9/22.
 */
import {type} from '../actionType/actionType'
import {loanInitData} from '../data/data'
export default function data(state={pass:false,error:'制造商是必填项'},action){
    switch (action.type){
        case type.VALIDATE:
            let result={};
            for(let i=0,length=action.validateData.length;i<length;i++){
                let item = action.validateData[i];
                if(item.require && !item.value){
                    result.pass = false;
                    result.error = item.label+'是必填项';
                    break;
                }
            }
            return Object.assign({},state,result);
        default:
            return state;
    }
}