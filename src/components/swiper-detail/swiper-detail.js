/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-09-16 
 */

import React from 'react'
import './swiper-detail.less'


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
    return (
      <div className="swiper-detail">
        <img className="img-1" alt="" src={ item.imgsrc }/>
        <div className="icon">
            <div className="add-icon">
                <div className="icon-1">{ item.icon }</div>
                <div className="vip">{ item.vip }</div>
            </div>
        </div>
        <div className="state-contain">
            <div className="state">{ item.state }</div> 
        </div>
        <div className="text-contain">
            <div className="img-text">{ item.title }</div>
            <div className="img-num">{ item.num }</div>
        </div>
      </div>
    )
  }
}


export default SwiperDetail;
