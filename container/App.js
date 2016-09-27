// import React from 'react'
//
// export default React.createClass({
//   render() {
//     return <div>Hello, React Router!</div>
//   }
// })

import React,{Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import Header from '../modules/Header'
import  {VisibleFilters,basicInitData,contactInitData,loanInitData,pbasicInitData} from '../data/data'
import SubmitButton from '../modules/SubmitButton'
import * as actionCreator from '../actionCreator/actionCreator'
import validate from '../util/validate'
let App = React.createClass({
  // constructor:function(props){
  //      // super(props);
  //     console.log('constructor')
  // },
    getDefaultProps:function(){
        console.log('getDefaultProps')
    },
    getInitialState:function(){
        console.log('getInitialState')
        return null;
    },
    componentWillMount:function(){
        console.log('componentWillMount');
    },
  componentDidMount:function(){
      console.log('componentDidMount')
      this.basicData = basicInitData;
      this.contactData = contactInitData;
      this.loanData = loanInitData;
      this.pbasicData = pbasicInitData;
      // requestCar({
      //     key:'carFactory',
      //     val:null,
      //     base:'http://10.116.50.48:8088/',
      //     type:'fac',
      //     parent:1,
      //     Authorization:'30db27cd98ac69d81f621b5a56d87603'
      // });
  },

  render:function() {
    console.log('render');
    let {contain,activeTab,tabs,actions,buttonText} = this.props;
    console.log('contain:',contain);
    let children = React.cloneElement(this.props.children,{contain:contain,onChange:(key,val)=>{
            actions.changeCurrentPageData(key,val);
        }
    });

    return (
        <div>
          <Header tabs={tabs} activeTab={activeTab}
                  onClick={(e,tabName)=>{
                  console.log(e)
                        if(tabName!=activeTab){
                            switch(activeTab){
                                case 'basic':
                                    this.basicData = contain;
                                    break;
                                case 'loan':
                                    this.loanData = contain;
                                    break;
                                case 'pbasic':
                                    this.pbasicData = contain;
                                    break;
                                case 'contact':
                                    this.contactData = contain;
                                    break;
                            }
                            let result = validate(contain)
                            if(!result.pass){
                                alert(result.error);
                                e.preventDefault()
                                return;
                            }
                            actions.changeHeaderTab(tabName);
                            actions.changePageButtonText(tabs,tabName);
                            switch(tabName){
                                case 'basic':
                                    actions.changePageData(this.basicData);
                                    break;
                                case 'loan':
                                    actions.changePageData(this.loanData);
                                    break;
                                case 'pbasic':
                                    actions.changePageData(this.pbasicData);
                                    break;
                                case 'contact':
                                    actions.changePageData(this.contactData);
                                    break;
                            }
                        }
                    }
                  }/>

          {children}
          <SubmitButton buttonText={buttonText}
                        onClick={()=>{
                            let currentIndex=0;
                            tabs.map((tab,index)=>{
                                if(tab.value==this.activeTab){
                                    currentIndex =index;
                                }
                            })
                            if(activeTab!=tabs[tabs.length-1].value){
                                actions.changeHeaderTab(tabs[currentIndex+1].value);
                                actions.changePageButtonText(tabs,tabs[currentIndex+1].value);
                            }
                        }}/>
        </div>
    );
  },
    componentWillReceiveProps:function(newProps){

        console.log('componentWillReceiveProps newProps:',newProps)
    },
    shouldComponentUpdate:function(){
        console.log('shouldComponentUpdate')
        return true;
    },
    componentWillUpdate:function(){
        console.log('componentWillUpdate')
    },
    componentDidUpdate:function(){
        console.log('componentDidUpdate')
    },
    componentWillUnmount:function(){
        console.log('componentWillUnmount')
    }
});

function mapStateToProps(state){
    return {
        contain:state.data,
        activeTab:state.activeTab,
        tabs:state.tabs,
        buttonText:state.buttonText,
    }
}
function mapDispatchToProps(dispatch){
    var actions = bindActionCreators(actionCreator,dispatch);
    return {actions:actions}
}
export default connect(mapStateToProps,mapDispatchToProps)(App)