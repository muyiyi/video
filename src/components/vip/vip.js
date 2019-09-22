/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-09-22 
 */

import React from 'react'
import './vip.less'
import NavList from '../nav-list/nav-list'
import VipItem from '../vip-item/vip-item'


class Vip extends React.Component {
  /**
   * @desc 不用解释了吧，这是组件的构造函数
   * @param {*} props 
   */
  constructor(props) {
    super(props)

    this.state = {}
  }


  /**
   * @desc 不用解释了吧，render函数
   */
  render() {
    return (
      <div>
        <div className="search-head">
          <input className="text" value="鼠胆英雄" />
          <div className="icon"></div>
        </div>
        <NavList></NavList>
        <VipItem></VipItem>
      </div>
    )
  }
}


export default Vip;
