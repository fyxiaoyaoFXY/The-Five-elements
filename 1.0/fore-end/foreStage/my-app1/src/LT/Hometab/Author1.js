import React, { Component } from 'react'
import {HashRouter  as Router,withRouter,Route,Link,Switch,Redirect} from 'react-router-dom';

const axios = require('axios');
const querystring = require('querystring');
let id=0;

export default class Author extends Component {
    constructor(props) {
        super(props);
        this.state = {
          dataItem: [],
          data: [
            { icon: 'iconfont icon-huazhan', tit: '画展'},
            { icon: 'iconfont icon-sheying', tit: '话剧'},
            { icon: 'iconfont icon-songdance', tit: '非遗'},
            { icon: 'iconfont icon-diaosu2', tit: '摄影展'},
            { icon: 'iconfont icon-sydney1162852easyiconnet', tit: '雕塑展'},
            { icon: 'iconfont icon-feiyihuicuichuantongjiyi-_huaban', tit: '漫展'},
          ]
        }
      }
    
      componentDidMount() {
        id = this.props.match.params.id;
        fetch('http://localhost:5000/apphome/hometab/ear', {
          method: 'GET',
        })
          .then(res => res.json())
          .then(res => {
            console.log(res);
            this.setState({
              dataItem: res
            })
            console.log(this.state.dataItem);
          }).then(()=>{
            console.log(this.state.dataItem);
        })
      }
    render() {
        return (
            <div style={{width: '100%',height:'108%',backgroundColor: '#fff',zIndex:999,position:'absolute',overflow:'auto'}}>
                {
                this.state.dataItem.map((item, index) => {
                    if(item.article_id==id){
                        return(
                            <div>
                                <Link to={'/apphome/hometab/details1/' + item.article_id}>
                                    <div style={{position:'fixed',top:10,left:10,zIndex:5,fontSize:22}} className='iconfont icon-fanhui'></div>
                                </Link>
                                <div style={{height:'50%',overflow:'hidden'}}>
                                <img src={item.avatar} style={{width:"100%"}}/>
                                </div>
                                    <div style={{height:'35%'}}>
                                        <div style={{height:'40%',margin:15}}>
                                            <div style={{
                                                        width:80,
                                                        height:80,
                                                        borderRadius:20,
                                                        backgroundImage:'url('+item.avatar+')',
                                                        backgroundSize:'120% 100%',
                                                        float:'left',
                                                        marginRight:15
                                                    }}></div>
                                            <p style={{margin:0,fontSize:22,fontWeight:'bolder',display:"block",width:"100%"}}>{item.author}</p>
                                        </div>
                                        <div style={{border:'1px solid #d4d4d4',height:'60%',margin:15,borderRadius:5}}>   
                                            {item.content}              
                                            <button style={{width:50,height:25,float:'right',marginTop:15,marginLeft:30,backgroundColor:'#fff',border:'1px solid #d4d4d4',borderRadius:5}}>粉丝<span>0</span></button>
                                            <button style={{width:50,height:25,float:'right',marginTop:15,backgroundColor:'#fff',border:'1px solid #d4d4d4',borderRadius:5,}}>关注<span>0</span></button>
                                        </div>
                                    </div>
                                    {/* <div style={{height:'7%',width:'100%',position:'fixed',bottom:50}}>
                                        <button style={{width:'50%',height:'100%',float:'left',
                                        border:0,backgroundColor:'#8bc34a',color:'#fff'}}>关注</button>
                                        <button style={{width:'50%',height:'100%',float:'left',
                                        border:0,backgroundColor:'#d4d4d4'}}>私信</button>
                                    </div> */}
                                    
                                </div>
                               
                        ) 
                    }
                    
                })
                }
            </div>  
        )
    }
}
