import React from 'react';

const TodoItem = ({id, name, isComplete}) => {
    return (
        <li key={id}>
            <input type='checkbox' defaultChecked={isComplete} /> 
            {name}
        </li>
    );
}

export default TodoItem;