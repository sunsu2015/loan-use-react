/**
 * Created by sunsu on 2016/9/20.
 */
import {type} from '../actionType/actionType'
const {CHANGE_TAB,CHANGE_BUTTON_TEXT,CHANGE_PAGE_CONTENT,CHANGE_CURRENT_PAGE_CONTENT,VALIDATE} = type;
export function changeTab(activeTab){
    return {
        type:CHANGE_TAB,
        activeTab
    }
}

export function changeButtonText(buttonText){
    return {
        type:CHANGE_BUTTON_TEXT,
        buttonText
    }
}

export function changeCurrentPageContent(key,val,list){
    switch (key){
        case 'drivingLicenseHas':
            return {
                type:CHANGE_CURRENT_PAGE_CONTENT,
                data:val=='Other' ||val=='HireDriver' ? {
                    index:1,
                    items:[
                        {label:'代驾人姓名',type:'input',_key:'designaterName',require:true,placeholder:'请输入代驾人姓名'},
                        {label:'代驾人驾驶证号',type:'input',_key:'designaterIDNo',require:true,placeholder:'请输入代驾人驾驶证号'}
                    ],
                    key,
                    val
                }:{
                    index:1,
                    length:2,
                    items:[
                        {label:'代驾人姓名',type:'input',_key:'designaterName',require:true,placeholder:'请输入代驾人姓名'},
                        {label:'代驾人驾驶证号',type:'input',_key:'designaterIDNo',require:true,placeholder:'请输入代驾人驾驶证号'}
                    ],
                    key,
                    val
                }
            }
        case 'carFactory':
            return {
                type:CHANGE_CURRENT_PAGE_CONTENT,
                data:{
                    items:list,
                    key,
                    val
                }
            }
        default:
            return {
                type:CHANGE_CURRENT_PAGE_CONTENT,
                data:{
                    key,
                    val
                }
            }
    }
}

export function changePageContent(data){
    return {
        type:CHANGE_PAGE_CONTENT,
        data
    }
}

export function validateInput(validateData){
    return {
        type:VALIDATE,
        validateData
    }
}