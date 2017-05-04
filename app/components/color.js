import * as React from 'react';

import {Row,Col} from 'yrui';

import './color.less';

export default class Color extends React.Component<any,any> {

  render() {
    return (
      <div className="colors">
        <Row gutter={8}>
        	<Col span={3}>
            <div className="c-block bg-purple">purple,<b>#af5cc1</b></div>
          </Col>
          <Col span={3}>
            <div className="c-block bg-green">green,<b>#27c24c</b></div>
          </Col>
          <Col span={3}>
            <div className="c-block bg-red">red,<b>#f05050</b></div>
          </Col>
          <Col span={3}>
            <div className="c-block bg-yellow">yellow,<b>#fad733</b></div>
          </Col>
        </Row>
        <Row gutter={8}>
        	<Col span={3}>
            <div className="c-block bg-primary">primary,<b>#7266ba</b></div>
          </Col>
          <Col span={3}>
            <div className="c-block bg-success">success,<b>#45b6af</b></div>
          </Col>
          <Col span={3}>
            <div className="c-block bg-danger">danger,<b>#f3565d</b></div>
          </Col>
          <Col span={3}>
            <div className="c-block bg-warning">warning,<b>#dfba49</b></div>
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={4}>
            <div className="c-block bg-blue">blue,<b>#23b7e5</b></div>
          </Col>
          <Col span={4}>
            <div className="c-block bg-orange">orange,<b>#ff7f50</b></div>
          </Col>
          <Col span={4}>
            <div className="c-block bg-gray">gray,<b>#666</b></div>
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={4}>
            <div className="c-block bg-info">info,<b>#24cbe5</b></div>
          </Col>
          <Col span={4}>
            <div className="c-block bg-tip">tip,<b>#ff9655</b></div>
          </Col>
          <Col span={4}>
          <div className="c-block bg-default">default,<b>#999</b></div>
          </Col>
        </Row>
      </div>
    )
  };
}
