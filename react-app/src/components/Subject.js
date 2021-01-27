import React, { Component } from "react";
class Subject extends Component {
    render() {
        return (
            //Component는 하나의 최상위 태그만 사용해야 함
            <header>
                <h1>
                    <a
                        href="/WEB"
                        onClick={function (e) {
                            e.preventDefault();
                            this.props.onChangePage();
                        }.bind(this)}
                    >
                        {this.props.title}
                    </a>
                </h1>
                {this.props.sub}
            </header>
        );
    }
}

export default Subject;
