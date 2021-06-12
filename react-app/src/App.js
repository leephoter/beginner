import React, { Component } from "react";
import Control from "./components/Control";
import Subject from "./components/Subject";
import ReadContent from "./components/ReadContent";
import UpdateContent from "./components/UpdateContent";
import TOC from "./components/TOC";
import CreateContent from "./components/CreateContent";
import "./App.css";

class App extends Component {
    constructor(props) {
        //Component를 초기화시켜주고싶은 코드는 constructor안에 state에 설정
        super(props);
        this.max_content_id = 3; //마지막content의 값과 동일
        this.state = {
            mode: "welcome",
            selected_content_id: 2,
            subject: {
                title: "WEB",
                sub: "World Wide Web !",
            },
            welcome: { title: "welcome", desc: "Hello, react!!" },
            contents: [
                { id: 1, title: "HTML", desc: "HTML is for information" },
                { id: 2, title: "CSS", desc: "CSS is for design" },
                {
                    id: 3,
                    title: "JavaScript",
                    desc: "JavaScript is for interactive",
                },
            ],
        };
    }
    getReadContent() {
        var i = 0;
        while (i < this.state.contents.length) {
            var data = this.state.contents[i];
            if (data.id === this.state.selected_content_id) {
                return data;
                break;
            }
            i = i + 1;
        }
    }
    getContent() {
        var _title,
            _desc,
            _article = null;
        if (this.state.mode === "welcome") {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
            _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
        } else if (this.state.mode === "read") {
            var _content = this.getReadContent();
            _article = (
                <ReadContent
                    title={_content.title}
                    desc={_content.desc}
                ></ReadContent>
            );
        } else if (this.state.mode === "create") {
            _article = (
                <CreateContent
                    onSubmit={function (_title, _desc) {
                        //새 content값 추가
                        this.max_content_id = this.max_content_id + 1;
                        var _contents = Array.from(this.state.contents);
                        _contents.push({
                            id: this.max_content_id,
                            title: _title,
                            desc: _desc,
                        });
                        this.setState({
                            contents: _contents,
                            mode: "read",
                            selected_content_id: this.max_content_id,
                        });
                        // console.log(_title, _desc);
                    }.bind(this)}
                ></CreateContent>
            );
        } else if (this.state.mode === "update") {
            _content = this.getReadContent();
            _article = (
                <UpdateContent
                    data={_content}
                    onSubmit={function (_id, _title, _desc) {
                        var _contents = Array.from(this.state.contents);
                        // this.state.contents를 복사한 새로운 배열 생성
                        var i = 0;
                        while (i < _contents.length) {
                            if (_contents[i].id === _id) {
                                _contents[i] = {
                                    id: _id,
                                    title: _title,
                                    desc: _desc,
                                };
                                break;
                            }
                            i = i + 1;
                        }
                        this.setState({
                            contents: _contents,
                            mode: "read",
                        });
                        // console.log(_title, _desc);
                    }.bind(this)}
                ></UpdateContent>
            );
        }
        return _article;
    }
    render() {
        // console.log("render", this);
        // console.log("this.state.contents :>> ", this.state.contents);
        // console.log("this.props.data :>> ", this.props.data);
        return (
            <div className="App">
                <Subject
                    title={this.state.subject.title}
                    sub={this.state.subject.sub}
                    onChangePage={function () {
                        this.setState({ mode: "welcome" });
                    }.bind(this)}
                ></Subject>
                <TOC
                    onChangePage={function (id) {
                        this.setState({
                            mode: "read",
                            selected_content_id: Number(id),
                        });
                    }.bind(this)}
                    data={this.state.contents}
                ></TOC>
                <Control
                    onChangeMode={function (_mode) {
                        if (_mode === "delete") {
                            if (window.confirm("Delete")) {
                                var _contents = Array.from(this.state.contents);
                                var i = 0;
                                while (i < _contents.length) {
                                    if (
                                        _contents[i].id ===
                                        this.state.selected_content_id
                                    ) {
                                        _contents.splice(i, 1);
                                        // data를 삭제
                                        break;
                                    }
                                    i = i + 1;
                                }
                                this.setState({
                                    mode: "welcome",
                                    contents: _contents,
                                });
                                // alert('deleted!');
                            }
                        } else {
                            this.setState({
                                mode: _mode,
                            });
                        }
                    }.bind(this)}
                ></Control>
                {this.getContent()}
            </div>
        );
    }
}

export default App;
//App이라는 class를 외부에서도 사용 가능하게 함
