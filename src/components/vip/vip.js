/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-09-22 
 */

import React from 'react'
import './vip.less'
import NavList from '../nav-list/nav-list'
import VipItem from '../vip-item/vip-item'


class Vip extends React.Component {
  /**
   * @desc 不用解释了吧，这是组件的构造函数
   * @param {*} props 
   */
  constructor(props) {
    super(props)

    this.state = {
      navmenu: [
        {
          title: '',
          icon: '',
          list: ['电视剧', '电影', '动漫', '综艺', '少儿', '纪录片', '音乐', '知识']
        },
        {
          title: '',
          icon: '',
          list: ['最新', '最热', '好评']
        },
        {
          title: '',
          icon: '',
          list: ['全部', '独播', '院线', '动作', '冒险', '喜剧', '爱情', '战争', '恐怖', '犯罪', '悬疑', '惊悚', '武侠', '科幻', '音乐', '歌舞', '动画', '奇幻', '家庭', '剧情',  '伦理', '记录', '历史', '传记']
        },
        {
          title: '',
          icon: '',
          list: ['全部', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000', '90年代', '80年代', '其他']
        },
        {
          title: '',
          icon: '',
          list: ['全部', '欧美', '华语', '日韩', '泰国', '印度', '其他']
        },
        {
          title: '',
          icon: '',
          list: ['全部', '奥斯卡', '高分小众', '电影节', '系列']
        },
      ],
      itemmenu: [
        {
          title: '鼠胆英雄',
          icon: 'https://i.gtimg.cn/qqlive/images/20190528/VIP.png',
          list: '',
          img: 'https://puui.qpic.cn/vcover_vt_pic/0/6101d0cbs6uqeee1567429557/220'
        },
        {
          title: '《诛仙1》独家纪录片',
          icon: 'https://i.gtimg.cn/qqlive/images/20190528/VIP.png',
          list: '',
          img: 'https://puui.qpic.cn/vcover_vt_pic/0/mzc00200nob2x7o1568170070/220'
        },
        {
          title: '蜘蛛侠：英雄远征',
          icon: 'https://i.gtimg.cn/qqlive/images/20190528/pay.png',
          list: '',
          img: 'https://puui.qpic.cn/vcover_vt_pic/0/96sxjj429lictza1568257326/220'
        },
        {
          title: '赛尔号大电影7:疯狂机器城',
          icon: 'https://i.gtimg.cn/qqlive/images/20190528/VIP.png',
          list: '',
          img: 'https://puui.qpic.cn/vcover_vt_pic/0/q32hs5nrt4c5onv1568720442/220'
        },
        {
          title: '天剑修仙传',
          icon: 'https://i.gtimg.cn/qqlive/images/20160715/only@2x.png',
          list: '',
          img: 'https://puui.qpic.cn/vcover_vt_pic/0/mzc00200u7k9anz1567500250/220'
        },
        {
          title: '灰猴',
          icon: 'https://i.gtimg.cn/qqlive/images/20190528/VIP.png',
          list: '',
          img: 'https://puui.qpic.cn/vcover_vt_pic/0/by3fuyi0trtohda1556417121/220'
        },
        {
          title: '扫毒2天地对决',
          icon: 'https://i.gtimg.cn/qqlive/images/20190528/VIP.png',
          list: '',
          img: 'https://puui.qpic.cn/vcover_vt_pic/0/msv7eyf5zv6bqij1566185899/220'
        },
        {
          title: '比悲伤更悲伤的故事',
          icon: 'https://i.gtimg.cn/qqlive/images/20190528/VIP.png',
          list: '',
          img: 'https://puui.qpic.cn/vcover_vt_pic/0/bok67qa8snhlg0b1557994090/220'
        },
        {
          title: '洪熙官之天地英雄',
          icon: 'https://i.gtimg.cn/qqlive/images/20160715/only@2x.png',
          list: '',
          img: 'https://puui.qpic.cn/vcover_vt_pic/0/q53es4buzycdpdf1568778416/220'
        },
      ]
    }
  }


  /**
   * @desc 不用解释了吧，render函数
   */
  render() {
    return (
      <div>
        <div className="search-head">
          <input className="text" value="鼠胆英雄" />
          <div className="icon"></div>
        </div>
        <NavList data={ this.state.navmenu }></NavList>
        <VipItem data={ this.state.itemmenu }></VipItem>
      </div>
    )
  }
}


export default Vip;
