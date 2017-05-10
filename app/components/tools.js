import * as React from 'react';

import {Items,Item,Row,Col,Table,UL,Code} from 'yrui';

let thead=['ID','参数','说明','类型','可选值','默认值'];
let ul=[{
  key:'uls',
  expr:'列表集',
  type:'array',
  values:'-',
  default:'-'
},{
  key:'click',
  expr:'点击事件',
  type:'function',
  values:'-',
  default:'-'
},{
  key:'alignRight',
  expr:'文本右对齐',
  type:'boolean',
  values:'true/false',
  default:'false'
}];

let uls=[{
  left:'11',
  right:'22',
},{
  left:'11',
  right:'22',
},{
  left:'11',
  right:'22',
},{
  left:'11',
  right:'22',
}];

const t=`
  
  import {tools} from 'yrui';

  一、dom操作

    1. class操作

    （1）判断是否存在class
        hasClass(target,className),如:hasClass(document.body,'horizontal');
    （2）添加class
        addClass(target,className),如:addClass(document.body,'horizontal');
    （3）删除class
        removeClass(target,className),如:removeClass(document.body,'horizontal');
    （4）切换class
        toggleClass(target,className),如:toggleClass(document.body,'horizontal');
    
    2. 动画效果
      动画开始：raf.start(func);
      动画销毁：raf.cancel(id);
      如:let toTop=raf.start(backTop);
      raf.cancel(toTop);
    
    3. 全屏
      fullScreen(element);eg:fullScreen(document.body);
      再次执行一次推出全屏,fullScreen(document.body);
    
    4. loading
      loading(ele,pos);eg:loading(document.body);
      默认pos='fix'，相对于浏览器，可设值'abs',相对于当前element;
      再次执行一次推出loading,loading(document.body);
    
    5. 消息提示
      $notify.start(opt);
        opt.pos=opt.pos||'top-middle';//方位
        opt.color=opt.color||'success';//颜色
        opt.icon=opt.icon||'check-square-o';//图标
        opt.txt=opt.txt||'test';//文本
        opt.id=opt.id||0;//id
      销毁提示:$notify.distroy(id);
  
  ####################################################################
  
  二、工具

    1. 事件监听
      事件派发用法:$emitter.dispatch(event,data)
      event:事件，data:传值

      事件订阅用法:$emitter.subscribe(event,callback)
      event:订阅事件，callback:返回事件

      取消订阅用法:$emitter.unSubscribe(event)
      event:取消订阅事件

    2. 数组、对象拷贝clone

      用法:$clone(obj)
      obj:需要拷贝的对象

    3. 对象合并merge

      用法:$merge(base,extend)
      base:被合并对象，extend:合并对象

    4. 数组去重

      用法:$unique(arr)
      arr:数组

    5. 排序

      用法:$sort(param1,param2)
      arr.sort($sort(a,b));从小到大排序。

    6. fetch前后端数据交互
      
    (1)get:$fetch.get(url,opt)
      url:数据地址,
      opt.header:{'Content-Type':'application/json'},
      opt.mode:'cors',
      opt.credentials:'omit',
      opt.cache:'default',
    
    (2)post:$fetch.post(url,opt)
      url:数据地址,
      opt.data:传递数据,
      opt.header:默认{'Content-Type':'application/json'},
      opt.mode:默认'cors',
      opt.credentials:默认'omit',
      opt.cache:默认'default',
    
    (3)put:$fetch.put(url,opt)
      url:数据地址,
      opt.header:默认{'Content-Type':'application/json'},
      opt.mode:默认'cors',
      opt.credentials:默认'omit',
      opt.cache:默认'default',

    7. 验证器 validate

        验证不为空用法:$validate.isRequired(val)
        val:验证的值

        验证手机号用法:$validate.chkPhone(val)
        val:验证的值

        验证邮箱用法:$validate.chkEmail(val)
        val:验证的值

        验证密码用法:$validate.chkPwd(val)
        val:验证的值

        验证用户名用法:$validate.chkName(val)
        val:验证的值

        验证url地址用法:$validate.chkUrl(val)
        val:验证的值

        验证数字用法:$validate.chkNumber(val)
        val:验证的值

        验证汉字用法:$validate.chkHanzi(val)
        val:验证的值

        验证日期用法:$validate.chkDate(val)
        val:验证的值

        验证身份证用法:$validate.chkIdentity(val)
        val:验证的值
    
    8. 缓存操作

      (1)localStorage

        获取缓存用法:$storage.get(name)
        name:缓存名

        设置缓存用法:$storage.set(name,data)
        name:缓存名，data:缓存数据

        删除缓存用法:$storage.rm(name)
        name:缓存名

        清空缓存用法:$storage.clear()

      (2)sessionStorage

        获取缓存用法:$session.get(name)
        name:缓存名

        设置缓存用法:$session.set(name,data)
        name:缓存名，data:缓存数据

        删除缓存用法:$session.rm(name)
        name:缓存名

        清空缓存用法:$session.clear()

    9. 在min和max间生成随机数

        用法:$rand(a,b)
        a: 数值a，b:数值b

    10. 生成一个n位数随机的数字字母字符串

        用法:$randstr(n)
        n: 位数

    11. 去除文本空格

        用法:$trim(str)
        str: 字符串文本

`;

export default class Tools extends React.Component<any,any> {

  render() {
    return (
      <Items>
        <Item>
          <div className="textarea">
            <h4>工具示例</h4>
            <Code title="tools" code={t} />
          </div>
        </Item>
      </Items>
    )
  };
}
