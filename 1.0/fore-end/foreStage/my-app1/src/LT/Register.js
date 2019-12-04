import React, { Component } from 'react'
import { Flex, WhiteSpace } from 'antd-mobile';
import {Link} from 'react-router-dom'
import './indexldq.css'
export default class Register extends Component {
    render() {
        return (
            <div style={{width:'100%',textAlign:'center',background:'#fff'}}>        
            <WhiteSpace />
            <p>注册</p>
            <Flex align="start">
              <div className='placeholder'>
                <div className='img' style={{position:'relative'}}>
                    <img src='./images/register.png' style={{width:'60px',height:'65px'}}/>
                    <span style={{position:'absolute',right:'-8px',bottom:'-10px',color:'black',fontSize:'20px'}}>+</span>
                </div>
                <form action="" className='form'>
                  <input  placeholder='昵称'/>
                  <input  placeholder='Email'/>
                  <input type="password" placeholder='密码' name="" id=""/>
                  <p></p>
                  <Link to='/apphome'><input type='submit' value='注册' style={{background:'#8693a6',color:'#fff'}}/></Link>
                </form>
              </div>
            </Flex>
            <p><Link style={{color:'#bbb'}} to='/login'>已有账号了？点击登录</Link></p>
            <WhiteSpace />
         </div>
        )
    }
}
