import React from 'react';
import TodoItem from './TodoItem';
import {connect} from 'react-redux';

const TodoList = (props) => {
    return (
        <div className="todo-list">
            <ul>
              {props.todos.map( todo => (
                <TodoItem key={todo.id} {...todo} />
              ))}
            </ul>
        </div>
    );
}

export default connect(
    (state) => ({todos: state.todos})
)(TodoList);