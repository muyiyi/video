/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-07-30 
 */

import React from 'react'
import './video-new.less'



class VideoNew extends React.Component {
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
        <div className="video-new">
            <div className="swiper">
                <div className="img-1"></div>
                <div className="text-contain">
                    <div className="img-text">【欢喜盈门·首播】与女婿斗智斗勇 潘长江新剧爆笑</div>
                    <div className="img-num">1/3</div>
                </div>
            </div>
        </div>
    )
  }
}



export default VideoNew;
