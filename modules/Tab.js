/**
 * Created by sunsu on 2016/9/19.
 */
import React,{Component} from 'react'
import NavLink from './NavLink'
export default class Tab extends Component{
    render() {
        if(this.props.value=='loan'){
            return (
                <li style={{
                    backgroundColor:this.props.activeTab==this.props.value?'#00a0e9':'gray',
                    width:this.props.width
                }}
                className="nav">
                    <NavLink to='/' onlyActiveOnIndex  onClick={e=>this.props.onClick(e,this.props.value)}>{this.props.name}</NavLink>
                </li>
            )
        }
        return <li
            style={{
                    backgroundColor:this.props.activeTab==this.props.value?'#00a0e9':'gray',
                    width:this.props.width
                }}
            className="nav"><NavLink to={'/'+this.props.value}  onClick={e=>this.props.onClick(e,this.props.value)}>{this.props.name}</NavLink></li>
    }
}