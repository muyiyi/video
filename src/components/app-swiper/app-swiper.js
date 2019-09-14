/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-07-30 
 */

import React from 'react'
import './app-swiper.less'
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';


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
        loop: true,//这里是自动轮播
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
    return (
        <div className="app-swiper">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="img-1"></div>
                        <div className="icon">
                            <div className="add-icon">
                                <div className="icon-1">.</div>
                                <div className="vip">VIP</div>
                            </div>
                        </div>
                        <div className="state-contain">
                            <div className="state">更新至29集</div> 
                        </div>
                        <div className="text-contain">
                            <div className="img-text">【陆战之王·更新】兵王铁树开花车站硬核告白</div>
                            <div className="img-num">1/5</div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="img-3"></div>
                        <div className="icon">
                            <div className="add-icon">
                                <div className="icon-1">.</div>
                                <div className="vip">VIP</div>
                            </div>
                        </div>
                        <div className="state-contain">
                            <div className="state">更新至30集</div> 
                        </div>
                        <div className="text-contain">
                            <div className="img-text">【老酒馆】正主上线！陈怀海背媳妇回家</div>
                            <div className="img-num">2/5</div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="img-4"></div>
                        <div className="icon">
                            <div className="add-icon">
                                <div className="icon-1">.</div>
                                <div className="vip">VIP</div>
                            </div>
                        </div>
                        <div className="state-contain">
                            <div className="state">更新至20集</div> 
                        </div>
                        <div className="text-contain">
                            <div className="img-text">【极限17·滑魂】季杨杨恋爱了？迷上滑板女孩</div>
                            <div className="img-num">3/5</div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="img-5"></div>
                        <div className="icon">
                            <div className="add-icon">
                                <div className="icon-1">.</div>
                                <div className="vip">VIP</div>
                            </div>
                        </div>
                        <div className="state-contain">
                            <div className="state">更新至21集</div> 
                        </div>
                        <div className="text-contain">
                            <div className="img-text">【柴小七】外星女孩告白地球霸总：我喜欢你！</div>
                            <div className="img-num">4/5</div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="img-6"></div>
                        <div className="icon">
                            <div className="add-icon">
                                <div className="icon-1">.</div>
                                <div className="vip">VIP</div>
                            </div>
                        </div>
                        <div className="state-contain">
                            <div className="state">更新至09集</div> 
                        </div>
                        <div className="text-contain">
                            <div className="img-text">【斗破苍穹3·更新】萧炎实力碾压大斗师墨冉</div>
                            <div className="img-num">5/5</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}


export default AppSwiper;
