import React, { Component } from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";

class App extends Component {
    id = 0;
    state = {
        input: "",
        todos: [
            // { id: 0, text: " Introduce React", checked: false },
            // { id: 1, text: " Introduce React", checked: true },
            // { id: 2, text: " Introduce React", checked: false },
            //기본 list
        ],
    };
    handleChange = (e) => {
        this.setState({
            input: e.target.value,
            //e.target : <input />
        });
    };
    handleCreate = () => {
        const { input, todos } = this.state;
        // input:string, todos:array, this.state:obj
        this.setState({
            input: "",
            todos: todos.concat({
                id: this.id++,
                text: input,
                checked: false,
            }),
        });
        // console.log("id after exe :>> ", this.state.id);
        // console.log("input, todos :>> ", input, todos);
    };
    handleKeyPress = (e) => {
        if (e.key === "Enter") {
            this.handleCreate();
            // press the Enter key ->> handleKeyPress func  (엔터키 활성화)
        }
    };
    handleToggle = (id) => {
        //checking sign
        const { todos } = this.state;
        const index = todos.findIndex((todo) => {
            console.log(todo);
            return todo.id === id;
        });
        //{코드쓰고 return 반환}
        const selected = todos[index];
        const nextTodos = [...todos];
        //copy all todos to nextTodos
        nextTodos[index] = {
            ...selected,
            checked: !selected.checked,
        };
        this.setState({
            todos: nextTodos,
        });
    };

    handleRemove = (id) => {
        const { todos } = this.state;
        this.setState({
            todos: todos.filter((todo) => todo.id !== id),
        });
    };

    render() {
        const { input, todos } = this.state;
        const {
            handleChange,
            handleCreate,
            handleKeyPress,
            handleToggle,
            handleRemove,
        } = this;
        //added functions to <this>
        return (
            <TodoListTemplate
                form={
                    <Form
                        value={input}
                        onKeyPress={handleKeyPress}
                        onChange={handleChange}
                        onCreate={handleCreate}
                    />
                }
            >
                <TodoItemList
                    todos={todos}
                    onToggle={handleToggle}
                    onRemove={handleRemove}
                />
            </TodoListTemplate>
        );
    }
}

export default App;
