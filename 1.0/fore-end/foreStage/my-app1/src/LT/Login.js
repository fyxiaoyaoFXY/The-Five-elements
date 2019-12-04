import React from 'react';
import { Flex, WhiteSpace } from 'antd-mobile';
import {Link} from 'react-router-dom'
import './indexldq.css'
const content = {
  user_id: 2,
  username: "1",
  avatar: "",
  like_number:0,
  liked_number:0,
  age:0,
  sex:0,
  birth:18,
  star:'lion',
  job:'engineer',  
  hobby:'swim',
  place:'BeiJing',
  sign:"心情",  
  mobile: "",
  VIP:"false",
};
export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
     <div style={{width:'100%',textAlign:'center',background:'#fff'}}>        
        <WhiteSpace />
        <p>登录</p>
        <Flex align="start">
          <div className='placeholder'>
            <div className='img'>
              <img src='./images/register.png' style={{width:'60px',height:'65px'}}/>
            </div>
            <form action="" className='form'>
              <input  placeholder='Email' />
              <input type="password" placeholder='密码' name="" id=""/>
              <br/>
              <span><a>忘记密码？</a></span>
              <br/>
              <Link to='/apphome/'><input type='submit' value='登录' style={{background:'#8693a6',color:'#fff'}}/></Link>
            </form>
          </div>
        </Flex>
        <p><Link style={{color:'#bbb'}} to='/register'>新用户？点击这里注册</Link></p>
        <WhiteSpace />
     </div>
    );
  }
}