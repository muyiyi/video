/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-07-30 
 */

import React from 'react'
import './video-style.less'



class VideoStyle extends React.Component {
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
    if (item.type === 1) {
        return (
            <div className="list-container">
                <div className="list-detail">
                    <img className="img2" alt="" src={ item.imgsrc }/>
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
        )
    }
  }
}



export default VideoStyle;
