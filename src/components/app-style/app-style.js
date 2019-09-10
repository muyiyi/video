/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-07-30 
 */

import React from 'react'
import './app-style.less'


class AppStyle extends React.Component {
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
    let item = this.props.data;
    console.log(item)    
    if (item.type === 2) {
      return (
        <div>
          <div>{ item.title }</div>
        </div>
      )
    }

  }
}


export default AppStyle;
