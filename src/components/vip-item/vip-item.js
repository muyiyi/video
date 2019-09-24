/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-09-22 
 */

import React from 'react'
import './vip-item.less'
import VipList from '../vip-list/vip-list'


class VipItem extends React.Component {
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
    const itemmenu = this.props.data
    let itemlie = itemmenu.map((item, index) => {
      console.log(item)
      return (
        <div key={ index } className="item-box">
          <VipList data={ item }></VipList>
        </div>
      )
    })

    return (
      <div>
        <div className="list-box">
          <div className="vip-list">
            <ul className="item-list">
              { itemlie }
            </ul>
          </div>
        </div>        
      </div>
    )
  }
}


export default VipItem;
