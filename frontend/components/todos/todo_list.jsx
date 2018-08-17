import React from 'react';
import TodoListItem from './todo_list_item';

class TodoList extends React.Component {

  render() {
    const todoItems = this.props.todos.map(todo => (
      <TodoListItem
        key={todo.id}
        todo={todo}
      />
    ))

    return(
      <ul>{ todoItems }</ul>
    )
  }



}

export default TodoList;
