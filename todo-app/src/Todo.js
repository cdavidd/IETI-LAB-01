import React from "react";

export class Todo extends React.Component {
  render() {
    return (
      //Add your code here to represent a TODO  priority  dueDate
      <div>
        <p> {"Text: " + this.props.text} </p>
        <p>{"Priority: " + this.props.priority}</p>
        <p> {"DueDate: " + this.props.dueDate.toString()}</p>
      </div>
    );
  }
}
