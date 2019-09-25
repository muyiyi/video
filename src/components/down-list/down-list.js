/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-09-24
 */

import React from 'react'
import './down-list.less'


class DownList extends React.Component {
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
    const menu = this.props.data
    return (
      <div className="downlist">
        <div className="list-line">
          <div className="num">{ menu.num }</div>
          <div className="title">{ menu.title }</div>
          <div className="icon">{ menu.icon }</div>
        </div>
      </div>
    )   
  }
}


export default DownList;
