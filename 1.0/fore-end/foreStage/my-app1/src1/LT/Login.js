import React from 'react';
import { Flex, WhiteSpace } from 'antd-mobile';
import { Link } from 'react-router-dom'
import './indexldq.css'
const axios = require('axios');
const querystring = require('querystring');
// let path = '/login';
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      name: '',
      pwd: ''
    }
  }
  change1 = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  change2 = (e) => {
    this.setState({
      pwd: e.target.value
    })
  }
  getConnect = () => {  //api请求函数
    // let data={
    //   username: this.state.name,
    //   password: this.state.pwd
    // };
    // data = querystring.stringify(data);
    // data=JSON.stringify(data)
    // axios.post('http://localhost:5000/login',data,{
    //   headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    // }).then(function (res) {
    //     console.log('成功')
    //     console.log(res);//处理成功的函数 相当于success
    //     this.setState({
    //       data: res[0]
    //     })
    //     console.log( window.location.hash)

    //     // window.location.hash='#/apphome'
    //     that.props.history.push('/apphome')
    //     // console.log( window.location.hash)
    //   }).catch(function (error) {
    //     console.log('失败')
    //     // console.log(error)//错误处理 相当于error
    //     // window.alert('验证失败，用户名或密码错误');
    //   })
    fetch('http://localhost:5000/login',{
      method:'POST', 
      headers: {'Content-Type': 'application/json; charset=utf-8'},
      body: JSON.stringify({
        username:this.state.name,
        password:this.state.pwd
      })})
    .then(res=>res.json())
    .then(res=>{
      if(!res[0]) {
        window.alert('验证失败，用户名或密码错误');
      }
      else {
        this.setState({
          data:res[0]
        })
        this.props.history.push('/apphome');
        // window.location.reload();
      }
    } 
    )
  }
  render() {
    return (
      <div style={{ width: '100%', textAlign: 'center', background: '#fff' }}>
        <WhiteSpace />
        <p>登录</p>
        <Flex align="start">
          <div className='placeholder'>
            <div className='img'>
              <img src='./images/register.png' style={{ width: '60px', height: '65px' }} />
            </div>
            <form className='form'>
              <input name='username' placeholder='username' value={this.state.name} onChange={this.change1} />
              <input type="password" placeholder='密码' name="password" id="" value={this.state.pwd} onChange={this.change2} />
              <br />
              <span><a>忘记密码？</a></span>
              <br />
              <input  value='登录 ' onClick={this.getConnect} style={{ background: '#8693a6', color: '#fff' ,textAlign:'center'}}/>
            </form>
          </div>
        </Flex>
        <p><Link style={{ color: '#bbb' }} to='/register'>新用户？点击这里注册</Link></p>
        <WhiteSpace />
      </div>
    );
  }
}