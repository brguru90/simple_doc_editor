import React, { Component } from 'react'
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import "./style.scss"
import { Button, message } from 'antd';


export default class new_blog extends Component {


    editor = null
    blog_name = null

    componentDidMount() {

        let ctx = this

        ClassicEditor.editorConfig = function (config) {
            // misc options
            config.height = '950px';
        };

        const config = {
            height: 700,

        }

        ClassicEditor
            .create(document.querySelector('#editor'), config)
            .then(editor => {
                ctx.editor = editor
                console.log(editor);

                if (ctx.props?.match?.params?.name) {
                    const blog_name = "blog_" + ctx.props?.match?.params?.name
                    this.blog_name = blog_name
                    let data = localStorage.getItem(blog_name)
                    if (data) {
                        editor.setData(data);
                    }
                    this.setState({ blog_name: blog_name, data: data })
                }

            })
            .catch(error => {
                console.error(error);
            });


    }


    render() {
        return (
            <div className="new_blog">

                <div id="editor">
                    <p></p>
                </div>

                <Button type="primary doc_save_btn" onClick={(e) => {
                    if (this.editor && this.blog_name) {
                        const data = this.editor.getData();
                        localStorage.setItem(this.blog_name, data)
                        message.success('Saved');
                    }
                    else {
                        message.error('Failed');
                    }
                }}>Save</Button>

            </div>
        )
    }
}
