import * as React from 'react';

import {Button,Row,Col,Input,tools} from 'yrui';

import {data} from './data';

import './test.less';

// const config=require('../../../../node/config');
const URI=`localhost:9000`;
// var socket = require('socket.io-client')(URI);

/*const $fetch=tools.$fetch;

$fetch.get('/tttt').then((data)=>{
  console.log(data);
}).catch((e)=>{
  console.log(e);
});
*/

export default class Test extends React.Component {
  messages=[];
  state={
    join:'',
    left:'',
    onlineUsers:[],
    username:'',
    msg:'',
    msgs:[],
    val:'',
  };
  componentWillMount(){
    /*socket.emit('new user','');
    socket.on('user joined',(data)=>{
      // console.log(data);
      this.setState({
        join:data.username,
        onlineUsers:data.users,
      });
    });
    socket.on('new message',(data)=>{
      // console.log(data);
      this.messages.push(data);
      this.setState({
        msgs:this.messages,
      });
      // this.setState({
      //   username:data.username,
      //   msg:data.msg,
      // });
    });
    socket.on('user left',(data)=>{
      // console.log(data);
      this.setState({
        left:data.username,
        onlineUsers:data.users,
      });
    });*/
    // socket.emit('typing','string');
  }
  componentDidMount(){
    
  }
  componentWillUnmount(){
    
  }
  change=(v)=>{
    this.setState({
      val:v,
    });
  };
  submit=()=>{
    // socket.emit('new message',this.state.val);
  }

  render() {
    const {join,left,onlineUsers,username,msg,msgs,val}=this.state;
    const showMsgs=(data)=>{
      return data.map((v,k)=>{
        return <h4 key={`msg-${k}`}><b>{v.username}</b>:{v.msg}</h4>;
      })
    };
    return(
    	<div className="test">
        <h2>hello world</h2>
        <Row gutter={8}>
          <Col span={4}>
            <div className="msg-panel">
              {showMsgs(msgs)}
            </div>
            <Input placeholder="请输入..." value={val} change={this.change} />
            <p>
              <Button color="info" text="submit" click={this.submit} />
            </p>
            {msg&&<h4><b>{username}</b>:{msg}</h4>}
          </Col>
          <Col span={4}>
            {
              onlineUsers.map((v,k)=>{
                return <p key={`online${k}`} className="green">{v}</p>
              })
            }
          </Col>
          <Col span={4}>
            <h4>
              <p>上线</p>
              <span>{join} 已上线</span>
            </h4>
            <h4>
              <p>下线</p>
              <span>{left} 已下线</span>
            </h4>
            <h4>
              <p>在线人数</p>
              <span>{onlineUsers.length}</span>
            </h4>
          </Col>
        </Row>
    	</div>
    )
  }
}