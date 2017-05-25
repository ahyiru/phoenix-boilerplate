import * as React from 'react';

require('es6-promise').polyfill();
var fetch=require('isomorphic-fetch');

import BackTop from '../../components/base/backtop';

import {loading} from '../../configs/tools';

import 'highlight.js/styles/monokai-sublime.css';
import './api.less';

// start test post
/*fetch('/test/get',{
  method:'GET'
}).then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(e => console.log("error", e));

fetch('/test/post',{
  method:'POST',
  mode:'cors',
  headers:{
    'Content-Type':'application/json'
  },
  body:JSON.stringify({
    naem:'huy',
    age:18
  })
}).then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(e => console.log("error", e));*/

// end test post

export default class API extends React.Component<any,any> {

	constructor(props){
    super(props);
    this.state=({
      name:'',
      menu:[],
      showApiMenu:''
    })
  };

  componentDidMount(){

    // encodeURI编码，decodeURI解码
    // var url=decodeURI('/api/UI设计.md');
  	fetch('/api').then(response => response.json())
      .then(data => {
        this.setState({
          menu:data.src,
          content:''
        })
      })
      .catch(e => console.log("error", e));

    this.hashChg();
    window.addEventListener('hashchange',this.hashChg,false);
  };

  hashChg=()=>{
    let param=location.hash.split('?')[1],name;
    (param&&param.split('=')[1])?name=param.split('=')[1]:(name='UI设计.md',location.hash='#/api?name='+name);
    loading(document.body);
    fetch('/api/'+name).then(response => response.json())
      .then(data => {
        loading(document.body);
        this.setState({
          name:name,
          content:data.html
        })
      }).catch((e) => {
        loading(document.body);
        console.log("error", e)
      });
  };

  componentWillUnmount(){
    window.removeEventListener('hashchange',this.hashChg,false);
  };

  /*readMD=(e)=>{
    var name=e.target.innerText;
    var url='/api/'+name+'.md';
    fetch(url).then(response => response.json())
      .then(data => {
        this.setState({
          name:name+'.md',
          content:data.html
        })
      })
      .catch(e => console.log("error", e));
  };*/

  slideApiMenu=()=>{
    this.setState({
      showApiMenu:this.state.showApiMenu?'':'show-api-menu'
    });
  };

  render() {
    const {name,menu,content,showApiMenu}=this.state;
    return(
    	<div className="api">
        <a className="back-to-home" href="#/">主页</a>
        <button className="ybtn ybtn-success toggle-api-sidebar" onClick={this.slideApiMenu}><i className="fa fa-align-justify"></i></button>
    		<div className={`api-menu ${showApiMenu}`}>
          {/*<ul onClick={this.readMD}>*/}
          <ul>
            {
              menu.map((v,k)=>{
                return <li key={`menu${k}`}><a className={name==v?'active':''} href={`#/api?name=${v}`}>{v.slice(0,-3)}</a></li>
              })
            }
          </ul>
        </div>
        <div className="api-content">
          <h4 className="title">{name.slice(0,-3)}</h4>
          <div dangerouslySetInnerHTML={{__html:content}} />
        </div>

        <BackTop />
    	</div>
    )
  }
}