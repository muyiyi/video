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
import HttpClient from '../../api/http-client'


class App extends React.Component {
  /**
   * @desc 不用解释了吧，这是组件的构造函数
   * @param {*} props 
   */
  constructor(props) {
    super(props)

    this.state = {
      menu: [
        {
          name: '精选',
          type: '',
        } ,
        {
          name: '电视剧',
          type: '2',
        } ,
        {
          name: 'VIP',
          type: ''
        } ,
        {
          name: '电影',
          type: '1'
        } , 
        {
          name: '综艺',
          type: '3'
        } , 
        {
          name: '动漫',
          type: '4'
        } ,
        {
          name: '少儿',
          type: ''
        } , 
        {
          name: '娱乐',
          type: '5'
        } ,
        {
          name: '潮音',
          type: ''
        } ,
        {
          name: '游戏',
          type: ''
        } , 
        {
          name: '纪录',
          type: ''
        } 
      ],
      videomenu: []
    }
  }

  change = (type) => {
    console.log()
    HttpClient.getList( { params: {type: type}, callback: ( ac ) => { 
      console.log(ac)
      this.setState({ videomenu: ac.data.data }) } } );
  } 


  componentDidMount() {
    HttpClient.getList( { params: {}, callback: ( ace ) => { 
      this.setState({ videomenu: ace.data.data }) } } );
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
