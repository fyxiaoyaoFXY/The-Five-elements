import React, { Component } from 'react';
import '../../index_fxy.css';
import {Link} from 'react-router-dom';
import Chat from 'chat-react';
// import {Native} from 'react-router-dom';
// import Sendmessage from './Sendmessage';
// import Todolist from './ToDolist/Todolist'
import { Accordion, List } from 'antd-mobile';
import Todoing from './ToDolist/Todoing';
import Todoinput from './ToDolist/Todoinput';
import { Grid } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import './mychat.css'

// const data = Array.from(new Array(17)).map((_val, i) => ({
//   icon: './img/夜晚.png',
//   text: `name${i}`,
// }));
// const GridExample = () => (
//   <div>
//     <div className="sub-title">Carousel</div>
//     <Grid data={data} isCarousel onClick={_el => console.log(_el)} />
//   </div>
// );

export default class MyChat extends Component {
  state = {
    inputValue: '',
    messages: [
      {
        timestamp: 1545925494422,
        userInfo: {
          avatar: "http://img.binlive.cn/6.png",
          name: "游客1544365758856",
          userId: "1544365758856"
        },
        value: "你好！"
      },
      {
        timestamp: 1545925534218,
        userInfo: {
          avatar: "http://img.binlive.cn/6.png",
          name: "游客1544365758856",
          userId: "1544365758856"
        },
        value: "一起来聊天吧！",
        error: true
      }],
    timestamp: new Date().getTime()
  }
  setInputfoucs = () => {
    this.chat.refs.input.inputFocus();  //set input foucus
  }
  setScrollTop = () => {
    this.chat.refs.message.setScrollTop(1200);  //set scrollTop position
  }
  sendMessage = (v) => {
    console.log(v)
    const { value } = v;
    if (!value) return;
    const { messages = [] } = this.state;
    messages.push(v);
    this.setState({ messages, timestamp: new Date().getTime(), inputValue: '' });
  }
  onChange = (key) => {
    console.log(key);
  }
    // constructor(...args) {
    //     super(...args);
    //     this.state = {
    //       todo:[],
    //         a:100,
    //         b:100
    //     };
    //   }
      
     
    // addItem = (data) => {
    //     //this.state.todo.push(data);
    //     this.setState({
    //         todo:[...this.state.todo,data]
    //     })
    // }
    // delItem = (idx)=>{ 
       
    //     let todo = [...this.state.todo]//拷贝
    //     todo.splice(idx,1);
    
    // }
    render() {
      const { inputValue, messages, timestamp } = this.state;
    const userInfo = {
      avatar: "./images/16.jpg",
      userId: "59e454ea53107d66ceb0a598",
      name: 'ricky'
    };
        return (
<div style={{height:'100%',background:"white"}}>
            <Chat
              style={{width:'100%',height:'80%',position:'fixed',top:'0px'}}
              ref={el => this.chat = el}
              dataSource={messages}
              userInfo={userInfo}
              value={inputValue}
              sendMessage={this.sendMessage}
              timestamp={timestamp}
              placeholder="请输入"
              messageListStyle={{ width: '100%', height: '900px', color: 'black',background:'white' }}
        />
        </div>
        )
    }
}