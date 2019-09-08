/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-07-30 
 */

import React from 'react'
import './app.less'



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
              <div className="head-btm">
                  <ul className="nav">
                      <li>精选</li>
                      <li>电视剧</li>
                      <li>VIP</li>
                      <li>电影</li>
                      <li>综艺</li>
                      <li>动漫</li>
                      <li>少儿</li>
                      <li>娱乐</li>
                      <li>潮音</li>
                      <li>游戏</li>
                      <li>纪录片</li>
                  </ul>
              </div>
          </div>
          <div className="container">
              <div className="swiper">
                  <div className="img-1"></div>
                  <div className="text-contain">
                      <div className="img-text">【欢喜盈门·首播】与女婿斗智斗勇 潘长江新剧爆笑</div>
                      <div className="img-num">1/3</div>
                  </div>
              </div>
          </div>
          <div className="app-contain">
            <div className="app-list">
                <div className="list-name">猜你在追</div>
                <div className="list-contain">
                    <div className="list-container">
                        <div className="list-detail">
                            <div className="img-2"></div>
                            <div className="icon">
                                <div className="add-icon">
                                    <div className="icon-1">.</div>
                                    <div className="vip">VIP</div>
                                </div>
                            </div>
                            <div className="state-contain">
                                <div className="state">更新至23集</div> 
                            </div>
                        </div>
                        <div className="list-title">陆战之王</div>
                        <div className="list-titlea">陈晓王雷勇争坦克兵王</div>
                    </div>  
                    <div className="list-container">
                        <div className="list-detail">
                            <div className="img-3"></div>
                            <div className="icon">
                                <div className="add-icon">
                                    <div className="icon-1">.</div>
                                    <div className="vip">VIP</div>
                                </div>
                            </div>
                            <div className="state-contain">
                                <div className="state">全40集</div> 
                            </div>
                        </div>
                        <div className="list-title">全职高手</div>
                        <div className="list-titlea">杨洋江疏影共赴荣耀之路</div>
                    </div>  
                </div>
            </div>
            <div className="app-list">
                <div className="list-name">重磅☀篮球世界杯 周琦加练罚球</div>
                <div className="list-contain">
                    <div className="list-container">
                        <div className="list-detail">
                            <div className="img-4"></div>
                            <div className="state-contain">
                                <div className="state">2019-09-06</div> 
                            </div>
                        </div>
                        <div className="list-title">中餐厅3</div>
                        <div className="list-titlea">王俊凯偷拿排骨喂杨紫吃</div>
                    </div>  
                    <div className="list-container">
                        <div className="list-detail">
                            <div className="img-5"></div>
                            <div className="state-contain">
                                <div className="state">2019-09-06</div> 
                            </div>
                        </div>
                        <div className="list-title">好声音·李荣浩看呆</div>
                        <div className="list-titlea">校花COS小乔唱《三国》</div>
                    </div>  
                    <div className="list-container">
                        <div className="list-detail">
                            <div className="img-6"></div>
                        </div>
                        <div className="list-title">汪汪队立大功</div>
                        <div className="list-titlea">跟汪汪队一起玩捉迷藏</div>
                    </div>  
                    <div className="list-container">
                        <div className="list-detail">
                            <div className="img-7"></div>
                            <div className="icon">
                                <div className="add-icon">
                                    <div className="icon-1">.</div>
                                    <div className="vip">VIP</div>
                                </div>
                            </div>
                            <div className="state-contain">
                                <div className="state">更新至68集</div> 
                            </div>
                        </div>
                        <div className="list-title">斗罗大陆·更新啦</div>
                        <div className="list-titlea">上赛场！一分钟内解决对手</div>
                    </div> 
                    <div className="contain-btm"></div>
                    <div className="contain-btm"></div>
                    <div className="contain-btm"></div>
                    <div className="contain-btm"></div>
                </div>
            </div>
          </div>
      </div>
    )
  }
}


export default App;
