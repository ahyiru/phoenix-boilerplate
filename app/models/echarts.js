//chart1
export const chart1={
  title:{

  },
  tooltip:{
    trigger:'axis'
  },
  legend:{
    data:['最新成交价','预购队列']
  },
  toolbox:{
    show:true,
    feature:{
      dataView:{readOnly:false},
      restore:{},
      saveAsImage:{}
    }
  },
  grid:{
    top:60,
    left:30,
    right:60,
    bottom:30
  },
  dataZoom:{
    show:false,
    start:0,
    end:100
  },
  visualMap:{
    show:false,
    min:0,
    max:1000,
    color:['#BE002F', '#F20C00', '#F00056', '#FF2D51', '#FF2121', '#FF4C00', '#FF7500', '#FF8936', '#FFA400', '#F0C239', '#FFF143', '#FAFF72', '#C9DD22', '#AFDD22','#9ED900', '#00E500', '#0EB83A', '#0AA344', '#0C8918', '#057748', '#177CB0']
  },
  xAxis:[
    {
      type:'category',
      boundaryGap:true,
      data:( ()=>{
        let now:any = new Date();
        let res = [];
        let len = 50;
        while (len--) {
          res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
          now = new Date(now - 2000);
        }
        return res;
      })()
    },
    {
      type: 'category',
      boundaryGap: true,
      data: ( ()=>{
        let res = [];
        let len = 50;
        while (len--) {
          res.push(50 - len + 1);
        }
        return res;
      })()
    }
  ],
  yAxis:[
    {
      type: 'value',
      scale: true,
      name: '价格',
      max: 20,
      min: 0,
      boundaryGap: [0.2, 0.2]
    },
    {
      type: 'value',
      scale: true,
      name: '预购量',
      max: 1200,
      min: 0,
      boundaryGap: [0.2, 0.2]
    }
  ],
  series:[
    {
      name:'预购队列',
      type:'bar',
      xAxisIndex: 1,
      yAxisIndex: 1,
      itemStyle: {
        normal: {
          barBorderRadius: 4,
        }
      },
      animationEasing: 'elasticOut',
      animationDelay: (idx)=> {
        return idx * 10;
      },
      animationDelayUpdate: (idx)=> {
        return idx * 10;
      },
      data:( ()=>{
        let res = [];
        let len = 50;
        while (len--) {
          res.push(Math.round(Math.random() * 1000));
        }
        return res;
      })()
    },
    {
      name:'最新成交价',
      type:'line',
      data:( ()=>{
        let res = [];
        let len = 0;
        while (len < 50) {
          let r:any=Math.random()*10 + 5;
          res.push(r.toFixed(1)-0);
          len++;
        }
        return res;
      })()
    }
  ]
}

//chart2
export const chart2={
  title:{
    text:'某站点用户访问来源',
    subtext:'纯属虚构',
    x:'center'
  },
  tooltip:{
    trigger:'item',
    formatter:"{a} <br/>{b} : {c} ({d}%)"
  },
  legend:{
    orient:'vertical',
    left:'left',
    data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
  },
  series:[
    {
      name: '访问来源',
      type: 'pie',
      radius : '55%',
      center: ['50%', '60%'],
      data:[
        {value:335, name:'直接访问'},
        {value:310, name:'邮件营销'},
        {value:234, name:'联盟广告'},
        {value:135, name:'视频广告'},
        {value:1548, name:'搜索引擎'}
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}













