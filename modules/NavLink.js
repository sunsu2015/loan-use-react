/**
 * Created by sunsu on 2016/8/23.
 */
import React,{Component} from 'react'
import {Link} from 'react-router'

export default class NavLink extends Component{
    render(){
        return (
            <Link {...this.props}/>
        )
    }
}