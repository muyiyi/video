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
    const videomenu = [
        {
            imgsrc: 'http://puui.qpic.cn/tv/0/263428863_1080607/0',
            title: '【欢喜盈门·首播】与女婿斗智斗勇 潘长江新剧爆笑',
            comment: '1/3',
            type: '1'
        },
        {
            imgsrc: 'http://puui.qpic.cn/vcover_hz_pic/0/mzc0020022o8qha1566265129/0',
            title: '陆战之王',
            text: '陈晓王雷勇争坦克兵王',
            icon: '.',
            vip: 'VIP',
            state: '更新至23集',
            type: 2
        },
        {
            imgsrc: 'http://puui.qpic.cn/vcover_hz_pic/0/xpu952oo5tr9yzl1563933188/0',
            title: '全职高手',
            text: '杨洋江疏影共赴荣耀之路',
            icon: '.',
            vip: 'VIP',
            state: '全40集',
            type: 2
        },
        {
            imgsrc: 'http://puui.qpic.cn/tv/0/264784547_498280/0',
            title: '中餐厅3',
            text: '王俊凯偷拿排骨喂杨紫吃',
            state: '2019-09-06',
            type: 3
        },
        {
            imgsrc: 'http://puui.qpic.cn/tv/0/262600316_498280/0',
            title: '好声音·李荣浩看呆',
            text: '校花COS小乔唱《三国》',
            state: '2019-09-06',
            type: 3
        },
        {
            imgsrc: 'http://puui.qpic.cn/tv/0/249687444_498280/0',
            title: '汪汪队立大功',
            text: '跟汪汪队一起玩捉迷藏',
            type: 3
        },
        {
            imgsrc: 'http://puui.qpic.cn/tv/0/262501412_498280/0', 
            title: '全职高手斗罗大陆·更新啦',
            text: '上赛场！一分钟内解决对手',
            icon: '.',
            vip: 'VIP',
            state: '更新至68集',
            type: 3
        },
        {
            imgsrc: 'http://puui.qpic.cn/tv/0/265386130_1080607/0', 
            title: '老酒馆［会员抢先看］',
            text: '小晴天以身相许陈怀海',
            icon: '.',
            vip: 'VIP',
            state: '更新至26集',
            type: 4
        },
        {
            imgsrc: 'http://puui.qpic.cn/tv/0/265991704_498280/0', 
            title: '老酒馆［会员抢先看］',
            text: '小晴天以身相许陈怀海',
            icon: '.',
            vip: 'VIP',
            state: '更新至26集',
            type: 4
        },
        {
            imgsrc: 'http://puui.qpic.cn/tv/0/263654926_498280/0', 
            title: '走进记忆［会员先看］',
            text: '安好夫妇竟要生个足球队',
            icon: '.',
            vip: 'VIP',
            state: '更新至16集',
            type: 4
        },
        {
            imgsrc: 'http://puui.qpic.cn/tv/0/261721651_498280/0', 
            title: '全职高手',
            text: '逆转！兴欣夺冠大翻盘',
            icon: '.',
            vip: 'VIP',
            state: '全40集',
            type: 4
        },
        {
            imgsrc: 'http://puui.qpic.cn/tv/0/261726583_498280/0', 
            title: '遇见幸福',
            text: '亲子问题压垮中年人',
            icon: '.',
            vip: 'VIP',
            state: '更新至24集',
            type: 4
        },
        {
            imgsrc: 'http://puui.qpic.cn/tv/0/266858173_498280/0', 
            title: '柴小七［爽更4集］',
            text: '失忆霸总再次爱上小七',
            icon: '.',
            vip: 'VIP',
            state: '更新至20集',
            type: 4
        },
        {
            imgsrc: 'http://puui.qpic.cn/tv/0/265386188_498280/0', 
            title: '平行世界［21:15首播］',
            text: '小水Baifern脸上撕漫男',
            icon: '.',
            vip: '预告片',
            state: '更新至20集',
            type: 4
        },
      ];
      let videolie = videomenu.map((item, index) => {
        return (
          <div key={ index } >
            <AppStyle data={ item }></AppStyle>
          </div>
        ) 
      })

      
    return (
        <div className="app-video">
            <div className="video-boxa">
                <div className="img-1"></div>
                <div className="text-contain">
                    <div className="img-text">【欢喜盈门·首播】与女婿斗智斗勇 潘长江新剧爆笑</div>
                    <div className="img-num">1/3</div>
                </div>
            </div>
            <div className="video-box">
                <div className="video-name">猜你在追</div>
                <div className="list-box">
                    { videolie }
                </div>         
            </div>
            <div className="video-box">
                <div className="video-name">重磅☀篮球世界杯 周琦加练罚球</div>
                <div className="list-box">
                    <div className="video-list">
                        <div className="list-detail">
                            <div className="img-4"></div>
                            <div className="state-contain">
                                <div className="state">2019-09-06</div> 
                            </div>
                        </div>
                        <div className="list-title">中餐厅3</div>
                        <div className="list-titlea">王俊凯偷拿排骨喂杨紫吃</div>
                    </div>
                    <div className="video-list">
                        <div className="list-detail">
                            <div className="img-5"></div>
                            <div className="state-contain">
                                <div className="state">2019-09-06</div> 
                            </div>
                        </div>
                        <div className="list-title">好声音·李荣浩看呆</div>
                        <div className="list-titlea">校花COS小乔唱《三国》</div>
                    </div>
                    <div className="video-list">
                        <div className="list-detail">
                            <div className="img-6"></div>
                        </div>
                        <div className="list-title">汪汪队立大功</div>
                        <div className="list-titlea">跟汪汪队一起玩捉迷藏</div>
                    </div>
                    <div className="video-list">
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
                        <div className="list-title">全职高手斗罗大陆·更新啦</div>
                        <div className="list-titlea">上赛场！一分钟内解决对手</div>
                    </div>
                    <div className="video-list">
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
                    <div className="video-list">
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
                </div>  
                <div className="list-btm">
                    <div className="img-10"></div>
                    <div className="list-change">换一换</div>
                </div>       
            </div>
            <div className="video-box">
                <div className="video-name">同步剧场</div>
                <div className="list-box">
                    <div className="video-listmax">
                        <div className="list-detail">
                            <div className="img-17"></div>
                            <div className="icon">
                                <div className="add-icon">
                                    <div className="icon-1">.</div>
                                    <div className="vip">VIP</div>
                                </div>
                            </div>
                            <div className="state-contain">
                                <div className="state">更新至26集</div> 
                            </div>
                        </div>
                        <div className="list-title">老酒馆［会员抢先看］</div>
                        <div className="list-titlea">小晴天以身相许陈怀海</div>
                    </div>
                    <div className="video-list">
                        <div className="list-detail">
                            <div className="img-11"></div>
                            <div className="icon">
                                <div className="add-icon">
                                    <div className="icon-1">.</div>
                                    <div className="vip">VIP</div>
                                </div>
                            </div>
                            <div className="state-contain">
                                <div className="state">更新至26集</div> 
                            </div>
                        </div>
                        <div className="list-title">老酒馆［会员抢先看］</div>
                        <div className="list-titlea">小晴天以身相许陈怀海</div>
                    </div>
                    <div className="video-list">
                        <div className="list-detail">
                            <div className="img-12"></div>
                            <div className="icon">
                                <div className="add-icon">
                                    <div className="icon-1">.</div>
                                    <div className="vip">VIP</div>
                                </div>
                            </div>
                            <div className="state-contain">
                                <div className="state">更新至16集</div> 
                            </div>
                        </div>
                        <div className="list-title">走进记忆［会员先看］</div>
                        <div className="list-titlea">安好夫妇竟要生个足球队</div>
                    </div>
                    <div className="video-list">
                        <div className="list-detail">
                            <div className="img-13"></div>
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
                        <div className="list-titlea">逆转！兴欣夺冠大翻盘</div>
                    </div>  
                    <div className="video-list">
                        <div className="list-detail">
                            <div className="img-14"></div>
                            <div className="icon">
                                <div className="add-icon">
                                    <div className="icon-1">.</div>
                                    <div className="vip">VIP</div>
                                </div>
                            </div>
                            <div className="state-contain">
                                <div className="state">更新至24集</div> 
                            </div>
                        </div>
                        <div className="list-title">遇见幸福</div>
                        <div className="list-titlea">亲子问题压垮中年人</div>
                    </div> 
                    <div className="video-list">
                        <div className="list-detail">
                            <div className="img-15"></div>
                            <div className="icon">
                                <div className="add-icon">
                                    <div className="icon-1">.</div>
                                    <div className="vip">VIP</div>
                                </div>
                            </div>
                            <div className="state-contain">
                                <div className="state">更新至20集</div> 
                            </div>
                        </div>
                        <div className="list-title">柴小七［爽更4集］</div>
                        <div className="list-titlea">失忆霸总再次爱上小七</div>
                    </div>  
                    <div className="video-list">
                        <div className="list-detail">
                            <div className="img-16"></div>
                            <div className="icon">
                                <div className="add-icon">
                                    <div className="icon-1">.</div>
                                    <div className="vip">预告片</div>
                                </div>
                            </div>
                        </div>
                        <div className="list-title">平行世界［21:15首播］</div>
                        <div className="list-titlea">小水Baifern脸上撕漫男</div>
                    </div>
                </div>  
                <div className="list-btm">
                    <div className="img-10"></div>
                    <div className="list-change">换一换</div>
                </div>       
            </div>
        </div>
    )
  }
}


export default AppVideo;
