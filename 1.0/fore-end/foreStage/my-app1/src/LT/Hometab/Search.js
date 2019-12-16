import React, { Component } from 'react'
import {HashRouter  as Router,withRouter,Route,Link,Switch,Redirect} from 'react-router-dom';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { NavBar, Carousel, Grid, SegmentedControl, ListView, Accordion, List } from 'antd-mobile';
import ReactDOM from 'react-dom';
import './Search.css';
const axios = require('axios');
const querystring = require('querystring');
export default class Search extends Component {
    constructor(){
        super();
        this.handleInput = this.handleInput.bind(this);
        this.userChange = this.userChange.bind(this);
        this.state={
            search:'',
            todo:[],
            dataItem: [],
        }

    }
      componentDidMount() {
        fetch('http://localhost:5000/apphome/hometab/eye', {
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
      click= (value) =>{
        console.log(value);
      fetch('http://localhost:5000/apphome/hometab/eye/search?content='+value, {
        method: 'GET',
      })
        .then(res => res.json())
        .then(res => {
          // console.log(this.state.value);
          this.setState({
            dataItem: res
          })
          console.log(this.state.dataItem)
      }).then(()=>{
        // console.log(id);
      })
    }
      
      // click=(id)=>{
      //   fetch('http://localhost:5000/apphome/hometab/eye/class?tab_id='+id, {
      //     method: 'GET',
      //   })
      //     .then(res => res.json())
      //     .then(res => {
      //       console.log(res);
      //       this.setState({
      //         dataItem: res
      //       })
      //       console.log(this.state.dataItem)
      //   }).then(()=>{
      //     console.log(this.state.dataItem);
      // })
      // }
    delAll = (e) =>{
        this.setState({
            todo:[]
        })
    }
    addItem = (data) => {
        //this.state.todo.push(data);
        this.setState({
            todo:[...this.state.todo,data]
        })
    }
    delItem = (idx)=>{ 
        let todo = [...this.state.todo]//拷贝
        // let a=todo.length;
        todo.splice(idx,1);
        this.setState({
            todo:todo
        })
    }
    handleInput = (e) =>{
        //绑定this，事件处理函数写成箭头函数，或者用bind绑定
        if(e.keyCode === 13){
            //console.log(e.target.value);//获得输入的值
            this.addItem(e.target.value);//调用这个属性的函数
        }
        // e.target.value="";
        console.log("input");
    }
    handleChange = (e) => {
        // this.setState({
        //     // 必须加[],不然非法
        //     search:e.target.value
        // })
        this.setState({search: e.target.value })
        console.log("change");
    }
    userChange(e){
        this.setState({ search : e.target.value })
        console.log("userchange");

    }
    onChange= (value) => {
    this.setState({ value });
    };
    clear = () => {
    this.setState({ value: '' });
    };
    handleClick = () => {
    this.manualFocusInst.focus();
    }
    render() {
        return (
            <div>
                {/* 搜索栏 */}
                <div style={{width:'100%',height:40}}>
                    <Link to='/apphome'><i className="iconfont icon-fanhui" style={{fontSize:30,color:'black',height:40,paddingTop:5,float:'left'}}></i></Link>
                    <input
                        name='search'
                        // value={this.state.value}
                        type="text" ref={input => this.input = input} 
                        style={{margin:'6px 5px',padding:0,width:'78%',height:30,float:'left',background:'none',borderRadius:'15px',border:'1px solid gray'}}
                        placeholder="请输入关键词"
                        onSubmit={value => console.log(value, 'onSubmit')}
                        // onClear={value => console.log(value, 'onClear')}
                        onFocus={() => console.log('onFocus')}
                        onBlur={() => console.log('onBlur')}
                        onCancel={() => console.log('onCancel')}
                        // onChange={this.handleChange.bind(this)} 
                        onChange={this.userChange} 
                        onKeyDown={this.handleInput}
                        onSubmit={this.submit}

                    />
                    <button 
                    style={{float:'right',marginTop:10,borderRadius:'15px',
                    padding:0,width:40,height:26,
                    background:'gray',color:'white'}}
                    onClick={()=>this.click(this.input.value)}
                    >搜索</button>
                </div>
                {/* 热门搜索 */}
                <div id="s1">
                    <p>全网热推</p>
                    <ul>
                        <li>周杰伦2019“嘉年华”巡回演唱会</li>
                        <li>德云社相声</li>
                        <li>希腊雅典爱乐乐团</li>
                        <li>开心麻花《乌龙山伯爵》</li>
                        <li>儿童剧《西游记之三打白骨精》</li>
                    </ul>
                </div>
                {/* 历史搜索栏 */}
                <div id="s1">
                    <p>搜索发现</p>
                    <ul>
                        {
                            this.state.todo.map((item,idx)=>
                            <li key={idx}>
                                {item}
                            </li>)
                        }
                    </ul>
                    <span onClick={(e)=>this.delAll(e)}>清除历史记录</span>
                </div>
                <ul style={{ listStyle: 'none', margin: '10px auto' }}>
                {
                    this.state.dataItem.map((item, index) => (
                    <Link to={'/apphome/hometab/details/' + item.article_id}>
                        {/* <Link to='/apphome/hometab/details'> */}
                        <li style={{ height: '110px', width: '95%', margin: '0 auto', marginBottom: '10px', border: '1px solid #8794a8' }} key={index}>
                        <img style={{ width: '20%', height: '80px', float: 'left' }} src={item.img} />
                        <div style={{ display: 'inline-block', marginLeft: '10px', width: '70%', float: 'left' }}>
                            <h4 style={{
                            display: "block", marginTop: '5', marginLeft: '20px',
                            textOverflow: "ellipsis", whiteSpace: "nowrap",
                            overflow: "hidden", width: "235px", fontSize: '20px'
                            }}>
                            {item.title}
                            </h4>
                            <p style={{
                            width: '230px', height: '40px', display: 'block', wordBreak: "normal",
                            overflow: 'hidden', display: 'inline-block', marginLeft: '20px', lineHeight: "20px",
                            color: 'gray', fontSize: '15px'
                            }}>
                            {item.content}
                            </p>
                        </div>
                        </li>
                    </Link>
                    ))
                }
                </ul>
            </div>
        )
    }
}
