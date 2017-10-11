import * as React from 'react';
import {Dnd} from 'yrui';

import './log.less';

export default class Log extends React.Component{

  render() {
    return(
      <div className="ylog">
        <article>
          <h2>最新版本：1.4.2</h2>
          <ul>
            <li>重构侧边栏和头部配置，用户使用纯数据配置</li>
            <li>新增自定义滚动条配置</li>
            <li>新增主题可配置接口</li>
            <li>修复table组件bugs</li>
            <li>完善select、autocomplete、radio、checked组件</li>
            <li>完善tab页签组件</li>
            <li>新增modal组件，添加modal可拖动配置</li>
            <li>完善工具箱tools</li>
            <li>杀一产品经理祭天</li>
          </ul>
        </article>
      </div>
    );
  }
}