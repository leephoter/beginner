import React, { Component } from "react";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import "./App.css";

class App extends Component {
    constructor(props) {
        //Component를 초기화시켜주고싶은 코드는 constructor안에 작성
        super(props);
        this.state = {
            mode: "read",
            subject: {
                title: "WEB",
                sub: "World Wide Web !",
            },
            welcome: { title: "welcome", desc: "Hello, react!!" },
            contents: [
                { id: 1, title: "HTML", desc: "HTML is for information" },
                { id: 1, title: "CSS", desc: "CSS is for design" },
                {
                    id: 1,
                    title: "JavaScript",
                    desc: "JavaScript is for interactive",
                },
            ],
        };
    }
    render() {
        console.log("App lender");
        var _title,
            _desc = null;
        if (this.state.mode === "welcome") {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        } else if (this.state.mode === "read") {
            _title = this.state.contents[0].title;
            _desc = this.state.contents[0].desc;
        }
        console.log("render", this);
        return (
            <div className="App">
                <Subject
                    title={this.state.subject.title}
                    sub={this.state.subject.sub}
                    onChangePage={function () {
                        this.setState({ mode: "welcome" });
                    }.bind(this)}
                ></Subject>
                <TOC data={this.state.contents}></TOC>
                <Content title={_title} desc={_desc}></Content>
            </div>
        );
    }
}

export default App;
