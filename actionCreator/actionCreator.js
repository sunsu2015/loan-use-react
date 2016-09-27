/**
 * Created by sunsu on 2016/9/20.
 */
import {changeTab,changeButtonText,changeCurrentPageContent,changePageContent,validateInput} from '../action/action'
import fetch from 'isomorphic-fetch'
export function changeHeaderTab(activeTab){
    return dispatch=>dispatch(changeTab(activeTab));
}
export function changePageButtonText(tabs,activeTab){
    console.log(activeTab,tabs[tabs.length-1].value)
    if(activeTab==tabs[tabs.length-1].value){
        return dispatch=>dispatch(changeButtonText('提交'));
    }
    return dispatch=>dispatch(changeButtonText('下一步'));
}

export function changePageData(data){
    return dispatch =>dispatch(changePageContent(data));
}
export function changeCurrentPageData(key,val){
    return dispatch=>dispatch(changeCurrentPageContent(key,val));
}
export function requestCar(params){
    return dispatch=>{
        fetch(
            params.base+'unit/carModels/'+params.type+'/'+params.parent,
            {
                headers:{
                    'Authorization':params.Authorization
                }
            }
        ).then(response=>response.json())
            .then(list=>{
                console.log(list);
                dispatch(changeCurrentPageContent(params.key,params.val,list));
            })
    }
}

export function validate(validateData){
    return dispatch=>dispatch(validateInput(validateData));
}