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
                        href="/Update"
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
                        type="button"
                        value="delate"
                        onClick={function (e) {
                            e.preventDefault();
                            this.props.onChangeMode("delate");
                        }.bind(this)}
                    ></input>
                </li>
            </ul>
        );
    }
}

export default Control;
