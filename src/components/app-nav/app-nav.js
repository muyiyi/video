/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-07-30 
 */

import React from 'react'
import './app-nav.less'
import classnames from 'classnames'


class AppNav extends React.Component {
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

  Tabchange = (item, index) => {
    this.props.listchange()
    this.setState({
      chooseindex: index
    })
    console.log(item)
  }

  /**
   * @desc 不用解释了吧，render函数
   */
  render() {
    const menu = this.props.nav
    let menulie = menu.map((item, index) => {
      return (
        <li key={ index } onClick={ this.Tabchange.bind(this, item, index) }
        className={ classnames({'selected': this.state.chooseindex === index}) }>
        { item }
        </li>
      )
    })

    return (
      <ul className="app-nav">
          { menulie }
      </ul>
    )
  }
}


export default AppNav;
