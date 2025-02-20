import React from 'react';
import {HashRouter  as Router,withRouter,Route,Link,Switch,Redirect} from 'react-router-dom';

import Apphome from './LT/Apphome';
import Login from './LT/Login';
import Register from './LT/Register';
import Greeting from './LT/Greeting';
import One from './LT/One';

export default class App extends React.Component {
 

  render() {
    return (
    <Router>
      <div>
        {/* <One/> */}
        <Route exact path='/' component={One}/> 
        <Route path='/greeting' component={Greeting}/> 
        <Route path='/register' component={Register}/> 
        <Route path='/login' component={Login}/> 
        <Route path='/apphome' component={Apphome}/> 
        {/* <Route path='/home' component={Home}/>
        <Route path='/search' component={Search}/>       
        <Route path='/member' component={Member}/>
        <Route path='/Vip' component={Vip}/>
        <Route path='/chat' component={Chat}/>
        <Route path='/dynamic' component={Dynamic}/> */}
      
      </div>
    </Router>

    );
  }
}