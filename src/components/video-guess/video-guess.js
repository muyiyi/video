/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-07-30 
 */

import React from 'react'
import './video-guess.less'
import VideoStyle from '../video-style/video-style';



class VideoGuess extends React.Component {
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
      const menu = [
        { 
            imgsrc: 'http://puui.qpic.cn/vcover_hz_pic/0/mzc0020022o8qha1566265129/0',
            state: '更新至23集',
            title: '陆战之王',
            text: '陈晓王雷勇争坦克兵王',
            vip: 'VIP',
            icon: '.',
            type: 1
        },
        { 
            imgsrc: 'http://puui.qpic.cn/vcover_hz_pic/0/xpu952oo5tr9yzl1563933188/0',
            state: '全40集',
            title: '全职高手',
            text: '杨洋江疏影共赴荣耀之路',
            vip: 'VIP',
            icon: '.',
            type: 1
        }
      ]

      let menulie = menu.map((item, index) => {
          return (
            <div key={ index }>
                <VideoStyle data={ item }></VideoStyle>
            </div>
          )
      })

    return (
        <div className="video-guess">
            <div className="list-name">猜你在追</div>
            <div className="list-contain">
                { menulie }
            </div>
        </div>
    )
  }
}



export default VideoGuess;
