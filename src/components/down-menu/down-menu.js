/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-09-24
 */

import React from 'react'
import './down-menu.less'
import DownList from '../down-list/down-list';


class DownMenu extends React.Component {
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
    const menu = [
      {
        num: '1',
        title: '陈情令',
        icon: '↑'
      },
      {
        num: '2',
        title: '西行纪',
        icon: '↑'
      },
      {
        num: '3',
        title: '脱口秀大会 第二季',
        icon: '↓'
      },
      {
        num: '4',
        title: '女排世界杯',
        icon: '－'
      },
      {
        num: '5',
        title: '国民老公',
        icon: '↑'
      },
      {
        num: '6',
        title: '老旧馆',
        icon: '↓'
      },
      {
        num: '7',
        title: '斗罗大陆',
        icon: '↓'
      },
      {
        num: '8',
        title: '女排世界杯',
        icon: '↑'
      },
      {
        num: '9',
        title: '小猪佩奇第七季',
        icon: '↓'
      },
      {
        num: '10',
        title: '中餐厅 第三季',
        icon: '－'
      },
    ]

    let menulist = menu.map((item, index) => {
      return (
        <div key={ index }>
          <DownList data={ item }></DownList>
        </div>
      )
    })
    return (
      <div className="downmenu">
        <ul className="menu">
          { menulist }
        </ul>
      </div>
    )   
  }
}


export default DownMenu;
