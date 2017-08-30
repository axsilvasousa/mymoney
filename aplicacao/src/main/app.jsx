import '../common/template/dependencies'
import React from 'react'
import {conect} from 'react-redux'

import Header from '../common/template/header'
import Sidebar from '../common/template/sidebar'
import Footer from '../common/template/footer'
import Messages from '../common/msg/messages'
import Loading from '../common/widget/loading';

import Routes from './routes'


export default props => (
  <div className='wrapper'>
    <Header />
    <Sidebar />
    <div className='content-wrapper'>
        <Routes />
    </div>
    <Footer />
    <Messages />
    <Loading />
  </div>
)