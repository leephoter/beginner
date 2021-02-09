import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
    render() {
        const { text, checked, id, onToggle, onRemove } = this.props;
        //text 내용(todo) //checked 체크박스 상태 //id (새애)의 고유 아이디
        //onToggle 체크박스 on/off함수 //onRemove 아이템 삭제 함수
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
                    {/* ===
                    "todo-text " + checked && 'checked'
                    "todo-text "뒤에 checked의 boolean값에 따라 'checked'유무
                    todo-text 클래스 아니면 todo-text checked 클래스

                    checked가 false일 때 
                    todo-text false 로 결과값이 나오지 않게 하려면
                    `todo-text ${ checked ? ' checked' : '' }`
                    `여기`안에 값은 string으로 반환
                    */}
                    <div>{text}</div>
                </div>
                {checked && <div className="check-mark"> </div>}
                {/* checked의 boolean값에 따라 && 다음 값의 유무 */}
            </div>
        );
    }
}
export default TodoItem;
