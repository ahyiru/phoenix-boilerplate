import * as React from 'react';
import {tools} from 'yrui';
const $fetch=tools.$fetch;
const $validate=tools.$validate;

// let phone=$validate.chkPhone(159);

// import {test} from '../servers/service';

// test();

import {Row,Col,Items,Item,Table} from 'yrui';

let thead=['ID','参数','说明','类型','可选值','默认值'];
let tbody=[{
  key:'gutter',
  expr:'在Row上设置栅格间距参数值',
  type:'number',
  values:'8/12/16/20',
  default:'0'
},{
  key:'span',
  expr:'栅格占据的列数',
  type:'number',
  values:'1-12',
  default:'-'
},{
  key:'offset',
  expr:'栅格左侧的间隔格数',
  type:'number',
  values:'1-12',
  default:'0'
}];

export default class Layout extends React.Component<any,any> {

  render() {
    return (
      <Items>
        <Item>
          <h2>dom操作工具</h2>
          <Row gutter={12}>
            <Col span={4}>
              <code>
                <h2>判断是否含有class</h2>
                <b>用法:</b>hasClass(target,cname)
                <p>target:dom元素，cname:类名</p>
                <h2>添加class</h2>
                <b>用法:</b>addClass(target,cname)
                <p>target:dom元素，cname:类名</p>
                <h2>删除class</h2>
                <b>用法:</b>removeClass(target,cname)
                <p>target:dom元素，cname:类名</p>
                <h2>切换class</h2>
                <b>用法:</b>toggleClass(target,cname)
                <p>target:dom元素，cname:类名</p>
                <h2>全屏fullscreen</h2>
                <b>用法:</b>fullScreen(element)
                <p>element:dom节点</p>
              </code>
            </Col>
            <Col span={4}>
              <code>
                <h2>动画 requestAnimationFrame</h2>
                <b>开始 raf.start(func)</b>
                <b>用法:</b>raf.start(func)
                <p>func:动画监听事件</p>
                <b>结束 raf.cancel(id)</b>
                <b>用法:</b>raf.cancel(id)
                <p>id:取消事件的名字</p>
                <h2>返回顶部</h2>
                <b>用法:</b>backTop(pix,time)
                <p>pix:距离长度，time:时间</p>
                <p>默认pix=100,time=6</p>
                <h2>获取当前页面--menu</h2>
                <b>用法:</b>getCurrent(sidebarMenu,str)
                <p>sidebarMenu:menu数据，str:当前url地址</p>
                <h2>获取当前页面--breadcrumb</h2>
                <b>用法:</b>breadcrumb(sidebarMenu,str)
                <p>sidebarMenu:menu数据，str:当前url地址</p>
              </code>
            </Col>
            <Col span={4}>
              <code>
                <h2>加载等待</h2>
                <b>用法:</b>loading(ele)
                <p>ele: dom节点。默认为document.body</p>
                <h2>格式化文本</h2>
                <b>用法:</b>formatTxt(str)
                <p>str:需要格式化的文本</p>
                <h2>消息提示 notify</h2>
                <b>开始：$notify.start(opt)</b>
                <b>用法:</b>$notify.start(opt)
                <p>opt：配置项。提示位置:pos,eg:'top-middle';提示框颜色:color,eg:'success';提示框图标:icon,eg:'user';提示文本:txt,eg:'我是提示！';</p>
                <b>结束：$notify.destroy()</b>
                <b>用法:</b>$notify.destroy()
                <h2>时间显示 timer</h2>
                <b>用法:</b>$timer(ele)
                <p>ele: 添加显示时间的dom节点</p>
              </code>
            </Col>
          </Row>
          <h2>常用工具</h2>
          <Row gutter={12}>
            <Col span={4}>
              <code>
                <h2>事件监听</h2>
                <b>事件派发</b>
                <b>用法:</b>$emitter.dispatch(event,data)
                <p>event:事件，data:传值</p>
                <b>事件订阅</b>
                <b>用法:</b>$emitter.subscribe(event,callback)
                <p>event:订阅事件，callback:返回事件</p>
                <b>取消订阅</b>
                <b>用法:</b>$emitter.unSubscribe(event)
                <p>event:取消订阅事件</p>
                <h2>数组、对象拷贝clone</h2>
                <b>用法:</b>$clone(obj)
                <p>obj:需要拷贝的对象</p>
                <h2>对象合并merge</h2>
                <b>用法:</b>$merge(base,extend)
                <p>base:被合并对象，extend:合并对象</p>
                <h2>数组去重</h2>
                <b>用法:</b>$unique(arr)
                <p>arr:数组</p>
                <h2>排序</h2>
                <b>用法:</b>$sort(param1,param2)
                <p>param1:，param2:</p>
              </code>
            </Col>
            <Col span={4}>
              <code>
                <h2>验证器 validate</h2>
                <b>验证不为空</b>
                <b>用法:</b>$validate.isRequired(val)
                <p>val:验证的值</p>

                <b>验证手机号</b>
                <b>用法:</b>$validate.chkPhone(val)
                <p>val:验证的值</p>

                <b>验证邮箱</b>
                <b>用法:</b>$validate.chkEmail(val)
                <p>val:验证的值</p>

                <b>验证密码</b>
                <b>用法:</b>$validate.chkPwd(val)
                <p>val:验证的值</p>

                <b>验证用户名</b>
                <b>用法:</b>$validate.chkName(val)
                <p>val:验证的值</p>

                <b>验证url地址</b>
                <b>用法:</b>$validate.chkUrl(val)
                <p>val:验证的值</p>

                <b>验证数字</b>
                <b>用法:</b>$validate.chkNumber(val)
                <p>val:验证的值</p>

                <b>验证汉字</b>
                <b>用法:</b>$validate.chkHanzi(val)
                <p>val:验证的值</p>

                <b>验证日期</b>
                <b>用法:</b>$validate.chkDate(val)
                <p>val:验证的值</p>

                <b>验证身份证</b>
                <b>用法:</b>$validate.chkIdentity(val)
                <p>val:验证的值</p>
              </code>
            </Col>
            <Col span={4}>
              <code>
                <h2>服务请求fetch管理</h2>
                <b>获取数据</b>
                <b>用法:</b>$fetch.get(url,headers)
                <p>url: 地址，headers：请求头，默认'Content-Type':'application/json'</p>
                <b>传送数据</b>
                <b>用法:</b>$fetch.post(url,data,headers)
                <p>url: 地址，data:传送数据，headers:请求头，默认'Content-Type':'application/json'</p>
                <h2>缓存操作</h2>
                <b>获取缓存</b>
                <b>用法:</b>$storage.get(name)
                <p>name:缓存名</p>
                <b>设置缓存</b>
                <b>用法:</b>$storage.set(name,data)
                <p>name:缓存名，data:缓存数据</p>
                <b>删除缓存</b>
                <b>用法:</b>$storage.rm(name)
                <p>name:缓存名</p>
                <b>清空缓存</b>
                <b>用法:</b>$storage.clear()
                <h2>在min和max间生成随机数</h2>
                <b>用法:</b>$rand(a,b)
                <p>a: 数值a，b:数值b</p>
                <h2>生成一个n位数随机的数字字母字符串</h2>
                <b>用法:</b>$randstr(n)
                <p>n: 位数</p>
              </code>
            </Col>
          </Row>
        </Item>
      </Items>
    )
  };
};
