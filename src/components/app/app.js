/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-07-30 
 */

import React from 'react'
import './app.less'
import Nav from '../nav/nav'
import VideoNew from '../video-new/video-new'
import VideoGuess from '../video-guess/video-guess';
import VideoPoint from '../video-point/video-point';
import VideoTheatre from '../video-theatre/video-theatre';




class App extends React.Component {
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
    <div className="app">
        <div className="site-head">
            <div className="head-top">
                <div className="head-logo"></div>
                <div className="search-contain">
                    <span className="search-text">陆地之王</span>
                    <div className="search-logo"></div>
                </div>
            </div>
            <Nav></Nav>
        </div>
        <VideoNew></VideoNew>
        <VideoGuess></VideoGuess>
        <VideoPoint></VideoPoint>
        <VideoTheatre></VideoTheatre>
    </div>
    )
  }
}


export default App;
