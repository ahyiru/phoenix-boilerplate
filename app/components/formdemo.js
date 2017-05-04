import * as React from 'react';

import {Form,FormItem,Items,Item,Row,Col,Input,Button,Table,tools} from 'yrui';

const $fetch=tools.$fetch;
const $notify=tools.$notify;
const $timer=tools.$timer;
const $validate=tools.$validate;

// $timer(document.body);
// $notify.start();

/*$fetch.get('/test1').then((data)=>{
  console.log(data);
}).catch((error)=>{
  console.log(error);
});
$fetch.post('/test2',{hhh:'h111111'}).then((data)=>{
  console.log(data);
}).catch((error)=>{
  console.log(error);
});*/


const formData=[];
for(let i=0;i<12;i++){
  let fd={
    label:`label${i+1}`,
    inputOpt:{
      placeholder:`label${i+1}`,
    },
  };
  formData.push(fd);
};

let thead=['ID','参数','说明','类型','可选值','默认值'];
let tbody=[{
  key:'horizontal',
  expr:'label和input是否在同一行',
  type:'boolean',
  values:'true/false',
  default:'false'
},{
  key:'label',
  expr:'输入框头部',
  type:'string',
  values:'-',
  default:'-'
},{
  key:'inputOpt',
  expr:'输入框配置，见Input组件',
  type:'object',
  values:'-',
  default:'-'
},{
  key:'inputOpt.error',
  expr:'错误提示内容',
  type:'string',
  values:'-',
  default:'-'
}];

export default class FormDemo extends React.Component<any,any> {
  constructor(props){
    super(props);
    this.state=({
      show:false
    });
  };
  componentDidMount=()=>{
    window.addEventListener('click',this.hide,false);
  };
  componentWillUnmount=()=>{
    window.removeEventListener('click',this.hide,false);
  };
  clkEvent=()=>{
    console.log('clicked');
  };
  getFormData=()=>{
    let form=document.getElementsByTagName('form')[0];
    let input=form.getElementsByTagName('input'),data=[];
    for(let i=0,l=input.length;i<l;i++){
      let validate=$validate.isRequired(input[i].value);
      if(!validate.ok){
        formData[i].inputOpt.error=validate.info;
        this.setState({
          formData:formData
        });
        return false;
      }
      data.push(input[i].value);
    }
    // console.log(data);
  };

  resetForm=()=>{
    let form=document.getElementsByTagName('form')[0];
    let input=form.getElementsByTagName('input'),data=[];
    for(let i=0,l=input.length;i<l;i++){
      formData[i].inputOpt.value='';
    }
  };

  show=(e)=>{
    this.setState({
      show:true
    })
  };
  hide=(e)=>{
    // e.preventDefault();
    // e.stopPropagation();
    this.setState({
      show:false
    });
  };
  test=(e)=>{
    e.stopPropagation();
  };

  getVal=(e)=>{
    console.log(e.target.value);
  };

  render() {
    const {error}=this.props;
    return (
      <div className="form">
        <h2>基本布局</h2>
        {/*<Row>
                  <Col span={4}>
                    <form className="y-form">
                      <div className="yform-group">
                        <label>邮箱</label>
                        <Input type="text" placeholder="必填" />
                      </div>
                      <div className="yform-group">
                        <label>密码</label>
                        <Input type="text" />
                        <span>qqqq</span>
                      </div>
                      <Button color="success" text="登录" click={this.getFormData} pullRight margin="mls" />
                      <Button color="info" text="取消" click={this.getFormData} pullRight margin />
                    </form>
                  </Col>
                  <Col span={4}>
                    <form className="y-form">
                      <div className="yform-group">
                        <label>邮箱</label>
                        <Input type="text" icon="user" noBorder={true} />
                        <span className="error">qqqq</span>
                      </div>
                      <div className="yform-group">
                        <label>密码</label>
                        <Input type="text" icon="lock" noBorder={true} />
                      </div>
                      <button type="button" className="ybtn ybtn-info y-right">登录</button>
                    </form>
                  </Col>
                  <Col span={4}>
                    <form className="y-form yfv">
                      <div className="yform-group">
                        <label>邮箱</label>
                        <Input type="text" />
                        <span>qqqq</span>
                      </div>
                      <div className="yform-group">
                        <label>密码</label>
                        <Input type="text" />
                      </div>
                      <button type="button" className="ybtn ybtn-info ybtn-block y-right">登录</button>
                    </form>
                  </Col>
                </Row>*/}
        <Form horizontal >
          <Row>
            <Col span={4}>
              <FormItem {...formData[0]} />
              <FormItem {...formData[1]} />
              <FormItem {...formData[2]} />
              <FormItem {...formData[3]} />
            </Col>
            <Col span={4}>
              <FormItem {...formData[4]} />
              <FormItem {...formData[5]} />
              <FormItem {...formData[6]} />
              <FormItem {...formData[7]} />
            </Col>
            <Col span={4}>
              <FormItem {...formData[8]} />
              <FormItem {...formData[9]} />
              <FormItem {...formData[10]} />
              <FormItem {...formData[11]} />
            </Col>
          </Row>
          <Button color="info" text="提交" click={this.getFormData} pullRight />
          <Button color="warning" text="重置" margin="mrs" click={this.resetForm} pullRight />
        </Form>
        {/*<Row>
                  <Col span={4}>
                    <div onClick={this.test}>
                      <Input focus={this.show} />
                      {this.state.show&&<div style={{'height':'300px','backgroundColor':'#eee'}}></div>}
                    </div>
                  </Col>
                </Row>*/}
        <div className="">
          <h2>参数说明</h2>
          <Table thead={thead} tbody={tbody} noBorder={true} />
        </div>
      </div>
    )
  };
}
