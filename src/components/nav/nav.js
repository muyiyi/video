/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-09-24
 */

import React from 'react'
import './nav.less'
import classnames from 'classnames'


class Nav extends React.Component {
  /**
   * @desc 不用解释了吧，这是组件的构造函数
   * @param {*} props 
   */
  constructor(props) {
    super(props)

    this.state = {
      chooseindex: 0
    }
  }

  change = (index) => {
    this.setState({
      chooseindex: index
    })
  }
  
  /**
   * @desc 不用解释了吧，render函数
   */
  render() {
    const navmenu = ['热搜', '电视剧', '少儿', '综艺', '电影', '动漫', '明星', '游戏', '音乐', '热点', '实时']
    let navlist = navmenu.map((item, index) => {
      return (
        <li key={ index } className="nav-name" onClick={ this.change.bind(this, index)} 
        className={ classnames({'selected': this.state.chooseindex === index})}>
          { item }
        </li>
      )
    })
    return (
      <div className="nav">
        <ul className="nav-box">
          { navlist }
        </ul>
      </div>
    )   
  }
}


export default Nav;
