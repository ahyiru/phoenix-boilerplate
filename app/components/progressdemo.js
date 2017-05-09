import * as React from 'react';

import {Items,Item,Row,Col,Table,Progress,Code} from 'yrui';

let thead=['ID','参数','说明','类型','可选值','默认值'];
let progress=[{
  key:'size',
  expr:'进度条大小',
  type:'string',
  values:'sm/lg/default',
  default:'-'
},{
  key:'color',
  expr:'进度条颜色',
  type:'string',
  values:'success/warning/danger/default',
  default:'-'
},{
  key:'percent',
  expr:'当前值',
  type:'number',
  values:'-',
  default:'-'
},{
  key:'total',
  expr:'总值',
  type:'number',
  values:'-',
  default:'100'
},{
  key:'bgColor',
  expr:'占比背景色',
  type:'string',
  values:'-',
  default:'-'
},{
  key:'fbgColor',
  expr:'进度条底色',
  type:'string',
  values:'-',
  default:'-'
},{
  key:'txtColor',
  expr:'字体颜色',
  type:'string',
  values:'-',
  default:'-'
},{
  key:'bit',
  expr:'保留小数位数',
  type:'number',
  values:'-',
  default:'0'
}];

const t=`<Progress percent="40.11111" size="" color="danger" bgColor="#333" fbgColor="#f60" txtColor="#fff" bit={2} />
`;

export default class ProgressDemo extends React.Component<any,any> {

  render() {
    return (
      <Items>
        <Item>
          <Progress percent="40.11111" size="" color="danger" bgColor="#333" fbgColor="#f60" txtColor="#fff" bit={2} />
        </Item>
        <Item>
          <div className="textarea">
            <h4>代码示例</h4>
            <Code title="demo" code={t} />
          </div>
        </Item>
        <Item>
          <h2>Progress配置</h2>
          <Table thead={thead} tbody={progress} />
        </Item>
      </Items>
    )
  };
}
