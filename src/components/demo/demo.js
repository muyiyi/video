/***************************************************************************************
 * Copyright           : 2019 - 2020
 * FileName            : demo.js
 * Author              : Hello 前端俱乐部 https://blog.shuipingguo.com/
 * Version             :
 * Date Of Creation    : 2019-07-29 10:30:00
 * Description         : 这是一个demo组件，包括了一个组件的最基本元素
 *                     :
 *                     :
 * Function List       :
 **************************************************************************************/

import React from 'react'
import { connect } from 'react-redux'
import './demo.less'
// import HttpClient from '../../api/http-client'
import { addOne } from '@redux/actions'

class Demo extends React.Component {
  /**
   * @desc 不用解释了吧，这是组件的构造函数
   * @param {*} props 
   */
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    // HttpClient.getList({}, (rsp) => { console.log(rsp); });
  }

  dispatchReduxAction = () => {
    console.log('[demo] dispatchReduxAction');
    this.props.addOne(6)
  }

  /**
   * @desc 不用解释了吧，render函数
   */
  render() {
    return (
      <div className="demo">
        <div>蓝色框内区域是 Demo组件</div>
        <div onClick={ this.dispatchReduxAction.bind(this) } className="button">Redux dispatch</div>
      </div>
    )
  }
}


export default connect(
  null,
  { addOne }
)(Demo)
