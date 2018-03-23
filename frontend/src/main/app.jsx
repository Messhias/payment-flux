import React from 'react';

import '../common/template/dependencies';

import Header from '../common/template/header';
import Sidebar from '../common/template/sideBar';
import Footer from '../common/template/footer';
import Messages from '../common/msg/messages';

import Routes from './routes';

export default props => (
    <div className="wrapper">
        <Header></Header>
        <Sidebar></Sidebar>
        <div className="content-wrapper">
            <Routes />
        </div>
        <Footer />
        <Messages />
    </div>
);
