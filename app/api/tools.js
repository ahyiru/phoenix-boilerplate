import * as React from 'react';

import {Items,Item,Code} from 'yrui';

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
      loading(ele=undefined);eg:loading(document.body);
      ele:相对于当前element显示加载;
      默认ele=document.body，相对于浏览器;
      再次执行一次退出loading,loading(document.body);
    
    5. 消息提示
      $notify.start(opt={},closeable=false,timer=3000);
        opt.pos=opt.pos||'top-middle';//方位
        opt.color=opt.color||'success';//颜色
        opt.icon=opt.icon||'check-square-o';//图标
        opt.txt=opt.txt||'test';//文本
      closeable:可关闭当前提示;
      timer:默认3s后自动关闭;
  
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
      
    (1)get:$fetch.get(url,opt={},chkToken=false)
      url:数据地址,
      opt.header:默认{'Content-Type':'application/json'},
      opt.mode:默认'cors',
      opt.credentials:默认'include',
      opt.cache:默认'default',
      chkToken:请求前检查token,
    
    (2)post:$fetch.post(url,opt,chkToken=false)
      url:数据地址,
      opt.data:传递数据,默认{},
      opt.header:默认{'Content-Type':'application/json'},
      opt.mode:默认'cors',
      opt.credentials:默认'include',
      opt.cache:默认'default',
      chkToken:请求前检查token,
    
    (3)put:$fetch.put(url,opt,chkToken=false)
      url:数据地址,
      opt.header:默认{'Content-Type':'application/json'},
      opt.mode:默认'cors',
      opt.credentials:默认'include',
      opt.cache:默认'default',
      chkToken:请求前检查token,

    7. 验证器 validate

        $validate.validate(reg,val);
        reg:正则匹配；
        val:验证的值;

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

        用法:$rand(a,b,int)
        a: 数值a；b:数值b，默认0；int:返回值是否为整数，默认为false；

    10. 生成一个n位数随机的数字字母字符串

        用法:$randstr(n)
        n: 位数

    11. 去除文本空格

        用法:$trim(str)
        str: 字符串文本

    12. 时间格式化 $formatTime

        用法: $formatTime(str,date);
        str: 时间连接字符串,默认为年月日'yMd';
            'y'-年,'M'-月,'d'-日,'h'-时,'m'-分,'s'-秒,'w'-周;
        date:要格式化的时间戳,默认为当前时间 new Date();

      eg:$formatTime('y-M-d'),//2017-05-12
      eg:$formatTime('y年M月d日 h:m:s w'),//2017年05月12日 10:14:26 星期五

    13. 动画 requestAnimationFrame，raf

      用法: raf.start(func),raf.cancel(id)
      func:执行的函数
      id:raf名

    14.文件下载 dlFile(url,name)

      url:文件地址,
      name:下载文件名,

    15.判断两对象是否相等 isEqual(a,b)

    14.判断数组里是否包含某个元素 contain(obj,item)


`;

export default class Tools extends React.Component{

  render(){
    return(
      <Items>
        <Item>
          <h4>工具示例</h4>
          <Code title="tools" code={t} />
        </Item>
      </Items>
    );
  }
}
