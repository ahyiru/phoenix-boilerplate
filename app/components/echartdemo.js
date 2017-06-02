import * as React from 'react';

import {Echarts,Items,Item,Table,Code} from 'yrui';

import {chart1,chart2} from '../models/echarts';

let thead=['ID','参数','说明','类型','可选值','默认值'];
let tbody=[{
  key:'option',
  expr:'图表数据，见ecarts',
  type:'object',
  values:'-',
  default:'-',
},{
  key:'onEvents',
  expr:'图表事件集',
  type:'object',
  values:'-',
  default:'-',
},{
  key:'onChartReady',
  expr:'图表加载完成事件',
  type:'string',
  values:'-',
  default:'-',
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
  key:'showLoading',
  expr:'是否显示加载',
  type:'boolean',
  values:'true/false',
  default:'false',
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
}];

const t=`<span>Echarts</span>
  <Echarts ref='echarts_react' option={this.state.option} style={{height: 300}} />
`;

const t1=`<span>Echart1</span>
  <Echarts option={this.state.option2} onChartReady={this.onChartReady} onEvents={onEvents} />
`;

export default class EchartDemo extends React.Component {
  constructor(props){
    super(props);
    this.timeTicket=null;
    this.count=51;
    this.state=({
      option:chart1,
      option2:chart2,
    });
  }
  fetchNewDate(){
    let axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');
    let option = this.state.option;
    let data0 = option.series[0].data;
    let data1 = option.series[1].data;
    data0.shift();
    data0.push(Math.round(Math.random() * 1000));
    data1.shift();
    let r=Math.random() * 10 + 5;
    data1.push(r.toFixed(1) - 0);

    option.xAxis[0].data.shift();
    option.xAxis[0].data.push(axisData);
    option.xAxis[1].data.shift();
    option.xAxis[1].data.push(this.count++);
    this.setState({option:option});
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

  onChartClick(param,echart){
    console.log(param, echart);
    alert('图表点击!');
  }
  onChartLegendselectchanged(param,echart){
    console.log(param, echart);
    alert('改变选中项!');
  }
  onChartReady(echart){
    console.log('图表已加载!', echart);
  }

  render() {
    let onEvents={
      'click': this.onChartClick,
      'legendselectchanged': this.onChartLegendselectchanged,
    };
    return (
      <Items>
        <Item>
          <div className="textarea">
            <h4>代码示例</h4>
            <Code title="demo" code={t} />
          </div>
          <h4 className="mtl mbl">Echarts</h4>
          <Echarts ref="echarts_react" option={this.state.option} style={{height: 300}} />
        </Item>
        <Item>
          <div className="textarea">
            <h4>代码示例</h4>
            <Code title="demo" code={t1} />
          </div>
          <h4 className="mtl mbl">Echart1</h4>
          <Echarts option={this.state.option2} style={{height: 300}} onChartReady={this.onChartReady} onEvents={onEvents} />
        </Item>
        <Item>
          <h2>参数说明</h2>
          <Table thead={thead} tbody={tbody} noBorder={true} />
        </Item>
      </Items>
    );
  }
}
