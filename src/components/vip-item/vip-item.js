/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-09-22 
 */

import React from 'react'
import './vip-item.less'
import Abc from '../abc/abc'


class VipItem extends React.Component {
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
    const itemmenu= [
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
    let itemlie = itemmenu.map((item, index) => {
      return (
        <div className="item-box">
          <Abc data= { item }></Abc>
        </div>
      )
    })

    return (
      <div>
        <div className="list-box">
          <div className="vip-list">
            <ul className="item-list">
              { itemlie }
            </ul>
          </div>
        </div>        
      </div>
    )
  }
}


export default VipItem;
