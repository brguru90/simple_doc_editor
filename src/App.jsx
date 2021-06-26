import React, { Component } from "react"
import "./App.scss"
import * as $ from "jquery"
import { BrowserRouter as Router, HashRouter, Switch, Route, Link } from "react-router-dom"
import home from "./components/home/home.jsx"
import blog from "./components/blog/blog.jsx"
import new_blog from "./components/new_blog/new_blog.jsx"

import 'antd/dist/antd.css';

import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

export default class App extends Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };



    componentDidMount() {



    }



    render() {
        console.log(window.location, window.location.pathname, window.location.href)
        return (
            <div className="App">

                <Layout>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo" />
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={[window.location.hash]}>                            
                            <Menu.Item key="#/home" icon={<UserOutlined />}>
                                <a href="#/home">Home</a>
                            </Menu.Item>
                            <Menu.Item key="#/" icon={<VideoCameraOutlined />}>
                                <a href="#">Blog</a>
                            </Menu.Item>
                            {/* <Menu.Item key="#/new_blog" icon={<UploadOutlined />}>
                                <a href="#/new_blog">new Blog</a>
                            </Menu.Item> */}
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{ padding: 0 }}>

                        </Header>
                        <Content
                            className="site-layout-background"
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                                minHeight: 280,
                            }}
                        >
                            <Router>
                                <Switch>
                                    <HashRouter>
                                        <Switch>
                                            <Route path="/home" exact component={home} />
                                            <Route path="/" exact component={blog} />
                                            <Route path="/new_blog/:name" exact component={new_blog} />
                                        </Switch>
                                    </HashRouter>
                                </Switch>

                            </Router>
                        </Content>
                    </Layout>
                </Layout>

            </div>

        )
    }
}
