/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-07-30 
 */

import React from 'react'
import './list-style.less'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'


class ListStyle extends React.Component {
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
    let item = this.props.item
    if (item.typea === 2) {
      return (
        <div className="list-styleb">
            <div className="list-box">
                <div className="video-list">
                  <div className="list-detail">
                    <img className="img-2" alt="" src={ item.imgsrc }/>
                    <div className="icon">
                        <div className="add-icon">
                            <div className="icon-1">{ item.icon }</div>
                            <div className="vip">{ item.vip }</div>
                        </div>
                    </div>
                    <div className="state-contain">
                      <div className="state">{ item.state }</div> 
                    </div>
                  </div>
                <div className="list-title">{ item.title }</div>
                <div className="list-titlea">{ item.text }</div>
            </div>
          </div>
        </div>
      ) 
    } else if (item.typea === 3) {
      return (
        <div className="list-style">
          <div className="list-box">
            <div className="video-list">
              <div className="list-detail">
                <img className="img-2" alt="" src={ item.imgsrc }/>
                <div className="icon">
                  <div className="add-icon">
                    <div className="icon-1">{ item.icon }</div>
                    <div className="vip">{ item.vip }</div>
                  </div>
                </div>
              </div>
              <div className="list-title">{ item.title }</div>
              <div className="list-titlea">{ item.text }</div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="list-stylea">
          <div className="list-box">
              <div className="video-list">
                <div className="list-detail">
                  <img className="img-2" alt="" src={ item.imgsrc }/>
                  <div className="icon">
                      <div className="add-icon">
                          <div className="icon-1">{ item.icon }</div>
                          <div className="vip">{ item.vip }</div>
                      </div>
                  </div>
                </div>
              <div className="list-title">{ item.title }</div>
              <div className="list-titlea">{ item.text }</div>
            </div>
          </div>
        </div>
      )
    }
  }
}


export default ListStyle;
