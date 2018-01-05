import * as React from 'react';

import {Row,Col,Table,Code,Button,ButtonGroup} from 'yrui';
import thead from './thead';

let tbody=[{
  key:'color',
  expr:'按钮颜色',
  type:'string',
  values:'-',
  default:'default',
},{
  key:'block',
  expr:'是否是块状按钮',
  type:'boolean',
  values:'true/false',
  default:'false',
},{
  key:'size',
  expr:'按钮大小',
  type:'string',
  values:'lg/sm/md',
  default:'md',
},{
  key:'outline',
  expr:'边框线按钮',
  type:'boolean',
  values:'true/false',
  default:'false',
},{
  key:'icon',
  expr:'带icon按钮',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'text',
  expr:'按钮文本',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'customClass',
  expr:'自定义class样式',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'pullRight',
  expr:'按钮右对齐',
  type:'boolean',
  values:'true/false',
  default:'false',
},{
  key:'click',
  expr:'按钮事件',
  type:'function',
  values:'-',
  default:'-',
},{
  key:'disabled',
  expr:'禁用按钮事件',
  type:'boolean',
  values:'true/false',
  default:'false',
},{
  key:'type',
  expr:'按钮类型',
  type:'string',
  values:'button/submit',
  default:'button',
}];
let tbody1=[{
  key:'color',
  expr:'图标颜色',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'size',
  expr:'图标大小',
  type:'string',
  values:'lg/2x/3x/4x/5x',
  default:'-',
},{
  key:'fa',
  expr:'图标icon',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'click',
  expr:'按钮事件',
  type:'function',
  values:'-',
  default:'-',
}];

const code=`
const color=['default','info','warning','success','danger'];
const icon=['apple','html5','css3','weixin','qq'];
const size=['sm','sm','','lg','lg'];
const disabled=[false,false,false,false,true];
const outline=true;
const block=false;
const customClass='mgs';
const b=(size,icon,outline,block,disabled)=>{
  return color.map((v,k)=>{
    size[k]=size[k]==null?'':size[k];
    return <Button key={\`\${v}-\${icon[k]}-\${k}\`} color={v} customClass={customClass} size={size[k]} icon={icon[k]} outline={outline} text={\`\${v} \${size[k]}\`} block={block} disabled={disabled[k]} />;
  });
};
const b1=b([],[],false,false,[]);
const b2=b(size,[],false,false,disabled);
const b3=b([],icon,false,false,[]);
const b4=b([],[],true,false,[]);
const b5=b(size,[],true,false,[]);
const b6=b([],icon,true,false,disabled);

<h2>Button block</h2>
<Row gutter={8}>
  <Col span={8}>
    <Button color={'info'} customClass="mgs" text="block" icon={'qq'} block outline={true} />
    <Button color={'warning'} customClass="mgs" text="block" block outline={true} />
    <Button color={'danger'} customClass="mgs" text="block" disabled block />
  </Col>
</Row>
<h2>Button group</h2>
<Row gutter={8}>
  <Col span={8}>
    <ButtonGroup>
      <Button color={'default'} text="apple" icon={'apple'} />
      <Button color={'info'} text="html5" icon={'html5'}  />
      <Button color={'warning'} text="css3" icon={'css3'}  />
    </ButtonGroup>
  </Col>
</Row>
`;

export default class ButtonDemo extends React.Component{
  click=()=>{
    console.log('1');
  };
  render() {
    const color=['default','info','warning','success','danger'];
    const icon=['apple','html5','css3','weixin','qq'];
    const size=['sm','sm','','lg','lg'];
    const disabled=[false,false,false,false,true];
    const outline=true;
    const block=false;
    const customClass='mgs';
    const b=(size,icon,outline,block,disabled)=>{
      return color.map((v,k)=>{
        size[k]=size[k]==null?'':size[k];
        return <Button key={`${v}-${icon[k]}-${k}`} color={v} customClass={customClass} size={size[k]} icon={icon[k]} outline={outline} text={`${v} ${size[k]}`} block={block} disabled={disabled[k]} />;
      });
    };
    const b1=b([],[],false,false,[]);
    const b2=b(size,[],false,false,disabled);
    const b3=b([],icon,false,false,[]);
    const b4=b([],[],true,false,[]);
    const b5=b(size,[],true,false,[]);
    const b6=b([],icon,true,false,disabled);
    
    return (
      <div className="button">
        <h2>Button</h2>
        <Row gutter={8}>
          <Col span={8}>
            {b1}
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={8}>
            {b2}
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={8}>
            {b3}
          </Col>
        </Row>
        <h2>Button outline</h2>
        <Row gutter={8}>
          <Col span={8}>
            {b4}
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={8}>
            {b5}
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={8}>
            {b6}
          </Col>
        </Row>
        <h2>Button block</h2>
        <Row gutter={8}>
          <Col span={8}>
            <Button color={'info'} customClass="mgs" text="block" icon={'qq'} block outline={true} />
            <Button color={'warning'} customClass="mgs" text="block" block outline={true} />
            <Button color={'danger'} customClass="mgs" text="block" disabled block />
          </Col>
        </Row>
        <h2>Button group</h2>
        <Row gutter={8}>
          <Col span={8}>
            <ButtonGroup>
              <Button color={'default'} text="apple" icon={'apple'} />
              <Button color={'info'} text="html5" icon={'html5'}  />
              <Button color={'warning'} text="css3" icon={'css3'}  />
            </ButtonGroup>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={8}>
            <ButtonGroup>
              <Button color={'default'} icon={'apple'} />
              <Button color={'info'} icon={'html5'}  />
              <Button color={'warning'} icon={'css3'}  />
            </ButtonGroup>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={8}>
            <ButtonGroup>
              <Button color={'default'} icon={'apple'} outline={true} />
              <Button color={'info'} icon={'html5'} outline={true} />
              <Button color={'warning'} icon={'css3'} outline={true} />
            </ButtonGroup>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12} sm={12} xs={12}>
            <h2>代码示例</h2>
            <Code title="Button" code={code} />
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12} sm={12} xs={12}>
            <h2>参数说明</h2>
            <Table thead={thead} tbody={tbody} noBorder={true} />
          </Col>
        </Row>
      </div>
    );
  }
}
