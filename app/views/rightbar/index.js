import * as React from 'react';
import './index.less';
import {Tabs,Tabpage,Items,Item,Switch,Checkbox,Radio,Button,Input,tools} from 'yrui';
const {$fetch,$notify,hasClass,removeClass,addClass}=tools;

const layout=[/*{
  key:'switchMenu',
  name:'横竖菜单切换',
  value:'',
},*/{
  key:'headerHeight',
  name:'头部高度',
  value:'',
  step:2,
  min:36,
  max:86,
},{
  key:'footerHeight',
  name:'底部高度',
  value:'',
  step:2,
  min:32,
  max:66,
},{
  key:'menuWidth',
  name:'菜单宽度',
  value:'',
  step:5,
  min:120,
  max:260,
},{
  key:'collapseMenuWidth',
  name:'收缩菜单宽度',
  value:'',
  step:1,
  min:30,
  max:66,
}];
const theme=[{
  key:'brandBgColor',
  name:'brand背景色',
  value:'',
},{
  key:'brandColor',
  name:'brand字体色',
  value:'',
},{
  key:'navBgColor',
  name:'nav背景色',
  value:'',
},{
  key:'navColor',
  name:'nav字体色',
  value:'',
},{
  key:'menuBgColor',
  name:'menu背景色',
  value:'',
},{
  key:'menuColor',
  name:'menu字体色',
  value:'',
},{
  key:'standardColor',
  name:'对比色',
  value:'',
}];

export default class RightBar extends React.Component{
  state={
    theme:theme,
    layout:layout,
  };
  data=null;
  layoutData={};
  componentWillMount(){
    
  }
  componentDidMount(){
    
  }
  render(){
    const {theme,layout}=this.state;
    return <div className="rightbar">
      <Tabs flex>
        <Tabpage name="皮肤配置">
          <Items>
            {
              theme.map((v,k)=>{
                return <Item key={`theme-${k}`}>
                  <span>{v.name}</span>
                  <span><input type="color" defaultValue={v.value||'#ffffff'} /></span>
                </Item>;
              })
            }
          </Items>
        </Tabpage>
        <Tabpage name="布局配置">
          <Items>
            <Item>
              <span>横竖菜单切换</span>
              <span><Switch offText="竖" onText="横" value={true} /></span>
            </Item>
            {
              layout.map((v,k)=>{
                return <Item key={`layout-${k}`}>
                  <span>{v.name}</span>
                  <span><Input type="number" step={v.step} min={v.min} max={v.max} defaultValue={v.value} /></span>
                </Item>;
              })
            }
            <Item>
              <Button color="info" pullRight customClass="mgs" text="确定" />
            </Item>
          </Items>
        </Tabpage>
      </Tabs>
    </div>;
  }
}