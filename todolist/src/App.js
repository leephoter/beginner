import React, { Component } from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";

class App extends Component {
    render() {
        return (
            <TodoListTemplate form={<Form />}>It's Template</TodoListTemplate>
        );
    }
}

export default App;
