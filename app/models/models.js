
//notifyList
export const notifyList=[{
  class:'top-left success',
  icon:'check-square-o',
  txt:'更新成功！',
},{
  class:'top-middle warning',
  icon:'exclamation-triangle',
  txt:'数据格式不规范！',
},{
  class:'top-right danger',
  icon:'times-circle',
  txt:'更新出错！',
},{
  class:'bottom-right info',
  icon:'info-circle',
  txt:'请升级版本！',
}];

//dropList
export const dropList={
  searchFlag:true,
  /*leftList:[{
    name:'theme',
    icon:'cog',
    animate:'up',
    open:'',
    // items:['header','branding','sidebar','active']
    items:['头部','LOGO','侧边栏','选中']
  }],*/
  rightList:[{
    name:'API',
    icon:'book',
    href:'#/',
  },{
    name:'帮助',
    icon:'info',
    href:'javascript:;',
  }],
  rightList1:[{
    name:'msg',
    icon:'envelope',
    animate:'left',
    msg:'3',
    open:'',
    items:[{
      pic:'m1',
      h4:'你有一条新信息',
      p:'请注意查收 ',
      icon:'weixin',
    },{
      pic:'m2',
      h4:'你有一条新信息',
      p:'请注意查收 ',
      icon:'weixin',
    },{
      pic:'m3',
      h4:'你有一条新信息',
      p:'请注意查收 ',
      icon:'weixin',
    },{
      pic:'m4',
      h4:'你有一条新信息',
      p:'请注意查收 ',
      icon:'weixin',
    }],
  },{
    name:'tips',
    icon:'bell',
    animate:'up',
    msg:'5',
    open:'',
    items:[{
      pic:'t1',
      h4:'你的系统有更新',
      p:'请升级到最新版本',
      icon:'weixin',
    },{
      pic:'t2',
      h4:'你的系统有更新',
      p:'请升级到最新版本',
      icon:'weixin',
    },{
      pic:'t3',
      h4:'你的系统有更新',
      p:'请升级到最新版本',
      icon:'weixin',
    },{
      pic:'t4',
      h4:'你的系统有更新',
      p:'请升级到最新版本',
      icon:'weixin',
    },{
      pic:'t5',
      h4:'你的系统有更新',
      p:'请升级到最新版本',
      icon:'weixin',
    }],
  },{
    name:'language',
    icon:'html5',
    animate:'down',
    msg:'',
    open:'',
    items:[{
      pic:'中',
      h4:'中文',
      p:'简体',
      icon:'weixin',
    },{
      pic:'英',
      h4:'English',
      p:'en',
      icon:'weixin',
    },{
      pic:'日',
      h4:'Japanese',
      p:'japan',
      icon:'weixin',
    }],
  },{
    name:'profile',
    img:require('../styles/images/usr.jpg'),
    icon:'user',
    animate:'right',
    msg:'4',
    open:'',
    items:[{
      pic:'用',
      h4:'用户信息',
      p:'',
      icon:'weixin',
    },{
      pic:'消',
      h4:'消息',
      p:'',
      icon:'weixin',
    },{
      pic:'设',
      h4:'设置',
      p:'',
      icon:'weixin',
    },{
      pic:'退',
      h4:'退出',
      p:'',
      url:'user/login',
      icon:'weixin',
    }],
  }],
};

//rightbarTabs
export const rightbarTabs=[{
  id:'0',
  name:'tab1',
  icon:'weibo',
  active:'',
},{
  id:'1',
  name:'tab2',
  icon:'weixin',
  active:'',
},{
  id:'2',
  name:'tab3',
  icon:'qq',
  active:'',
},{
  id:'3',
  name:'tab4',
  icon:'apple',
  active:'',
}];
//rightbarTabLists
export const rightbarTabLists=[{
  num:'l1',
  pic:'l1',
  h4:'我想起那天夕阳下的奔跑1111111',
  p:'那是我们逝去的青春',
  icon:'hand-o-left',
},{
  num:'l2',
  pic:'l2',
  h4:'我想起那天夕阳下的奔跑',
  p:'那是我们逝去的青春',
  icon:'hand-o-left',
},{
  num:'l3',
  pic:'l3',
  h4:'我想起那天夕阳下的奔跑',
  p:'那是我们逝去的青春',
  icon:'hand-o-left',
},{
  num:'l4',
  pic:'l4',
  h4:'我想起那天夕阳下的奔跑',
  p:'那是我们逝去的青春',
  icon:'hand-o-left',
}];

//tables
export const tableData={
  thead:['ID','青龙','白虎','朱雀','玄武'],
  tbody:[
    [1,'r11','r12','r13','r14'],
    [2,'r21','r22','r23','r24'],
    [3,'r31','r32','r33','r34'],
    [4,'r41','r42','r43','r44'],
    [5,'r51','r52','r53','r54'],
    [6,'r61','r62','r63','r64'],
  ],
};

//projectList
export const projectList=[{
  url:'http://localhost:8001/',
  title:'project1',
  icon:'user',
},{
  url:'http://localhost:8002/',
  title:'project2',
  icon:'user',
},{
  url:'http://localhost:8003/',
  title:'project3',
  icon:'user',
},{
  url:'http://localhost:8004/',
  title:'project4',
  icon:'user',
},{
  url:'http://localhost:8005/',
  title:'project5',
  icon:'user',
}];














