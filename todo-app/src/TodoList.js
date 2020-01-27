import React from "react";
import { Todo } from "./Todo";

export class TodoList extends React.Component {
  render() {
    const listado = this.props.todoList;
    const elementos = listado.map((elemento, i) => (
      <li key={i}>
        {
          <Todo
            text={elemento.text}
            priority={elemento.priority}
            dueDate={elemento.dueDate}
          />
        }
      </li>
    ));
    return (
      //Add your code here to represent a TODO   this.props.todoList  todoList
      <ul>{elementos}</ul>
    );
  }
}
