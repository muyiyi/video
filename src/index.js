/***************************************************************************************
 * Copyright           : 2019 - 2020
 * FileName            : index.js
 * Author              : Hello 前端俱乐部 https://blog.shuipingguo.com/
 * Version             :
 * Date Of Creation    : 2019/01/01 13:30:00
 * Description         : react 脚手架入口 js
 *                     :
 *                     :
 * Function List       :
 **************************************************************************************/

import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app/app';
import './index.css'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Vip from './components/vip/vip';
import DetailSearch from './components/detail-search/detail-search'
// 路由器
ReactDOM.render(<Router>
                <Route path="/" exact component={ App }></Route>
                <Route path="/vip/" component={ Vip }></Route>
                <Route path="/search" component={ DetailSearch }></Route>
                </Router>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
