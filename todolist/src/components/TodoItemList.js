import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends Component {
    render() {
        const { todos, onToggle, onRemove } = this.props;
        //구조분해할당
        //this.props.todos =>
        //todos객체들 배열 //onToggle체크박스 on/off함수
        //onRemove아이템 삭제함수
        return (
            <div>
                <TodoItem text="Hi" />
                <TodoItem text="React !" />
            </div>
        );
    }
}
export default TodoItemList;
