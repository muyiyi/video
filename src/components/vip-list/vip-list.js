/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-09-22 
 */

import React from 'react'
import './vip-list.less'
import { Link } from 'react-router-dom/cjs/react-router-dom';


class VipList extends React.Component {
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
    let item = this.props.data

    return (
      <ul className="item-list">
        <li className="item-contain">
        <Link to={ {pathname: "/detail/"} }>
          <a href={ item.url }>
            <div className="img">
              <img src={ item.imgv }/>
            </div>
          </a>
        </Link>
          <div className="title-box">
            <div className="item-title">{ item.name }</div>
          </div>
          <div className="vip">
            <img/>
          </div>
        </li>
      </ul>
    )
  }
}


export default VipList;
