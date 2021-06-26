import React, { Component } from 'react'
import "./style.scss"
import { Link } from "react-router-dom"
import { Button, Modal, Input, Form, List, Typography, Divider } from 'antd';


export default class blog extends Component {

    state = {
        modal_open: false,
        data: [],
        filtered: []
    }


    _request

    componentDidMount() {

        let data = []

        console.log(Object.entries(localStorage))

        setImmediate(() => {
            const data = Object.keys(localStorage).filter(key => key.startsWith("blog_")).map(key => key.replace("blog_:", ""))
            this.setState({ data: data, filtered: data })

        })

    }

    doesDbExist = async (dbName) => {
        var result = await indexedDB.databases();
        var dbFound = false;
        for (var i = 0; i < result.length && !dbFound; i++) {
            dbFound = result[i].name === dbName;
        }
        return dbFound;
    }


    handleOk = () => {
        this.setState({ modal_open: false })
    }

    handleCancel = () => {
        this.setState({ modal_open: false })
    }

    onFinishFailed = () => {

    }
    onFinish = (values) => {
        if (values?.new_blog && values.new_blog.trim() != "") {
            window.location.assign("#/new_blog/:" + values.new_blog)
        }
    }

    render() {




        return (
            <div className="blog">

                <Divider orientation="left">Blogs</Divider>
                <Input size="large" placeholder="Search by blog name" onChange={e => {
                    console.log(e.target.value)
                    if (e.target.value.trim() == "") {
                        this.setState({ filtered: this.state.data})
                    }
                    else {
                        this.setState({ filtered: this.state.data.filter(name => name.includes(e.target.value)) })
                    }
                }} />
                <br /><br />
                <List
                    size="small"
                    bordered
                    dataSource={this.state.filtered}
                    renderItem={item => <List.Item onClick={e => window.location.assign("#/new_blog/:" + item)}>{item}</List.Item>}
                />
                <br />
                <Button type="primary" onClick={e => this.setState({ modal_open: true })}>New Blog</Button>

                <Modal title="Basic Modal" visible={this.state.modal_open} onOk={this.handleOk} onCancel={this.handleCancel}>

                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                    >
                        <Form.Item
                            label="New blog name"
                            name="new_blog"
                            rules={[{ required: true, message: 'Please input name for your new blog' }]}
                        >
                            <Input />
                        </Form.Item>




                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Create
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        )
    }
}
