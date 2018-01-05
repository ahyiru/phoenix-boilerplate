import * as React from 'react';
import echarts from 'echarts';

import {chart1,chart2} from '../models/echarts';

import {Table,Charts,Items,Item,Code} from 'yrui';
import thead from './thead';

// import echarts from 'echarts';
// import {Charts} from 'yrui';
const Echarts=Charts(echarts);

let tbody=[{
  key:'option',
  expr:'图表数据，见ecarts',
  type:'object',
  values:'-',
  default:'-',
},{
  key:'notMerge',
  expr:'是否合并图表',
  type:'boolean',
  values:'true/false',
  default:'false',
},{
  key:'lazyUpdate',
  expr:'是否懒加载',
  type:'boolean',
  values:'true/false',
  default:'false',
},{
  key:'style',
  expr:'样式设置',
  type:'object',
  values:'-',
  default:'-',
},{
  key:'className',
  expr:'class样式',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'theme',
  expr:'图表样式',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'onChartReady',
  expr:'图表加载完成事件',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'showLoading',
  expr:'是否显示加载',
  type:'boolean',
  values:'true/false',
  default:'false',
},{
  key:'loadingOption',
  expr:'加载样式配置',
  type:'object',
  values:'-',
  default:'-',
},{
  key:'onEvents',
  expr:'图表事件集',
  type:'object',
  values:'-',
  default:'-',
}];

const code=`
<Item>
  <span>Echarts</span>
  <Echarts ref="e1" option={option} />
</Item>
<Item>
  <span>Echart1</span>
  <Echarts option={option2} onChartReady={this.onChartReady} onEvents={onEvents} />
</Item>
`;

export default class EchartDemo extends React.Component{
  timeTicket:number=0;
  count:number=51;
  echarts=null;
  state={
    option:chart1,
    option2:chart2,
  };
  fetchNewDate=()=>{
    let axisData=(new Date()).toLocaleTimeString().replace(/^\D*/,'');
    let option=this.state.option;
    let data0=option.series[0].data;
    let data1=option.series[1].data;
    data0.shift();
    data0.push(Math.round(Math.random()*1000));
    data1.shift();
    let r:any=Math.random()*10+5;
    data1.push(r.toFixed(1)-0);

    option.xAxis[0].data.shift();
    option.xAxis[0].data.push(axisData);
    option.xAxis[1].data.shift();
    option.xAxis[1].data.push(this.count++);
    this.setState({option:option});
  };
  componentWillMount() {
    /*import('echarts').then(echarts => {
      // console.log(echarts);
      this.setState({ echarts:echarts });
    });*/
  }
  componentDidMount(){
    if (this.timeTicket) {
      clearInterval(this.timeTicket);
    }
    this.timeTicket = setInterval(this.fetchNewDate, 1000);
  }
  componentWillUnmount(){
    if (this.timeTicket) {
      clearInterval(this.timeTicket);
    }
  }

  onChartClick=(param,echart)=>{
    console.log(param, echart);
    alert('图表点击!');
  };
  onChartLegendselectchanged=(param,echart)=>{
    console.log(param, echart);
    alert('改变选中项!');
  };
  onChartReady=(echart)=>{
    this.echarts=echart;
    console.log('图表已加载!', echart);
  };
  getImg=()=>{
    console.log(this.echarts.getDataURL());
  };

  render(){
    let onEvents={
      'click': this.onChartClick,
      'legendselectchanged': this.onChartLegendselectchanged,
    };
    const {option,option2}=this.state;
    return(
      <Items>
        <Item>
          <span>Echarts</span>
          <Echarts ref="e1" option={option} />
        </Item>
        <Item>
          <span>Echart1</span>
          <Echarts option={option2} onChartReady={this.onChartReady} onEvents={onEvents} />
        </Item>
        <Item>
          <h2>代码示例</h2>
          <Code title="Echarts" code={code} />
        </Item>
        <Item>
          <h2>参数说明</h2>
          <Table thead={thead} tbody={tbody} noBorder={true} />
        </Item>
      </Items>
    );
  }
}
