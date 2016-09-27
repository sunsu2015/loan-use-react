/**
 * Created by sunsu on 2016/9/20.
 */
import React,{Component} from 'react'

export default class SubmitButton extends Component{
    render(){
        return (
            <div className="submit">
                <div className="submit_btn" onClick={()=>this.props.onClick()}>{this.props.buttonText}</div>
            </div>
        )
    }
}