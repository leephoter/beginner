import React, { Component } from "react";
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import Subject from "./components/Subject";
import Control from "./components/Control";
// import Abc from "./components/test";
import "./App.css";
import CreateContent from "./components/CreateContent";

class App extends Component {
    constructor(props) {
        //Component를 초기화시켜주고싶은 코드는 constructor안에 작성
        //state 설정
        super(props);
        this.max_content_id = 3;
        this.state = {
            mode: "create",
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
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: { title: "LEE", sub: "Han", desc: "Gyeol", hihi: "css" },
    //     };
    // }
    render() {
        // console.log("App lender");
        var _title,
            _desc,
            _article = null;
        if (this.state.mode === "welcome") {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
            _article = (
                <ReadContent title={_title} desc={_desc}>
                    {" "}
                </ReadContent>
            );
        } else if (this.state.mode === "read") {
            var i = 0;
            while (i < this.state.contents.length) {
                var data = this.state.contents[i];
                if (data.id === this.state.selected_content_id) {
                    _title = data.title;
                    _desc = data.desc;
                    break;
                }
                i = i + 1;
            }
            _article = (
                <ReadContent title={_title} desc={_desc}>
                    {" "}
                </ReadContent>
            );
        } else if (this.state.mode === "create") {
            _article = (
                <CreateContent
                    onSubmit={function (_title, _desc) {
                        //새 content값 추가
                        console.log(_title, _desc);
                    }.bind(this)}
                ></CreateContent>
            );
        }
        // console.log("render", this);
        // console.log("this.state.contents :>> ", this.state.contents);
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
                        this.setState({
                            mode: _mode,
                        });
                    }.bind(this)}
                ></Control>
                {_article}
                <br></br>
                {/* <Abc
                    ddd={this.state.name.title} 
                    sub={this.state.name.sub}
                    desc={this.state.name.desc}
                    hihi={this.state.name.hihi} 
                    data 설정
                /> */}
            </div>
        );
    }
}

export default App;
//App이라는 class를 외부에서도 사용 가능하게 하는 코드
