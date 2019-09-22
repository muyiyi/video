/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-09-22 
 */

import React from 'react'
import './nav-style.less'


class NavStyle extends React.Component {
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
    const list = this.props.data
    let liststyle = list.map((item, index) => {
      return(
        <li key={ index } className="item">{ item }</li>
      )
    })
    
    return (
      <div className="nav-list">
        <div className="search-nav">
          <div className="show-border">
            <ul className="show-list">
              { liststyle }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}


export default NavStyle;
