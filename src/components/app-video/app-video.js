/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-07-30 
 */

import React from 'react'
import './app-video.less'
import AppStyle from '../app-style/app-style';


class AppVideo extends React.Component {
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
    const videomenu = this.props.video
      let videolie = videomenu.map((item, index) => {
        return (
          <div key={ index } >
            <AppStyle data={ item }></AppStyle>
          </div>
        ) 
      })

      
    return (
        <div className="app-video">
            <div className="video-box">
                { videolie }     
            </div>
        </div>
    )
  }
}


export default AppVideo;
