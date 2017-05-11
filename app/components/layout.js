import * as React from 'react';

import {Items,Item,Row,Col,Table,Code} from 'yrui';

import './color.less';

const font=`
  body{
    font-family:Arial,'Microsoft YaHei',Helvetica,sans-serif,'黑体','宋体';
    font-size:1.4rem;
    line-height:1.42857143;
    font-weight:normal;//400
  }
  
  h1{
    font-size:2.8rem;
    font-weight:800;
    margin-top:1.6rem;
    margin-bottom:1.6rem;
  }
  h2{
    font-size:2.2rem;
    font-weight:700;
    margin-top:1.4rem;
    margin-bottom:1.4rem;
  }
  h3{
    font-size:1.8rem;
    font-weight:600;
    margin-top:1.2rem;
    margin-bottom:1.2rem;
  }
  h4{
    font-size:1.6rem;
    font-weight:500;
    margin-top:1rem;
    margin-bottom:1rem;
  }
  h5{
    font-size:1.4rem;
    font-weight:500;
    margin-top:1rem;
    margin-bottom:1rem;
  }
  h6{
    font-size:1.2rem;
    font-weight:500;
    margin-top:.8rem;
    margin-bottom:.8rem;
  }
  p{
    margin-top:.8rem;
    margin-bottom:.8rem;
  }

  /*padding*/
  .pxs{padding:5px !important;}
  .ps{padding:10px !important;}
  .p{padding:15px !important;}
  .pl{padding:20px !important;}

  /*margin*/
  .mxs{margin:5px !important;}
  .ms{margin:10px !important;}
  .m{margin:15px !important;}
  .ml{margin:20px !important;}

  .mlxs{margin-left:5px !important;}
  .mls{margin-left:10px !important;}
  .ml{margin-left:15px !important;}
  .mll{margin-left:20px !important;}

  .mrxs{margin-right:5px !important;}
  .mrs{margin-right:10px !important;}
  .mr{margin-right:15px !important;}
  .mrl{margin-right:20px !important;}

  .mtxs{margin-top:5px !important;}
  .mts{margin-top:10px !important;}
  .mt{margin-top:15px !important;}
  .mtl{margin-top:20px !important;}

  .mbxs{margin-bottom:5px !important;}
  .mbs{margin-bottom:10px !important;}
  .mb{margin-bottom:15px !important;}
  .mbl{margin-bottom:20px !important;}

`;

const cls=`

  左浮动:'y-left',
  右浮动:'y-right',
  隐藏:'y-hide',
  显示:'y-show',
  块元素:'y-block',
  行内块元素:'y-inline',
  清除浮动:'y-clearfloat',
  文本溢出显示身略号:'p-overflow',

`;

export default class Layout extends React.Component<any,any> {
  componentDidMount=()=>{
    // const txt=this.refs.p1;
    // txt.innerText=t;
  };

  render() {
    return (
      <Items>
        <Item>
          <div className="textarea">
            <h2>Phoenix UI</h2>
            <p>Phoenix UI是一套用于快速开发web应用的UI框架。</p>
            <p>Phoenix UI使用Typescript编写，提供一些简单UI组件及函数库。拓展性强，可配合其它一些组件或插件进行开发，如ant design、jquery等。</p>
          </div>
        </Item>
        <Item>
          <h2>颜色</h2>
          <div className="colors">
            <Row gutter={8}>
              <Col span={3} sm={6} xs={12}>
                <div className="c-block bg-purple">purple,<b>#af5cc1</b></div>
              </Col>
              <Col span={3} sm={6} xs={12}>
                <div className="c-block bg-green">green,<b>#27c24c</b></div>
              </Col>
              <Col span={3} sm={6} xs={12}>
                <div className="c-block bg-red">red,<b>#f05050</b></div>
              </Col>
              <Col span={3} sm={6} xs={12}>
                <div className="c-block bg-yellow">yellow,<b>#fad733</b></div>
              </Col>
            </Row>
            <Row gutter={8}>
              <Col span={3} sm={6} xs={12}>
                <div className="c-block bg-primary">primary,<b>#7266ba</b></div>
              </Col>
              <Col span={3} sm={6} xs={12}>
                <div className="c-block bg-success">success,<b>#45b6af</b></div>
              </Col>
              <Col span={3} sm={6} xs={12}>
                <div className="c-block bg-danger">danger,<b>#f3565d</b></div>
              </Col>
              <Col span={3} sm={6} xs={12}>
                <div className="c-block bg-warning">warning,<b>#dfba49</b></div>
              </Col>
            </Row>
            <Row gutter={12}>
              <Col span={4} sm={6} xs={12}>
                <div className="c-block bg-blue">blue,<b>#23b7e5</b></div>
              </Col>
              <Col span={4} sm={6} xs={12}>
                <div className="c-block bg-orange">orange,<b>#ff7f50</b></div>
              </Col>
              <Col span={4} sm={6} xs={12}>
                <div className="c-block bg-gray">gray,<b>#666</b></div>
              </Col>
            </Row>
            <Row gutter={12}>
              <Col span={4} sm={6} xs={12}>
                <div className="c-block bg-info">info,<b>#24cbe5</b></div>
              </Col>
              <Col span={4} sm={6} xs={12}>
                <div className="c-block bg-tip">tip,<b>#ff9655</b></div>
              </Col>
              <Col span={4} sm={6} xs={12}>
              <div className="c-block bg-default">default,<b>#999</b></div>
              </Col>
            </Row>
          </div>
        </Item>
        <Item>
          <Row gutter={8}>
            <Col span={12}>
              <h1>h1(28px):Phoenix UI是一套用于快速开发web应用的UI框架。</h1>
              <h2>h2(22px):Phoenix UI是一套用于快速开发web应用的UI框架。</h2>
              <h3>h3(18px):Phoenix UI是一套用于快速开发web应用的UI框架。</h3>
              <h4>h4(16px):Phoenix UI是一套用于快速开发web应用的UI框架。</h4>
              <h5>h5(14px):Phoenix UI是一套用于快速开发web应用的UI框架。</h5>
              <h6>h6(12px):Phoenix UI是一套用于快速开发web应用的UI框架。</h6>
              <p>p:Phoenix UI是一套用于快速开发web应用的UI框架。</p>
            </Col>
          </Row>
          <div className="textarea">
            <h2>字体、间距</h2>
            <Code title="font" code={font} />
          </div>
        </Item>
        <Item>
          <div className="textarea">
            <h2>其它一些样式</h2>
            <Code title="class" code={cls} />
          </div>
        </Item>
      </Items>
    )
  }
}
