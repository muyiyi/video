/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-07-30 
 */

import React from 'react'
import './app-swiper.less'
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
import SwiperDetail from '../swiper-detail/swiper-detail';


class AppSwiper extends React.Component {
  /**
   * @desc 不用解释了吧，这是组件的构造函数
   * @param {*} props 
   */
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount(){
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay:{
            delay: 3000,
            disableOnInteraction: false
        },
    });
}

  /**
   * @desc 不用解释了吧，render函数
   */
  render() {
      const swipermenu = this.props.swiper
      let swiperye = swipermenu.map((item, index) => {
          return (
            <div className="swiper-slide" key={ index }>
                <SwiperDetail data={ item }></SwiperDetail>
            </div>
          )
      })
    return (
        <div className="app-swiper">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                   { swiperye }
                </div>
            </div>
        </div>
    );
  }
}


export default AppSwiper;
