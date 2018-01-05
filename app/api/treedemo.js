import * as React from 'react';
import {Row,Col,Table,Code,Tree,Items,Item} from 'yrui';
import thead from './thead';
const tbody=[{
  key:'data',
  expr:'树数据',
  type:'array',
  values:'-',
  default:'[]',
},{
  key:'getData',
  expr:'获取选中的数据',
  type:'function',
  values:'-',
  default:'-',
},{
  key:'hasCheck',
  expr:'是否显示选择框',
  type:'boolean',
  values:'false',
  default:'true/false',
},{
  key:'collapseIcon',
  expr:'收缩展开菜单的图标',
  type:'string|boolean',
  values:'-',
  default:'caret-right',
},{
  key:'isMenu',
  expr:'是否为菜单树',
  type:'boolean',
  values:'false',
  default:'true/false',
},{
  key:'invert',
  expr:'是否是反选菜单',
  type:'boolean',
  values:'false',
  default:'true/false',
},{
  key:'selected',
  expr:'选中的id',
  type:'string',
  values:'-',
  default:'-',
}];
const data=[{
  name:'1',
  child:[{
    name:'11',
  }],
},{
  name:'2',
  child:[{
    name:'21',
    child:[{
      name:'211',
      child:[{
        name:'2111',
      }],
    },{
      name:'212',
      child:[{
        name:'2121',
      }],
    }],
  },{
    name:'22',
  }],
},{
  name:'3',
  child:[{
    name:'31',
  },{
    name:'32',
  },{
    name:'33',
  }],
},{
  name:'4',
  child:[{
    name:'41',
  }],
},{
  name:'5',
  child:[{
    name:'51',
  }],
},{
  name:'6',
},{
  name:'7',
}];

const code=`
const data=[{
  name:'1',
  child:[{
    name:'11',
  }],
},{
  name:'2',
  child:[{
    name:'21',
    child:[{
      name:'211',
      child:[{
        name:'2111',
      }],
    },{
      name:'212',
      child:[{
        name:'2121',
      }],
    }],
  }],
},{
  name:'3',
  child:[{
    name:'31',
  },{
    name:'32',
  },{
    name:'33',
  }],
},{
  name:'4',
  child:[{
    name:'41',
  }],
}];

<Tree data={data} getData={this.getData} />
`;

export default class TreeDemo extends React.Component{
  state={
    selData:'什么也没选',
    id:undefined,
  };
  getData=(id,data)=>{
    this.setState({
      selData:JSON.stringify(data),
      id:id,
    });
  };

  render(){
    return(
      <Items>
        <Item>
          <Row gutter={12}>
            <Col span={6}>
              <Tree data={data} selected={this.state.id} getData={this.getData} />
            </Col>
            <Col span={6}>
              <div>
                <h4>你选中了：</h4>
                {
                  this.state.selData
                }
              </div>
            </Col>
          </Row>
        </Item>
        <Item>
          <div className="textarea">
            <h4>代码示例</h4>
            <Code title="demo" code={code} />
          </div>
        </Item>
        <Item>
          <h2>tree配置</h2>
          <Table thead={thead} tbody={tbody} />
        </Item>
      </Items>
    );
  }
}
