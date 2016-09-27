/**
 * Created by sunsu on 2016/8/30.
 */
import React,{Component} from 'react'
import Tab from './Tab'
export default class Header extends Component{
    render() {
        return (
            <div>
                <ul className="header">
                    {
                        this.props.tabs.map(
                            (tab,index)=><Tab {...tab} key={index} index={index} activeTab={this.props.activeTab} width={this.props.tabs.length==4?'25%':'33.3%'}
                                                       onClick={(e,tabName)=>this.props.onClick(e,tabName)}></Tab>
                        )
                    }
                </ul>
            </div>
        );
    }
}