/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-07-30 
 */

import React from 'react'
import './app-head.less'
import { Link } from 'react-router-dom/cjs/react-router-dom';


class AppHead extends React.Component {
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
        <div className="app-head">
            <div className="head-logo"></div>
            <div className="search-contain">
                <span className="search-text">陆战之王</span>
                <Link to={ {pathname: "/search/"} }>
                  <div className="search-logo"></div>
                </Link>
            </div>
        </div>
    )
  }
}


export default AppHead;
