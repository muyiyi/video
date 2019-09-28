/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-09-16 
 */

import React from 'react'
import './swiper-detail.less'
import { Link } from 'react-router-dom/cjs/react-router-dom';

class SwiperDetail extends React.Component {
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
    return (
      <div className="swiper-detail">
        <Link to={ {pathname: "/detail", query: { url: item.name }} }>
          <a href={ item.url }>
            <img className="img-1" alt="" src={ item.img }/>
          <div className="icon">
            <div className="add-icon">
              <div className="icon-1">{ item.icon }</div>
            </div>
          </div>
          <div className="state-contain">
            <div className="state">更新至{ item.number }集</div> 
          </div>
          <div className="text-contain">
            <div className="img-text">{ item.summary }</div>
          </div>
          </a>
        </Link>    
      </div>
    )
  }
}


export default SwiperDetail;
