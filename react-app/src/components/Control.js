import React, { Component } from "react";
class Control extends Component {
    render() {
        // console.log("Content render");
        return (
            <ul>
                <li>
                    <a
                        href="/Create"
                        onClick={function (e) {
                            e.preventDefault();
                            this.props.onChangeMode("create");
                        }.bind(this)}
                    >
                        create
                    </a>
                </li>
                <li>
                    <a
                        href="/update"
                        onClick={function (e) {
                            e.preventDefault();
                            this.props.onChangeMode("update");
                        }.bind(this)}
                    >
                        update
                    </a>
                </li>
                <li>
                    <input
                        onClick={function (e) {
                            e.preventDefault();
                            this.props.onChangeMode("delate");
                        }.bind(this)}
                        type="button"
                        value="delate"
                    ></input>
                </li>
            </ul>
        );
    }
}

export default Control;
