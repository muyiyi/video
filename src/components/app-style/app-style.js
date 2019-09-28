/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-07-30 
 */

import React from 'react'
import './app-style.less'
import ListStyle from '../list-style/list-style';
import classnames from 'classnames'


class AppStyle extends React.Component {
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
    let data = this.props.data;
    const video = data.list.map((item, index) => {
      return (
        <div className="transmit"  key={ index }>
          <ListStyle item={ item }></ListStyle>
        </div>
      )
    });

    return (
      <div className="video-contain">
        <div className={ classnames({'videomenu': data.type === 2 }, {'videomenua': data.type === 3 }, {'videomenua': data.type === 5 }  )} >{ data.title }</div>
        <div className={ classnames('box', {'boxa': data.type === 4 }, {'boxb': data.type === 2}, {'boxb': data.type === 3}, {'boxc': data.type === 5}  )} >{ video }</div>
        <div className={ classnames('list-btm', {'list-btma': data.type === 2 }, {'list-btma': data.type === 3 } )}>
          <img className="img-10" alt="" src={ data.imgsrc }/>
          <div className="list-change">{ data.btm }</div>
        </div> 
      </div>
    )
  }
}


export default AppStyle;
