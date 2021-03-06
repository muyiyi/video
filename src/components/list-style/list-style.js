/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-07-30 
 */

import React from 'react'
import './list-style.less'
import 'swiper/dist/css/swiper.min.css'
import { Link } from 'react-router-dom/cjs/react-router-dom';
import classnames from 'classnames'


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
    console.log(item)
    return (
      <div className="list-style">
        <Link to={ {pathname: "/detail", query: { url: item.name }} }>
          <a href={ item.url }>
          <div className="list-box">
            <div className="video-list">
              <div className="list-detail">
                <img className="img-2" alt="" src={ item.img }/>
                <div className="icon">
                    <div className="add-icon">
                        <div className="icon-1">{ item.icon }</div>
                    </div>
                </div>
                <div className="state-contain" >
                  <div className="state">{ item.number }</div> 
                </div>
              </div>
              <div className="list-title">{ item.name }</div>
              <div className="list-titlea">{ item.summary }</div>
            </div>
          </div>
          </a>   
        </Link>
      </div>
    ) 
  }
}


export default ListStyle;
