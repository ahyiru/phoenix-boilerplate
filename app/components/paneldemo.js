import * as React from 'react';

import {Items,Item,Icon,Row,Col,Panel,Table,Dnd,Code} from 'yrui';

let panel={
  title:'panel标题栏',
  defaultTheme:'',
  plugins:{
    checkbox:true,
    selTheme:true,
    refrash:true,
    collapse:true,
    fullscreen:true,
    close:true
  }
};
let dragPanel={
  title1:'可拖放panel1',
  title2:'可拖放panel2',
  defaultTheme:'',
  ricon:'user',
  plugins:{
    /*checkbox:false,
    selTheme:false,
    refrash:false,
    collapse:false,
    fullscreen:false,
    close:false*/
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
  key:'ricon',
  expr:'面板头部右侧icon',
  type:'string',
  values:'-',
  default:'-'
},{
  key:'plugins',
  expr:'工具栏',
  type:'object',
  values:'checkbox/selTheme/refrash/collapse/fullscreenclose',
  default:'-'
},{
  key:'canDrag',
  expr:'面板是否可拖拽',
  type:'boolean',
  values:'true/false',
  default:'false'
},{
  key:'canDrop',
  expr:'面板是否可拖放',
  type:'boolean',
  values:'true/false',
  default:'false'
}];

const t=`<Item>
    <h2>panel</h2>
    <Row gutter={12}>
      <Col span={6}>
        <Dnd>
          <Panel canDrag={false} panelTitle={panel.title} headColor={panel.defaultTheme} plugins={panel.plugins}>
            <div style={{height:'220px'}}></div>
          </Panel>
        </Dnd>
      </Col>
      <Col span={6}>
        <Dnd>
          <Panel canDrag={false} panelTitle={panel.title} headColor={panel.defaultTheme} plugins={panel.plugins}>
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
          <Panel canDrag canDrop panelTitle={dragPanel.title1} headColor={dragPanel.defaultTheme} ricon={dragPanel.ricon}>
            <div style={{height:'220px'}}></div>
          </Panel>
        </Dnd>
      </Col>
      <Col span={6}>
        <Dnd>
          <Panel canDrag canDrop panelTitle={dragPanel.title2} headColor={dragPanel.defaultTheme} ricon={dragPanel.ricon}>
            <div style={{height:'220px'}}></div>
          </Panel>
        </Dnd>
      </Col>
    </Row>
  </Item>
`;

export default class PanelDemo extends React.Component<any,any> {

  render() {
    return (
    	<Items>
        <Item>
          <h2>panel</h2>
          <Row gutter={12}>
            <Col span={6} sm={12}>
              <Dnd>
                <Panel canDrag={false} panelTitle={panel.title} headColor={panel.defaultTheme} plugins={panel.plugins}>
                  <div style={{height:'220px'}}></div>
                </Panel>
              </Dnd>
            </Col>
            <Col span={6} sm={12}>
              <Dnd>
                <Panel canDrag={false} panelTitle={panel.title} headColor={panel.defaultTheme} plugins={panel.plugins}>
                  <div style={{height:'220px'}}></div>
                </Panel>
              </Dnd>
            </Col>
          </Row>
        </Item>
        <Item>
          <h2>可拖放panel</h2>
          <Row gutter={12}>
            <Col span={6} sm={12}>
              <Dnd>
                <Panel canDrag canDrop panelTitle={dragPanel.title1} headColor={dragPanel.defaultTheme} ricon={dragPanel.ricon}>
                  <div style={{height:'220px'}}></div>
                </Panel>
              </Dnd>
            </Col>
            <Col span={6} sm={12}>
              <Dnd>
                <Panel canDrag canDrop panelTitle={dragPanel.title2} headColor={dragPanel.defaultTheme} ricon={dragPanel.ricon}>
                  <div style={{height:'220px'}}></div>
                </Panel>
              </Dnd>
            </Col>
          </Row>
        </Item>
        <Item>
          <h2>参数说明</h2>
          <Table thead={thead} tbody={tbody} noBorder={true} />
          <div className="textarea">
            <h4>代码示例</h4>
            <Code title="demo" code={t} />
          </div>
        </Item>
      </Items>
    );
  }
}
