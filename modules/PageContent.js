/**
 * Created by sunsu on 2016/9/20.
 */
import React,{Component} from 'react'
import List from './List'
import  {basicInitData,contactInitData,loanInitData,pbasicInitData} from '../data/data'
export default class PageContent extends Component{
    constructor(props){
        super(props);
    }
    // getInitialState(){
    //     console.log('aaaaaaaaaa');
    // }
    __getSource(key){
        console.log(key);
        switch(key){
            case 'basic':
                return basicInitData;
            case 'contact':
                return contactInitData;
            case 'pbasic':
                return pbasicInitData;
            case 'loan':
            default:
                return loanInitData;
        }
    }
    render(){
        let __handleChange = this.props.onChange;
        return (
            <div>
                <ul>
                    {
                        this.props.contain.map(function(item,index){
                            return (
                                <List {...item} key={index} onChange={(key,val)=>__handleChange(key,val)}/>
                            )
                        })

                    }
                </ul>
                <div className="submit">
                    <div className="submit_btn">{this.props.buttonText}</div>
                </div>
            </div>
        )
    }
}