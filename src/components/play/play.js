/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-09-28
 */

import React from 'react'
import './play.less'
import PlayList from '../play-list/play-list';


class Play extends React.Component {
  /**
   * @desc 不用解释了吧，这是组件的构造函数
   * @param {*} props 
   */
  constructor(props) {
    super(props)

    this.state = {
      menu: [
        {
          type: 3,
          title: '往期栏目',
          list: [
            {
              img: 'https://puui.qpic.cn/vcover_hz_pic/0/mzc00200mjuzyg31569484302/0',
              number: '2019-09-27',
              name: '杨紫用明言明语怼大厨笑',
              url: ''
            },
            {
              img: 'https://puui.qpic.cn/vcover_hz_pic/0/mzc002008ni5kh71568886781/0',
              number: '2019-09-20',
              name: '杨紫当经理扣黄晓明工资',
              url: ''
            },
            {
              img: 'https://puui.qpic.cn/vcover_hz_pic/0/mzc00200q26aewi1567674770/0',
              number: '2019-09-13',
              name: '黄晓明遭杨紫秦海璐内涵',
              url: ''
            }
          ]
        },
        {
          type: 5,
          title: '2019-09-27',
          list: [
            {
              img: '',
              number: '',
              name: '第10期：餐厅“悬案”频发，谁动了杨紫的珍珠？',
              url: ''
            },
            {
              img: '',
              number: '',
              name: '黄晓明杨紫前台互夸，店长被夸到脸红',
              url: ''
            },
            {
              img: '',
              number: '',
              name: '杨紫发问黄晓明怎么在娱乐圈混，店长分享“傻人有傻福”',
              url: ''
            }
          ]
        },
        {
          type: 3,
          title: '片花',
          list: [
            {
              img: 'https://puui.qpic.cn/qqvideo_ori/0/s3001beuzth_496_280/0',
              number: '1分38秒',
              name: '这节目太下饭！中餐厅大型吃播合辑，好吃到停不下来！',
              url: ''
            },
            {
              img: 'https://puui.qpic.cn/qqvideo_ori/0/l0032mt32bz_496_280/0',
              number: '29秒',
              name: '当黄晓明遇上赵薇，狂怼不停太魔性',
              url: ''
            },
            {
              img: 'https://puui.qpic.cn/qqvideo_ori/0/i0032k7el2t_496_280/0',
              number: '4分9秒',
              name: '【花絮】杨紫黄晓明路边发名片，花式揽客太敬业！',
              url: ''
            }
          ]
        },
      ]
    }
  }

  
  /**
   * @desc 不用解释了吧，render函数
   */
  render() {
    console.log(this.props.location.query)

    return (
      <div className="play">
        <div className="play-head">
          <div className="logo">
            <div className="img">
            </div>
          </div>
          <div className="head-descr"></div>
        </div>
        <div className="play-click">
          <div className="img-1"></div>
          <video controls>
            <source src="menu.mp4" type="video/mp4"/>
            <div className="click"></div>
          </video>
        </div>
        <div className="play-detail">
          <div className="detail-box">
            <div className="logo-1">
              <div className="img-2"></div>
              <div className="text">看更多热门短视频</div>
            </div>
            <div className="btn">打开</div>
          </div>  
        </div>
        <div className="play-intro">
          <div className="intro-box">
            <div className="intro-top">
              <div className="title">中餐厅 第3系</div>
              <div className="function">
                <div className="favor">
                  <div className="img-3"></div>
                </div>
                <div className="load">
                  <div className="img-4"></div>
                </div>
              </div>
            </div>
            <div className="intro-sum">真人秀</div>
          </div> 
          <div className="play-vip">VIP首月12元，定制片单赢智能机器人大奖</div>
        </div>
        <PlayList data={ this.state.menu }></PlayList>
        <div className="btn"></div>
      </div>
    )   
  }
}


export default Play;
