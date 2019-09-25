/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-09-24
 */

import React from 'react'
import './detail-search.less'
import Nav from '../nav/nav';
import DownMenu from '../down-menu/down-menu';


class DetailSearch extends React.Component {
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
    return (
      <div className="detail-search">
        <div className="head">
          <div className="icon">
            <img className="img"/>
          </div>
          <div className="box">
            <div className="text-box">
              <span className="text">在远方</span>
              <div className="icon-1">
                <img className="img-1"/>
              </div>
            </div>
          </div> 
          <div className="return">返回</div>
        </div>
        <Nav></Nav>
        <DownMenu></DownMenu>
      </div>
    )   
  }
}


export default DetailSearch;
