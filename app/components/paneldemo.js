import * as React from 'react';

import {Items,Item,Icon,Row,Col,Panel,Table,Dnd} from 'yrui';

let panel={
  title:'panel标题栏',
  defaultTheme:'',
  plugins:{
    pCheckbox:true,
    pSelTheme:true,
    pRefrash:true,
    pCollapse:true,
    pFullscreen:true,
    pClose:true
  }
};
let dragPanel={
  title1:'可拖放panel1',
  title2:'可拖放panel2',
  defaultTheme:'',
  plugins:{
    pCheckbox:false,
    pSelTheme:false,
    pRefrash:false,
    pCollapse:false,
    pFullscreen:false,
    pClose:false
  }
};

let thead=['ID','参数','说明','类型','可选值','默认值'];
let tbody=[{
  key:'panelTitle',
  expr:'面板标题',
  type:'string',
  values:'-',
  default:'-'
},{
  key:'headColor',
  expr:'面板头背景颜色',
  type:'string',
  values:'-',
  default:'default'
},{
  key:'pCheckbox',
  expr:'是否显示切换按钮',
  type:'boolean',
  values:'true/false',
  default:'false'
},{
  key:'pCheckbox',
  expr:'是否显示切换按钮',
  type:'boolean',
  values:'true/false',
  default:'false'
},{
  key:'pSelTheme',
  expr:'是否显示切换主题按钮',
  type:'boolean',
  values:'true/false',
  default:'false'
},{
  key:'pRefrash',
  expr:'是否显示刷新按钮',
  type:'boolean',
  values:'true/false',
  default:'false'
},{
  key:'pCollapse',
  expr:'是否显示收缩面板按钮',
  type:'boolean',
  values:'true/false',
  default:'false'
},{
  key:'pFullscreen',
  expr:'是否显示全屏按钮',
  type:'boolean',
  values:'true/false',
  default:'false'
},{
  key:'pClose',
  expr:'是否显示关闭面板按钮',
  type:'boolean',
  values:'true/false',
  default:'false'
},{
  key:'canDrag',
  expr:'面板是否可拖拽',
  type:'boolean',
  values:'true/false',
  default:'false'
}];

export default class PanelDemo extends React.Component<any,any> {

  render() {
    return (
    	<Items>
        <Item>
          <h2>panel</h2>
          <Row gutter={12}>
            <Col span={6}>
              <Dnd>
                <Panel canDrag={false} panelTitle={panel.title} headColor={panel.defaultTheme} {...panel.plugins}>
                  <div style={{height:'220px'}}></div>
                </Panel>
              </Dnd>
            </Col>
            <Col span={6}>
              <Dnd>
                <Panel canDrag={false} panelTitle={panel.title} headColor={panel.defaultTheme} {...panel.plugins}>
                  <div style={{height:'220px'}}></div>
                </Panel>
              </Dnd>
            </Col>
          </Row>
        </Item>
        <Item>
          <h2>可拖放panel</h2>
          <Row gutter={12}>
            <Col span={6}>
              <Dnd>
                <Panel canDrag={true} panelTitle={dragPanel.title1} headColor={dragPanel.defaultTheme} {...dragPanel.plugins}>
                  <div style={{height:'220px'}}></div>
                </Panel>
              </Dnd>
            </Col>
            <Col span={6}>
              <Dnd>
                <Panel canDrag={true} panelTitle={dragPanel.title2} headColor={dragPanel.defaultTheme} {...dragPanel.plugins}>
                  <div style={{height:'220px'}}></div>
                </Panel>
              </Dnd>
            </Col>
          </Row>
        </Item>
        <Item>
          <h2>参数说明</h2>
          <Table thead={thead} tbody={tbody} noBorder={true} />
        </Item>
      </Items>
    );
  }
}
