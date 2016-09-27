/**
 * Created by sunsu on 2016/9/19.
 */
import React,{Component} from 'react'
 let count = 0;
 let List = React.createClass({
    componentWillUnmount:function(){
        console.log('组件被销毁！');
    },
    getDefaultProps:function(){
        console.log('List getDefaultProps')
        return {haha:0}
    },
    getInitialState:function(){
        console.log('List getInitialState',count)
        return {
            myCount:count++,
            showCount:true
        };
    },
    componentWillMount:function(){
        //此处是最后修改state的机会，接下来会执行render进行DOM渲染
         if(this.state.myCount==0){
             this.setState({'showCount':false});
         }
    },
    render:function(){
        console.log('List render')
        //通过判断state.showCount来决定是否要在label显示state.myCount
        return(
            <li>
                <div className="label">{this.props.label+(this.state.showCount?this.state.myCount:'')}{this.props.require?<span className="required">*</span>:''}</div>
                <div className="input">
                {
                    this.props.type=='input'?<input type="text" placeholder={this.props.placeholder} ref={this.props._key} value={this.props.value} onChange={()=>{console.log(this.props._key,this.refs[this.props._key].value);this.props.onChange(this.props._key,this.refs[this.props._key].value)}}/>
                        :<select ref={this.props._key} value={this.props.value} onChange={()=>{console.log(this.props._key,this.refs[this.props._key].value);this.props.onChange(this.props._key,this.refs[this.props._key].value)}}>
                        {
                            this.props.options.map(function(element){
                                if(element.val){
                                    return <option key={element.val} value={element.val} >{element.text}</option>
                                }
                                else{
                                    return <option key={element.val} value={element.val} disabled style={{display:'none'}}>{element.text}</option>
                                }
                            })
                        }
                    </select>
                }
            </div>
            </li>
        )
    },
     componentDidMount:function(){
         //如果进行DOM修改，应放在这个方法里
         if(this.state.myCount==0){
             let node = document.getElementsByClassName('label')[0];
             let orgLabel = node.children[0].innerHTML;
             node.children[0].innerHTML = orgLabel+2;
         }
         if(this.state.myCount==1){
             let node = document.getElementsByClassName('label')[1];
             let orgLabel = node.children[1].innerHTML;
             node.children[0].innerHTML = orgLabel+3;
         }
     }
})
export default List;