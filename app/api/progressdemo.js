import * as React from 'react';
import {Row,Col,Table,Code,Progress} from 'yrui';
import thead from './thead';

const progress=[{
  key:'size',
  expr:'进度条大小',
  type:'string',
  values:'sm/lg/default',
  default:'-',
},{
  key:'color',
  expr:'进度条颜色',
  type:'string',
  values:'success/warning/danger/default',
  default:'-',
},{
  key:'percent',
  expr:'当前值',
  type:'number',
  values:'-',
  default:'-',
},{
  key:'total',
  expr:'总值',
  type:'number',
  values:'-',
  default:'100',
},{
  key:'bgColor',
  expr:'占比背景色',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'fbgColor',
  expr:'进度条底色',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'txtColor',
  expr:'字体颜色',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'bit',
  expr:'保留小数位数',
  type:'number',
  values:'-',
  default:'0',
}];
const code=`<Progress percent="40.11111" size="" color="danger" bgColor="#333" fbgColor="#f60" txtColor="#fff" bit={2} />`;

export default class ProgressDemo extends React.Component{
  
  render(){
    return(
      <div>
        <Row gutter={8}>
          <Col span={8} sm={8} xs={12}>
            <Progress percent="40.11111" size="" color="danger" bgColor="#333" fbgColor="#f60" txtColor="#fff" bit={2} />
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12} sm={12} xs={12}>
            <Code title="Progress" code={code} />
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12} sm={12} xs={12}>
            <Table thead={thead} tbody={progress} />
          </Col>
        </Row>
      </div>
    );
  }
}
