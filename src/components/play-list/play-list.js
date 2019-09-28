/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-09-28
 */

import React from 'react'
import './play-list.less'
import PlayOwn from '../play-own/play-own';
import AppStyle from '../app-style/app-style';


class PlayList extends React.Component {
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
    const menu = this.props.data
      let menulie = menu.map((item, index) => {
        return (
        <div className="play-ye" key={ index } >
          <AppStyle data={ item }></AppStyle>
        </div>
        ) 
      })


    return (
      <div className="play-list">
        <div className="list-box">
          { menulie }     
        </div>
      </div>
    )   
  }
}


export default PlayList;
