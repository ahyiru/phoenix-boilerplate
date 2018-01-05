import * as React from 'react';

import {Row,Col,Table,Code,Tabs,Tabpage} from 'yrui';
import thead from './thead';
let tabs=[{
  key:'activeKey',
  expr:'默认显示的tab',
  type:'number',
  values:'-',
  default:'0',
},{
  key:'style',
  expr:'设置tab样式',
  type:'object',
  values:'-',
  default:'-',
},{
  key:'closeable',
  expr:'是否可关闭',
  type:'function',
  values:'-',
  default:'-',
},{
  key:'vertical',
  expr:'是否为竖排展示',
  type:'boolean',
  values:'false',
  default:'true/false',
},{
  key:'border',
  expr:'是否显示边框',
  type:'boolean',
  values:'false',
  default:'true/false',
},{
  key:'currentPage',
  expr:'获取当前显示页面信息',
  type:'function',
  values:'-',
  default:'-',
},{
  key:'flex',
  expr:'标签栏是否与内容区域同宽',
  type:'boolean',
  values:'false',
  default:'true/false',
}];
let tabpage=[{
  key:'icon',
  expr:'tab图标',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'name',
  expr:'tab名字',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'disabled',
  expr:'是否禁止点击',
  type:'boolean',
  values:'false',
  default:'true/false',
}];

const code=`
<Row gutter={12}>
  <Col span={6}>
    <h2>tabs配置</h2>
    <Tabs activeKey={activeKey} currentPage={this.getCurrent}>
      <Tabpage name="t1111111111111" icon="user">
        <div style={{height:'200px',padding:'15px',border:'1px solid #aaa'}}>p1</div>
      </Tabpage>
      <Tabpage name="t2" disabled>
        <div style={{height:'200px',padding:'15px',border:'1px solid #aaa'}}>p2</div>
      </Tabpage>
      <Tabpage name="t3">
        <div style={{height:'200px',padding:'15px',border:'1px solid #aaa'}}>p3</div>
      </Tabpage>
    </Tabs>
  </Col>
</Row>
`;

export default class TabsDemo extends React.Component{
  state={
    activeKey:1,
  };
  getCurrent=(k)=>{
    this.setState({
      activeKey:k,
    });
  };
  render(){
    const {activeKey}=this.state;
    return(
      <div>
        <Row gutter={12}>
          <Col span={6}>
            <h2>tabs配置</h2>
            <Tabs activeKey={activeKey} currentPage={this.getCurrent}>
              <Tabpage name="t1111111111111" icon="user">
                <div style={{height:'200px',padding:'15px',border:'1px solid #aaa'}}>p1</div>
              </Tabpage>
              <Tabpage name="t2" disabled>
                <div style={{height:'200px',padding:'15px',border:'1px solid #aaa'}}>p2</div>
              </Tabpage>
              <Tabpage name="t3">
                <div style={{height:'200px',padding:'15px',border:'1px solid #aaa'}}>p3</div>
              </Tabpage>
            </Tabs>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12} sm={12} xs={12}>
            <h2>代码示例</h2>
            <Code title="input" code={code} />
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12} sm={12} xs={12}>
            <h2>tabs参数说明</h2>
            <Table thead={thead} tbody={tabs} noBorder={true} />
          </Col>
          <Col span={12} sm={12} xs={12}>
            <h2>tabpage参数说明</h2>
            <Table thead={thead} tbody={tabpage} noBorder={true} />
          </Col>
        </Row>
      </div>
    );
  }
}
