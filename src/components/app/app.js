/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-07-30 
 */

import React from 'react'
import './app.less'
import AppNav from '../app-nav/app-nav'
import AppHead from '../app-head/app-head';
import AppVideo from '../app-video/app-video';
import Gundong from '../gundong/gundong';
import AppSwiper from '../app-swiper/app-swiper';


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
      <AppHead></AppHead>
      <AppNav></AppNav>
      <AppSwiper></AppSwiper>
      <AppVideo></AppVideo>
    </div>
    )
  }
}


export default App;
