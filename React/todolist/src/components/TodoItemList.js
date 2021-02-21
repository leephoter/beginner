import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }
    render() {
        const { todos, onToggle, onRemove } = this.props;
        //구조분해할당
        //this.props.todos =>
        //todos객체들 배열 //onToggle체크박스 on/off함수
        //onRemove아이템 삭제함수
        const todoList = todos.map(({ id, text, checked }) => (
            <TodoItem
                id={id}
                text={text}
                checked={checked}
                onToggle={onToggle}
                onRemove={onRemove}
                key={id}
            />
        ));
        return <div>{todoList}</div>;
    }
}
export default TodoItemList;
