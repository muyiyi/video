/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-07-30 
 */

import React from 'react'
import './video-point.less'



class VideoPoint extends React.Component {
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
        <div className="video-point">
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
                <div className="list-container">
                    <div className="list-detail">
                        <div className="img-8"></div>
                        <div className="icon">
                            <div className="add-icon">
                                <div className="icon-1">.</div>
                                <div className="vip">自制</div>
                            </div>
                        </div>
                        <div className="state-contain">
                            <div className="state">2019-09-08</div> 
                        </div>
                    </div>
                    <div className="list-title">合唱吧·现场舞姿热辣</div>
                    <div className="list-titlea">火箭少女热曲唱跳串烧超嗨</div>
                </div>  
                <div className="list-container">
                    <div className="list-detail">
                        <div className="img-9"></div>
                        <div className="icon">
                            <div className="add-icon">
                                <div className="icon-1">.</div>
                                <div className="vip">自制</div>
                            </div>
                        </div>
                    </div>
                    <div className="list-title">超级小熊布迷</div>
                    <div className="list-titlea">未来装甲坦克大作战</div>
                </div>  
                <div className="contain-btm">
                    <div className="img-10"></div>
                    <div className="list-change">换一换</div>
                </div>
            </div>
        </div>
    )
  }
}



export default VideoPoint;
