import * as React from 'react';

import {Row,Col,Table,Code,Dnd,Panel,Items,Item,tools} from 'yrui';
const {loading}=tools;
import thead from './thead';

let panel={
  title:<a>panel标题栏</a>,
  defaultTheme:'',
  plugins:{
    checkbox:true,
    selTheme:true,
    refrash:true,
    collapse:true,
    fullscreen:true,
    close:true,
  },
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
  },
};

const formData=[];
for(let i=0;i<12;i++){
  let fd={
    label:`label${i+1}`,
    inputOpt:{
      placeholder:`label${i+1}`,
    },
  };
  formData.push(fd);
}

let tbody=[{
  key:'panelTitle',
  expr:'面板标题',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'headColor',
  expr:'面板头背景颜色',
  type:'string',
  values:'-',
  default:'default',
},{
  key:'plugins',
  expr:'头部工具栏',
  type:'object',
  values:'checkbox/selTheme/refrash/collapse/fullscreen/close',
  default:'{}',
},{
  key:'canDrag',
  expr:'面板是否可拖拽',
  type:'boolean',
  values:'true/false',
  default:'false',
},{
  key:'canDrop',
  expr:'面板是否可拖放',
  type:'boolean',
  values:'true/false',
  default:'false',
},{
  key:'ricon',
  expr:'右侧图标',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'refrash',
  expr:'刷新事件',
  type:'function',
  values:'-',
  default:'-',
}];

const code=`
<Item>
  <h2>panel</h2>
  <Row gutter={12}>
    <Col span={6}>
      <Dnd>
        <Panel canDrag={false} panelTitle={panel.title} headColor={panel.defaultTheme} plugins={panel.plugins} ricon="user" refrash={this.refrash}>
          <div style={{height:'220px'}} />
        </Panel>
      </Dnd>
    </Col>
    <Col span={6}>
      <Dnd>
        <Panel canDrag={false} panelTitle={panel.title} headColor={panel.defaultTheme} plugins={panel.plugins}>
          <div style={{height:'220px'}} />
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
        <Panel canDrag canDrop panelTitle={dragPanel.title1} headColor={dragPanel.defaultTheme} plugins={dragPanel.plugins}>
          <div style={{height:'220px'}} />
        </Panel>
      </Dnd>
    </Col>
    <Col span={6}>
      <Dnd>
        <Panel canDrag canDrop panelTitle={dragPanel.title2} headColor={dragPanel.defaultTheme} plugins={dragPanel.plugins}>
          <div style={{height:'220px'}} />
        </Panel>
      </Dnd>
    </Col>
  </Row>
</Item>
`;

export default class PanelDemo extends React.Component{

  refrash=(ele)=>{
    let load:any=0;
    clearTimeout(load);
    loading(ele);
    load=setTimeout(()=>{
      loading.distroy(ele);
    },3000);
  };

  render(){
    return(
      <Items>
        <Item>
          <h2>panel</h2>
          <Row gutter={12}>
            <Col span={6}>
              <Panel canDrag={false} panelTitle={panel.title} headColor={'panel.defaultTheme'} plugins={panel.plugins} ricon="user" refrash={this.refrash}>
                <div style={{height:'220px'}} />
              </Panel>
            </Col>
            <Col span={6}>
              <Panel canDrag={false} panelTitle={panel.title} headColor={panel.defaultTheme} plugins={panel.plugins}>
                <div style={{height:'220px'}} />
              </Panel>
            </Col>
          </Row>
        </Item>
        <Item>
          <h2>可拖放panel</h2>
          <Row gutter={12}>
            <Col span={6}>
                <Panel canDrag canDrop panelTitle={dragPanel.title1} headColor={dragPanel.defaultTheme} plugins={dragPanel.plugins}>
                  <div style={{height:'220px'}} />
                </Panel>
            </Col>
            <Col span={6}>
                <Panel canDrag canDrop panelTitle={dragPanel.title2} headColor={dragPanel.defaultTheme} plugins={dragPanel.plugins}>
                  <div style={{height:'220px'}} />
                </Panel>
            </Col>
          </Row>
        </Item>
        <Item>
          <h2>代码示例</h2>
          <Code title="input" code={code} />
        </Item>
        <Item>
          <h2>参数说明</h2>
          <Table thead={thead} tbody={tbody} noBorder={true} />
        </Item>
      </Items>
    );
  }
}
