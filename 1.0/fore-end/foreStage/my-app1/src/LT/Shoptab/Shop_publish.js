import React, { Component } from 'react';
import { NavBar,WingBlank,SegmentedControl,ImagePicker,InputItem,List,WhiteSpace,Button} from 'antd-mobile';



export default class Shop_publish extends Component {
    constructor(props) {
      super(props);
      this.state = {
        files: [],
        data: [],
        title:'',
        content:'',
        aprice:'',
      };
      this.length=0;
      this.img0=''
      this.img1=''
      this.img2=''
      this.img3=''
      this.img4=''
      this.img5=''
      this.name0='0.png'
      this.name1='0.png'
      this.name2='0.png'
      this.name3='0.png'
      this.name4='0.png'
      this.name5='0.png'
    }
    change1 = (e) => {
      this.setState({
        title: e.target.value
      })
    }
    change2 = (e) => {
      this.setState({
        content: e.target.value
      })
    }
    change3 = (e) => {
      this.setState({
        aprice: e.target.value
      })
    }
    click = () => {
      var files = this.state.files;
      this.length=files.length
      console.log(files)
      for(var i = 0; i < 6; i++) {
        if(i<files.length){
          if(i==0){
            // if(files[i].url!=''){
                this.img0=files[i].url;
                this.name0=files[i].file.name             
            // }           
          }
          if(i==1){
            // if(files[i].url!=''){
              this.img1=files[i].url;
              this.name1=files[i].file.name           
          }   
          if(i==2){
            // if(files[i].url!=''){
                this.img2=files[i].url;
                this.name2=files[i].file.name             
            // }           
          }
          if(i==3){
            // if(files[i].url!=''){
                this.img3=files[i].url;
                this.name3=files[i].file.name             
            // }           
          }
          if(i==4){
            // if(files[i].url!=''){
                this.img4=files[i].url;
                this.name4=files[i].file.name             
            // }           
          }
          if(i==5){
            // if(files[i].url!=''){
                this.img5=files[i].url;
                this.name5=files[i].file.name             
            // }           
          }   

        }else{    
          if(i==0){
            this.img0='./images/0.png'         
          }
          if(i==1){
            this.img1='./images/0.png'           
          }   
          if(i==2){
            this.img2='./images/0.png'         
          }
          if(i==3){
            this.img3='./images/0.png' 
          }
          if(i==4){
            this.img4='./images/0.png'        
          }
          if(i==5){
            this.img5='./images/0.png'         
          }         
                     
      } 

      }
      console.log(this.name0,this.name1)
      console.log(this.length)
      fetch('http://localhost:5000/publish',{
        "method":"post", 
        // params:JSON.stringify({"id":1})
        headers: {'Content-Type': 'application/json; charset=utf-8'},
        body: JSON.stringify({
          title:this.state.title,
          content:this.state.content,
          aprice:this.state.aprice,
          img0:this.img0,
          img1:this.img1,
          img2:this.img2,
          img3:this.img3,
          img4:this.img4,
          img5:this.img5,
          name0:this.name0,
          name1:this.name1,
          name2:this.name2,
          name3:this.name3,
          name4:this.name4,
          name5:this.name5,
          length:this.length
        //  
        })})
      // .then(res=>res.json())
      .then(res=>{
          // console.log(res)
          // this.setState({
          //   data:res[0]
          // })   
          // if(res) {
          //   this.props.history.push('/apphome');        
          // }      
        }
      )
    }
    
    // click1 = () => {
    //  var url='';
    //   var reader = new FileReader();      
    //   let input = document.getElementById("file")
    //   reader.readAsDataURL(input.files[0]);
    //   var that=this;
    //   reader.addEventListener("load",function() {
    //     url=reader.result
    //     // url=Buffer.from(reader.result,'base64');
    //     fetch('http://localhost:5000/publish',{
    //     "method":"post", 
    //     // params:JSON.stringify({"id":1})
    //     headers: {'Content-Type': 'application/json; charset=utf-8'},
    //     body: JSON.stringify({
    //       title:that.state.title,
    //       content:that.state.content,
    //       aprice:that.state.aprice,
    //       url:url,
    //     })})
    //   // .then(res=>res.json())
    //   .then(res=>{
    //       console.log(res)
    //       that.setState({
    //         data:res[0]
    //       })   
    //       if(res) {
    //         that.props.history.push('/apphome');        
    //       }      
    //     }
    //   )
    //   })
      
      // let data = new FormData()
      // data.append('from1', input.files[0])
      // console.log(data)
      // fetch('http://localhost:5000/publish',{
      //   "method":"post", 
      //   // params:JSON.stringify({"id":1})
      //   headers: {'Content-Type': 'application/json; charset=utf-8'},
      //   body: JSON.stringify({
      //     title:this.state.title,
      //     content:this.state.content,
      //     aprice:this.state.aprice,
      //     url:url,
      //   })})
      // // .then(res=>res.json())
      // .then(res=>{
      //     console.log(res)
      //     this.setState({
      //       data:res[0]
      //     })   
      //     if(res) {
      //       this.props.history.push('/apphome');        
      //     }      
      //   }
      // )
    
    
    onChange = (files, type, index) => {
      console.log(files, type, index);
      console.log(files[0].url)
      this.setState({
        files
      });
    }
    handleClick = () => {
      this.inputRef.focus();
    };
     
      
  render(){  
    const{files}=this.state; 
    return (
      <div>
        {/* <NavBar mode="light" style={{background:'#8794a8',color:'black'}}
                leftContent={[
                    <i style={{fontSize:22,lineHeight:'22px',marginLeft:'-10px'}} className='iconfont icon-fanhui'></i>,
                ]}
                onLeftClick={this.onOpenChange}
            >发布</NavBar> */}
        <div style={{width:'100%',height:'200px',backgroundColor:'#7a727f'}}>
            <div style={{width: '80px',height:'80px',margin:'0px auto'}}>
            <img src={`./images/16.jpg`} style={{marginTop:'20px',width: '80px',height:'80px',border:'1px solid black',borderRadius:"50%"}} />
            </div>
            {/* <Button style={{width:'60%',margin:'0 auto',backgroundColor:'#8794a8',marginTop:'40px',color:'white'}}>充值会员即可发布</Button> */}
            <p style={{width:'90%',margin:'0 auto',marginTop:'40px',color:'white',textAlign:'center'}}>亲爱的会员，快来发布你的艺术品吧</p>
        </div>
        <form className='form'>        
          <input name='title' placeholder='标题' value={this.state.title} onChange={this.change1} style={{width:'80%',paddingLeft:'20px'}}/>
          <input  name="aprice" id="" placeholder='价钱' value={this.state.aprice} onChange={this.change3} style={{width:'80%',paddingLeft:'20px'}}/>
          <br/>请输入内容<br/><textarea rows="5" cols="20" onChange={this.change2} name='content'  value={this.state.content} style={{width:'80%',paddingLeft:'20px'}}/>
          
        </form>
        {/* <List>
          <InputItem
            name = 'title'
            placeholder="输入标题"
            onChange={this.change1}
            value={this.state.title}
          >标题
          </InputItem>
          <InputItem
          name = 'content'
            style={{height:'1000px'}}
            placeholder="相关描述"
            onChange={this.change2}
            value={this.state.content}
          >相关描述
          </InputItem>
        </List>
        <List>
          <InputItem
          name= 'aprice'
            placeholder="0.00"
            extra="¥"
            onChange={this.change3}
            value={this.state.aprice}
          >价钱</InputItem>
        </List> */}
        <ImagePicker
          files={files}
          onChange={this.onChange}
          // onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 6}
          multiple
          accept="image/gif,image/jpeg,image/jpg,image/png"
        />
        {/* <form  > */}
        {/* <div class="webuploader-pick">
            <input type="file" name="file" id="file"/>
            选择图片
        </div>
        
            <div class="webuploader-pick" onClick={this.click1}>
                <button value="提交">tijiao</button>
            </div> */}
        {/* </form> */}
        {/* <input type="file" id="file" multiple/>
	      <input type="button" value="文件上传" onclick="ShowFileName();"/> */}
        <Button onClick={this.click} style={{width:'90%',margin:'0 auto',backgroundColor:'#7a727f',marginTop:'120px',color:'white'}}>发布</Button>
        </div>
    );
  }
}


