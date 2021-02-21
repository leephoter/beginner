import React, { Component } from "react";

class Abc extends Component {
    render() {
        var han = "gyeol";
        return (
            <div>
                <h4>{this.props.ddd}</h4>
                <li>{this.props.sub}</li>
                <li>{this.props.desc}</li>
                <div>{this.props.hihi}</div>
            </div>
        );
    }
}

export default Abc;
