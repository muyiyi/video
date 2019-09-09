/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-07-30 
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

  Tabchange = (index) => {
    this.setState({
      chooseindex: index
    })
  }


  /**
   * @desc 不用解释了吧，render函数
   */
  render() {
    const menu = ['精选', '电视剧', 'VIP', '电影', '综艺', '动漫', '少儿', '娱乐', '潮音', '游戏', '纪录片']
    let menulie = menu.map((item, index) => {
      return (
        <li key={ index } onClick={ this.Tabchange.bind(this, index) }
        className={ classnames({'selected': this.state.chooseindex === index}) }>
        { item }
        </li>
      )
    })

    return (
      <ul className="nav">
          { menulie }
      </ul>
    )
  }
}



export default Nav;
