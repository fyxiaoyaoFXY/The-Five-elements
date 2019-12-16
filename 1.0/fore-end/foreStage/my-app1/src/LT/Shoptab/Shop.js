import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { SearchBar,WhiteSpace, Tabs ,Grid } from 'antd-mobile';

import Shop_publish from './Shop_publish';
import { Item } from 'rc-menu';
const ticketContent = {
    id:1,
    tImg: "./images/朗.jpg",
    tName: "pic"
};
const artContent = {
    id:1,
    aImg: "./images/朗.jpg",
    aName: "pic"
};
const souvenirContent = {
    id:1,
    sImg: "./images/朗.jpg",
    sName: "pic"
};
// const art = Array.from(new Array(9)).map(() => ({
//     icon: artContent.aImg,
//     id:artContent.id
// }));

const ticket = Array.from(new Array(9)).map(() => ({
    icon: ticketContent.tImg,
    id:ticketContent.id
}));
const souvenir = Array.from(new Array(9)).map(() => ({
    icon: souvenirContent.sImg,
    id:souvenirContent.id
}));

const tabs = [
    { title: '票类'},
    { title: '艺术品'},
    { title: '发布'},
];    
// const TabExample = () => {
//     return <div style={{ height: 600}}>
//       <WhiteSpace />
//       <Tabs tabs={tabs}
//         initialPage={0}
//         tabBarPosition="left"
//         tabDirection="vertical"
//       >
//         <div style={{alignItems: 'center', backgroundColor: '#fff' }}>
//           &nbsp;&nbsp;&nbsp;&nbsp;<h5 style={{marginTop:'-10px'}}>&nbsp;&nbsp;&nbsp;&nbsp;音乐会</h5>
//           <Grid data={ticket}
//             columnNum={3}
//             renderItem={dataItem => (
//                 <Link to='/apphome/shoptab/shop_detail_one'>
//                     <div>
//                         <img src={dataItem.icon} style={{width: '67px', height: '67px'}} alt="" />
//                         <div style={{ color: '#888', fontSize: '14px' }}>
//                         <span>{ticketContent.tName}</span>
//                         </div>
//                     </div>
//                 </Link>
//             )}
//             />
//             &nbsp;&nbsp;&nbsp;&nbsp;<h5 style={{marginTop:'-10px'}}>&nbsp;&nbsp;&nbsp;&nbsp;演唱会</h5>
//             <Grid data={ticket}
//                 columnNum={3}
//                 renderItem={dataItem => (
//                     <Link to='/apphome/shoptab/shop_detail_one'>
//                         <div>
//                             <img src={dataItem.icon} style={{width: '67px', height: '67px'}} alt="" />
//                             <div style={{ color: '#888', fontSize: '14px' }}>
//                             <span>{ticketContent.tName}</span>
//                             </div>
//                         </div>
//                     </Link>
//                 )}
//                 />
//         </div>
//         <div style={{  alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
//             <ul style={{listStyle:'none',margin:'0px auto'}}>
//             {
//                 this.state.data.map((item,index)=>(
//                 // <Link to={'/details/'+index}>
//                 <Link to='/apphome/shoptab_detail_two'>
//                 <li style={{height:'110px',width:'95%',margin:'0 auto',marginBottom:'10px',border:'1px solid #8794a8'}} key={1}>
//                     <img style={{width:'90px',height:'90px',float:'left'}} src={item.aImg}/>
//                     <div style={{display:'inline-block',marginLeft:'10px'}}>
//                 <h2>{item.aName}</h2>
//                     </div>
//                 </li>
//                 </Link>
//                 ))
//             }
//             </ul>

//         </div>
//         <div style={{ alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
//             <Shop_publish/>
//         </div>
        
//       </Tabs>
//       <WhiteSpace />
//     </div>
// };
export default class Goods extends Component {
    constructor() {
        super();
        this.state={
            style:{
                zIndex: '100',
                width: '100%',
                height: 'auto',
                background: 'white',
                position: '',
                transition: 'all  1s linear',
                fontSize: '25px',
            },
            data:[],
            data1:[]
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        fetch('http://localhost:5000/apphome',{
            method:'GET' 
            })
          .then(res=>res.json())
          .then(res=>{
            this.setState({
                data:res
            })
            console.log(this.state.data)
          } 
          )
          fetch('http://localhost:5000/apphome1',{
            method:'GET' 
            })
          .then(res=>res.json())
          .then(res=>{
            this.setState({
                data1:res
            })

            console.log(this.state.data1)
          } 
          )
    }
    handleScroll=(event)=>{
        let ctx=this;
        let scrollTop  = document.documentElement.scrollTop;  //滚动条滚动高度
        if(scrollTop>100){
            ctx.setState({ style: {
                zIndex: '100',
                width: '100%',
                height: 'auto',
                background: '#dcd9dd',
                fontSize: '25px', 
                position: "fixed",
                top:0,
                left:0 ,
                transition: 'all  1s linear'
            } })
        }else
        {
            ctx.setState({ style: {
                zIndex: '100',
                width: '100%',
                height: 'auto',
                background: 'white',
                fontSize: '25px' ,
                position: '',
                transition: 'all  1s linear',
            }})
        }    
    }
    render() {
        return (
            <div className='box'>
                <div className='header' onWheel={(e) => this.handleScroll(e)} style={this.state.style}>
                    <SearchBar placeholder="搜索商品" maxLength={8} />
                </div>                
                <div style={{ height: 600}}>
                    <WhiteSpace />
                    <Tabs tabs={tabs}
                        initialPage={0}
                        tabBarPosition="left"
                        tabDirection="vertical"
                    >
                        {/* <div style={{alignItems: 'center', backgroundColor: '#fff' }}> */}
                        <div style={{  alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                        <ul style={{listStyle:'none',margin:'0px auto'}}>
                            {
                                this.state.data1.map((item,index)=>(
                                // <Link to={'/apphome/shoptab_detail_one/'+item.id}>
                                 <Link to={'/apphome/shoptab/shop_detail_one/'+item.id}>
                                <li style={{height:'110px',width:'95%',margin:'0 auto',marginBottom:'10px',border:'1px solid #8794a8'}} key={1}>
                                    <img style={{width:'90px',height:'90px',float:'left'}} src={item.tImg}/>
                                    <div style={{display:'inline-block',marginLeft:'10px'}}>
                                    <h4>{item.tName}</h4>
                                    </div>
                                </li>
                                </Link>
                                ))
                            }
                            </ul>
                        </div>
                        <div style={{  alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                            <ul style={{listStyle:'none',margin:'0px auto'}}>
                            {
                                this.state.data.map((item,index)=>(
                                <Link to={'/apphome/shoptab/shop_detail_two/'+item.id}>
                                {/* <Link to='/apphome/shoptab_detail_two'> */}
                                <li style={{height:'110px',width:'95%',margin:'0 auto',marginBottom:'10px',border:'1px solid #8794a8'}} key={1}>
                                    <img style={{width:'90px',height:'90px',float:'left'}} src={item.aImg}/>
                                    <div style={{display:'inline-block',marginLeft:'10px'}}>
                                    <h4>{item.aName}</h4>
                                    </div>
                                </li>
                                </Link>
                                ))
                            }
                            </ul>

                        </div>
                        <div style={{ alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
                            <Shop_publish/>
                            <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAGuAa4DASIAAhEBAxEB/8QAHQAAAwACAwEBAAAAAAAAAAAAAAcIBgkBBAUCA//EAFwQAAACBwMGCgcEAw4EBAYDAAABAgMFBhESEwQHFAgYISIxhBUWJDI3QVaktNMXRmFmpcTjJSczRGKR0iM4RVFUVXFzdIGTlLKzNkOh0TWSlbEoNFKiwcNjgvD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AqkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB5D0PAzHVYdpbLetWEZtmlqrqaSyWZIkEdVEjM4pJEWgusB64Aqs4K7HtN3C1eWDOCux7TdwtXlgGqAKrOCux7TdwtXlgzgrse03cLV5YBqgCqzgrse03cLV5YM4K7HtN3C1eWAaoAqs4K7HtN3C1eWDOCux7TdwtXlgGqAYo4t4LsP3juKjTx+Ckr8nWqpJ5peeijGMiWyOweo9DwMx1mFaWy3rVhGbZpaq6mkslmSJBHVRIzOKSRFoLrAeuAKrOCux7TdwtXlgzgrse03cLV5YBqgCqzgrse03cLV5YytxbwXYfvG8VGnj8FJX5OtVSTzS89FGMZEtkdgDKgAAAAAAAAAHkPQ8DMdVh2lst61YRm2aWquppLJZkiQR1USMzikkRaC6wHrgCqzgrse03cLV5YaoAAAYq/N4LsOJguNTTwGNnocnWrZ5JZuYilCE6O2G0BlQAvnWvicV6W7ZmOwm5imlaZqSnCL0JpUUk0tZJAiKCKJnpPqDBAAAAAAAAAAAAAAAvnovhcV1W7aWM3m5hWlZpaqnCL05ZkSTLWRQMj1UiPQfWPLzgrse03cLV5YBqgC+dW+FxXpb1mYzBbmKaVpmpKcIvQmlRSTPWSQIi1UTPSYYIAAAL56L4XFdVu2ljN5uYVpWaWqpwi9OWZEky1kUDI9VIj0H1gGCAKrOCux7TdwtXlgzgrse03cLV5YBqgCqzgrse03cLV5YM4K7HtN3C1eWAaoAqs4K7HtN3C1eWDOCux7TdwtXlgGqAKrOCux7TdwtXlgzgrse03cLV5YBqgAAAAAAAAAAABVZUfQU826+KVBqhVZUfQS826+KVAIAAAbVAGqsA2qAAaqwDaoABqrANqggDKj6dnm3XwqoA1chj123H5gNTKj6Cnm3XxSoKvIY9dtx+YDVyo+gl5t18UqAQAAAAAKqyGPXbcfmA1clzoJdnevFLQ1QAAAAAAaqxf+S50EuzvXiloBqhVZUfQU826+KVBqgAaqxtUANVYDaoJVy5/Unfvlw1clzoJdnevFLQqsuf1J375cAqslzp2dnevCrRf4gDJc6dnZ3rwq0X+AADVWL/AMlzoJdnevFLQDVAJWy5vUnfvlxKwDakAaqwAGrlR9Orzbr4VUFUL/yXOgp2d68UtCqy5/UnfvlwCqyXOnZ2d58KtF/iAMlzp2dnefCrRf4AEAZUfTq826+FVC/xAGVH06vNuvhVQBVAFVZDPrtuPzAqkBqsANqgAGqsA2qAAaqwC/8AKj6CXm3XxSoQAA2qAAAAAAAAAAAABVZUfQS826+KVBqhVZUfQS826+KVAIAG1QaqxtUASBfzfC/Tq3rtxjsFuYRm2ahSU4RQnLMoVpnrJIGZ6yRnpPrGAZwV53abuFl8sGVH07PNu3hVQVIBrZwV53abuFl8sGcFed2m7hZfLCpAA2qCAMqPp2ebdfCqhf4gDKj6dnm3XwqoA1chj123H5gUo9Dvsx6mFaWM3rLimbaZaqmokhNKkSRayJkZayJHoMTXkMeu24/MB/3ovdxEcVpvHgsfgqXJ6tKedagr50qUITx2HsAYrm+3Y9me/wBq8wGb7dj2Z7/avMCqzufcn4t9EVUA8l13fZjqsKysZg2XCs2zTUlNRJOWZI0ktZIzM9ZIz0n1hLZVl4LzuLxX4qtPAY3FV+Tqls8lGXnopQhOlshtD/Cqvzui9KfAn23wVwbX/KV6lSn+mjCFP2xj7ACWuHvgfp6r1mGxm83MWzbTXqqcIoQmlULEy1kECMtZEj0H1CviCAuuydeIj9Mx4+NGPwVXk/B9KedUmr51VKEJ47D2B/gNVYYLrXxP06zDszGYTdwrNs01JThFCcsyRppaySBmeskZ6T6w6c0b32+E/WBmje+3wn6wDK8lO8F53740camnj8FhaHJ1SqSetNzEUYxkR2x2DPr+ngabrXUNxsMK1YRpWahSXU0U5Zl6tA9VIjI9VIy0l1jy7jLo/RZw39t8K8JUPylCnTqfppRjU9kIe0ZVei6PHtxGm7eNwGNpcopVZJFqCzmzIxjJDaW0BFmcFed2m7hZfLFVZvt2PZnv9q8wKnNG99vhP1hVQCK70bwXnusfppua4bT4Kdtm0sLY8OqX06ipBanrrUUkzimsTPSkcIwLQREFU/V4Dzv3guNTTx+CnocnVKpJ5ZuYijGMiO2OwVVejk68e37abx8aMBjaXJ+D6skipBXzqqMYyR2FtGK5o/vt8J+sAmt1ngabqtyzNlg2rCtKzTUl1NFZLMiaB6qRGR6qRlpLrGf5wV53abuFl8sZXejk68RHFabx8aMfgqXJ+D6U861BXzqqUITx2HsE/gOBf+S50EuzvXilogAX/kudBLs714paAyt+rvnYfvBcamZj8FPQ5QtVSTyzcxJGMZEdsdgxTN9uw7M9/tXmBqgAKrN8uw7M9/tXmAzfLsOzPf7V5gaoAHkOs77MdVhWZjMGy4Vm2aakpqJLJZkjSS1kjMz1kjPSfWJsy5/UnfvlxVUBKuXP6k798uAmx13gabqtyzNlg2rCtKzTUl1NFZLMiaB6qRGR6qRlpLrGf5wV53abuFl8sKsADakIByo+nZ5t18KqF/CAcqPp2ebdfCqgDVyGfXbcfmA6L+nhabrXUNxsMK1YRpWahSXU0U5Zl6tA9VIjI9VIy0l1hL5DPrtuPzAamVH0EvNu3ilQCV84K87tP3Cy+WDOCvO7T9wsvlhUAANbOCvO7Tdwsvlh/wCSleC8798aONTTx+CwtDk6pVJPWm5iKMYyI7Y7BFQqrIY9dtx+YANXKj6CXm3XxSoQAL/yo+gl5t18UqEAANqgAAAAAAAAAAAAVWVH0EvNuvilQaoVWVH0EvNuvilQCABtUGqsbVAEA5UfTs827eFVBUhrZUfTs827eFVBUgAAAANqggDKj6dnm3XwqoX+IAyo+nZ5t18KqANXIY9dtx+YDVyo+gl5t18UqCqyGPXbcfmA1cqPoJebdfFKgEAC/wDODuw7TdwtXliAAAL/AM4O7DtN3C1eWDODuw7TdwtXliAAANibrXxOK9LdszHYTcxTStM1JThF6E0qKSZ6ySBEWqiZ6T6gwRAGS307OzvXhVov8AAAAADyHoeBluswrS2G9asKzbNLVXU0lksyRIlqokZnpSItBdY9cKrKj6CXm3bxSoAZwd2PabuFq8sGcHdj2m7havLEAAAbPXWeBlvSwrM2GDasUzbTNSXU0lc0qRoHqpERlrImWkuoeY/N4LsOJguNTTwGNnocnWrZ5JZuYilCE6O2G0Ypku9BLsb14paFVlz+pO/fLgPVv5vhcV6rqG4xmC3MU0rTQpKcIvQmlXq0z1k0CItVEz0n7BII4HJAGrm+3n9me/2XzA/rr7wXYuscVmOa/jT4KeRm1cVY6C1fTqLU1qGuqRSQOKCxA9BnCMD0kZFQAgHKj6dXm3bwqoBVOcFdj2m7havLBnBXY9pu4WryxAAAF/5wV2PabuFq8sNUaqxtUAAlXLn9Sd++XFVCVcuf1J375cBKoAAAbVBAOVH07PNuvhVQv4QDlR9Ozzbr4VUAauQz67bj8wGplR9BLzbt4pUFXkM+u24/MBqZUfQS827eKVAIAAAAAFVZDHrtuPzAlUVVkMeu24/MAGrlR9BLzbr4pUIAF/5UfQS826+KVCAAG1QAAAAAAAAAAAAKrKj6CXm3XxSoNUKrKj6CXm3XxSoBAA2qDVWGrnB3n9pu4WXywF/gEA5wV5/abuFl8sGcFef2m7hZfLAX8AQDnBXn9pu4WXywZwV5/abuFl8sBfwgDKj6dnm3Xwqoc5wV5/abuFl8sYA9DwNR6W7aWw3rVimlaZaq6mirmlRJEtVEiItVEi0EApPIY9dtx+YDVyo+gl5t18UqCqyGPXbcfmA1cqPoJebdfFKgEAAAL/zfLsOzPf7V5gAyXOgl2d68UtCqy5/Unfvlxit6F4Lz3WP003NcNp8FO2zaWFseHVL6dRUgtT11qKSZxTWJnpSOEYFAiIhldxn37cN+lT7d4FoYD8rRrVKn4Ek0aSvnRhLohE4hKgBX9/Nz7iOrdS3GywWHhGlZqFJdi16yWZerQPVSTMj1UjLSXWJCAfI5F/Zvt2HZnv8AavMEg38u+zHWvXbjHYVlwjNs1CkpqJJyzKFaZ6yRmZ6yRnpMAvg1clzp2dnefCrRleSnd87D98aONTMx+CwtDlC1VJPWm5iSMYyI7Y7A1b0LvnYuscVpvk4bM4KeRm0sLbMQtX06i1BUnqLUkkDigsTLSicIxKBkRgH+NVYa2cFed2m7hZfLFVZvt2PZnv8AavMAQAKpyGfXbcfmAl7+XeZjrXrtxjsKy4Rm2ahSU1E05ZlCtM9ZIzM4pJGek'/>
                        </div>
                        
                    </Tabs>
                    <WhiteSpace />
                </div>
                };
            </div>
        )
    }
}
