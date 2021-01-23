import React, { Component } from "react";
//react라는 라이브러리에서 Component라는 class를 loading한다
class TOC extends Component {
    render() {
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while (i < data.length) {
            lists.push(
                <li key={data[i].id}>
                    <a
                        href={"/content/" + data[i].id}
                        data-id={data[i].id}
                        onClick={
                            (function (id, e) {
                                e.preventDefault();
                                this.props.onChangePage(id);
                                //id === e.target.dataset.id
                                // console.log("e :>> ", e);
                            }.bind(this, data[i].id),
                            10)
                        }
                    >
                        {data[i].title}
                    </a>
                </li>
            );
            i = i + 1;
        }
        console.log("data :>> ", data);
        return (
            <nav>
                <ul>{lists}</ul>
            </nav>
        );
    }
}
export default TOC; //TOC라는 class를 외부에서도 사용 허가
