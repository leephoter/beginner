import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
    render() {
        const { text, checked, id, onToggle, onRemove } = this.props;
        //text 내용(todo) //checked 체크박스 상태 //id (새애)의 고유 아이디
        //onToggle 체크박스 on/off함수 //onRemove 아이템 삭제 함수
        console.log("this.props :>> ", this.props);
        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div
                    className="remove"
                    onClick={(e) => {
                        e.stopPropagation(); //onToggle 실행X
                        onRemove(id);
                    }}
                >
                    &times;
                </div>
                <div className={`todo-text ${checked && "checked"}`}>
                    <div>{text}</div>
                </div>
                {checked && <div className="check-mark"> </div>}
            </div>
        );
    }
}
export default TodoItem;
