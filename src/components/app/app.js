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


class App extends React.Component {
  /**
   * @desc 不用解释了吧，这是组件的构造函数
   * @param {*} props 
   */
  constructor(props) {
    super(props)

    this.state = {
      menu: ['精选', '电视剧', 'VIP', '电影', '综艺', '动漫', '少儿', '娱乐', '潮音', '游戏', '纪录片'],
      videomenu: [
        {
          nav: '',
          type: 1,
          btm: '',
          imgsrc: '',
          list: [
            {
              imgsrc: 'http://puui.qpic.cn/tv/0/268981778_1080607/0',
              icon: '.',
              vip: 'VIP',
              state: '更新至29集',
              title: '【陆战之王·更新】兵王铁树开花车站硬核告白',
              num: '1/5'
            },
            {
              imgsrc: 'http://puui.qpic.cn/tv/0/268834759_1080607/0',
              icon: '.',
              vip: 'VIP',
              state: '更新至30集',
              title: '【老酒馆】正主上线！陈怀海背媳妇回家',
              num: '2/5'
            },
            {
              imgsrc: 'http://puui.qpic.cn/tv/0/270520589_1080607/0',
              icon: '.',
              vip: 'VIP',
              state: '更新至20集',
              title: '【极限17·滑魂】季杨杨恋爱了？迷上滑板女孩',
              num: '3/5'
            },
            {
              imgsrc: 'http://puui.qpic.cn/tv/0/268739120_1080607/0',
              icon: '.',
              vip: 'VIP',
              state: '更新至21集',
              title: '【柴小七】外星女孩告白地球霸总：我喜欢你！',
              num: '4/5'
            },
            {
              imgsrc: 'http://puui.qpic.cn/tv/0/264282330_1080607/0',
              icon: '.',
              vip: 'VIP',
              state: '更新至09集',
              title: '【斗破苍穹3·更新】萧炎实力碾压大斗师墨冉',
              num: '5/5'
            },
          ],          
        },
        {
          nav: '猜你在追',
          type: 2,
          btm: '',
          imgsrc: '',
          list: [
            {
              imgsrc: 'http://puui.qpic.cn/vcover_hz_pic/0/mzc0020022o8qha1566265129/0',
              title: '陆战之王',
              text: '陈晓王雷勇争坦克兵王',
              icon: '.',
              vip: 'VIP',
              state: '更新至23集',
              videosrc: '',
              typea: 2
            },
            {
              imgsrc: 'http://puui.qpic.cn/vcover_hz_pic/0/xpu952oo5tr9yzl1563933188/0',
              title: '全职高手',
              text: '杨洋江疏影共赴荣耀之路',
              icon: '.',
              vip: 'VIP',
              state: '全40集',
              videosrc: '',
              typea: 2
            },
            {
              imgsrc: 'http://puui.qpic.cn/vcover_hz_pic/0/mzc00200p7xx7v71567482106/0',
              title: '欢喜盈门',
              text: '潘长江与女婿携手致富农村',
              icon: '',
              vip: '',
              state: '更新至13集',
              videosrc: '',
              typea: 2
            },
            {
              imgsrc: 'http://puui.qpic.cn/vcover_hz_pic/0/eeixvklu2ybolhu1566291516/0',
              title: '走进你的记忆',
              text: '舅舅撩妹开窍脱单记',
              icon: '.',
              vip: 'VIP',
              state: '更新至20集',
              videosrc: '',
              typea: 2
            },
            {
              imgsrc: 'http://puui.qpic.cn/vcover_hz_pic/0/8l8dpqzvij9kza31568083034/0',
              title: '亲·爱的味道',
              text: '陆毅郭采洁美食情缘',
              icon: '.',
              vip: 'VIP',
              state: '更新至08集',
              videosrc: '',
              typea: 2
            },
            {
              imgsrc: 'http://puui.qpic.cn/vcover_hz_pic/0/ez00dy0uu12rc4j1564020270/0',
              title: '小欢喜',
              text: '黄磊海清携手带娃备战高考',
              icon: '.',
              vip: 'VIP',
              state: '全49集',
              videosrc: '',
              typea: 2
            },
          ],          
        },
        {
          nav: '重磅☀篮球世界杯 周琦加练罚球',
          type: 3,
          btm: '换一换',
          imgsrc: 'https://www.baidu.com/aladdin/tpl/right_toplist1/refresh.png',
          list: [
            {
              imgsrc: 'http://puui.qpic.cn/tv/0/264784547_498280/0',
              title: '中餐厅3',
              text: '王俊凯偷拿排骨喂杨紫吃',
              icon: '',
              vip: '',
              state: '2019-09-06',
              videosrc: '',
              typea: 3
            },
            {
              imgsrc: 'http://puui.qpic.cn/tv/0/262600316_498280/0',
              title: '好声音·李荣浩看呆',
              text: '校花COS小乔唱《三国》',
              icon: '',
              vip: '',
              state: '2019-09-06',
              videosrc: '',
              typea: 3
            },
            {
              imgsrc: 'http://puui.qpic.cn/tv/0/249687444_498280/0',
              title: '汪汪队立大功',
              text: '跟汪汪队一起玩捉迷藏',
              icon: '',
              vip: '',
              state: '',
              videosrc: '',
              typea: 3
            },
            {
              imgsrc: 'http://puui.qpic.cn/tv/0/262501412_498280/0', 
              title: '全职高手斗罗大陆·更新啦',
              text: '上赛场！一分钟内解决对手',
              icon: '.',
              vip: 'VIP',
              state: '更新至68集',
              videosrc: '',
              typea: 3
            },
            {
              imgsrc: 'http://puui.qpic.cn/tv/0/265931064_498280/0', 
              title: '合唱吧·现场舞姿热辣',
              text: '火箭少女热曲唱跳串烧超嗨',
              icon: '.',
              vip: '自制',
              state: '2019-09-08',
              videosrc: '',
              typea: 3
            },
            {
              imgsrc: 'http://puui.qpic.cn/tv/0/246362888_498280/0', 
              title: '超级小熊布迷',
              text: '未来装甲坦克大作战',
              icon: '.',
              vip: '自制',
              state: '',
              videosrc: '',
              typea: 3
            },
          ],          
        },
        {
          nav: '同步剧场',
          type: 4,
          btm: '换一换',
          imgsrc: 'https://www.baidu.com/aladdin/tpl/right_toplist1/refresh.png',
          list: [
            {
              imgsrc: 'http://puui.qpic.cn/tv/0/265386130_1080607/0', 
              title: '陆战之王［会员抢先看］',
              text: '坦克之王争霸',
              icon: '.',
              vip: 'VIP',
              state: '更新至26集',
              videosrc: '',
            },
            {
              imgsrc: 'http://puui.qpic.cn/tv/0/265991704_498280/0', 
              title: '老酒馆［会员抢先看］',
              text: '小晴天以身相许陈怀海',
              icon: '.',
              vip: 'VIP',
              state: '更新至26集',
              videosrc: '',
            },
            {
              imgsrc: 'http://puui.qpic.cn/tv/0/263654926_498280/0', 
              title: '走进记忆［会员先看］',
              text: '安好夫妇竟要生个足球队',
              icon: '.',
              vip: 'VIP',
              state: '更新至16集',
              videosrc: '',
            },
            {
              imgsrc: 'http://puui.qpic.cn/tv/0/261721651_498280/0', 
              title: '全职高手',
              text: '逆转！兴欣夺冠大翻盘',
              icon: '.',
              vip: 'VIP',
              state: '全40集',
              videosrc: '',
            },
            {
              imgsrc: 'http://puui.qpic.cn/tv/0/261726583_498280/0', 
              title: '遇见幸福',
              text: '亲子问题压垮中年人',
              icon: '.',
              vip: 'VIP',
              state: '更新至24集',
              videosrc: '',
            },
            {
              imgsrc: 'http://puui.qpic.cn/tv/0/266858173_498280/0', 
              title: '柴小七［爽更4集］',
              text: '失忆霸总再次爱上小七',
              icon: '.',
              vip: 'VIP',
              state: '更新至20集',
              videosrc: '',
            },
            {
              imgsrc: 'http://puui.qpic.cn/tv/0/265386188_498280/0', 
              title: '平行世界［21:15首播］',
              text: '小水Baifern脸上撕漫男',
              icon: '.',
              vip: '预告片',
              state: '更新至20集',
              videosrc: '',
            },
          ],          
        },
      ],
    }
  }

  change = () => {
    this.setState()
  } 

  /**
   * @desc 不用解释了吧，render函数
   */
  render() {
    return (
    <div className="app">
      <AppHead></AppHead>
      <AppNav nav={ this.state.menu } listchange={ this.change }></AppNav>
      <AppVideo video={ this.state.videomenu }></AppVideo>
    </div>
    )
  }
}


export default App;
