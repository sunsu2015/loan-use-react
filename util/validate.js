/**
 * Created by sunsu on 2016/9/23.
 */
export default function validate(data){
    let result={pass:true,error:''};
    for(let i=0,length=data.length;i<length;i++){
        let item = data[i];
        if(item.require && !item.value){
            result.pass = false;
            result.error = item.label+'是必填项';
            break;
        }
        if(item.rule){
            for(let index=0,len=item.rule.length;index<len;index++){
                let element = item.rule[index];
                if(typeof element === 'function'){
                    if(!element(item.value)){
                        result.pass= false;
                        result.error = item.error[index];
                        break;
                    }
                }
                else{
                    if(!RegExp(element).test(item.value)){
                        result.pass=false;
                        result.error = item.error[index];
                        break;
                    }
                }
            }
            if(!result.pass){
                break;
            }
        }
    }
    return result;
}
