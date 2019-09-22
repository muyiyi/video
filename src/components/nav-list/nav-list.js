/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-09-22 
 */

import React from 'react'
import './nav-list.less'
import NavStyle from '../nav-style/nav-style'

class NavList extends React.Component {
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
    const navmenu= [
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
    ]
    let navlist = navmenu.map((item, index) => {
      return (
      <li key={ index } className="item-box">
        <NavStyle data={ item.list }></NavStyle>
      </li>
      )
    })

    return (
      <div className="nav-list">
        <div className="search-nav">
          <div className="show-border">
            <ul className="show-list">
              { navlist }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}


export default NavList;
