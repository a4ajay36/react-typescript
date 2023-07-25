import { List } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import TodoItem from './TodoItem';

const TodoList: React.FC = (): JSX.Element => {
    const { todos } = useSelector((state: RootState) => state);

    return (
        <List>
            {todos.todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    task={todo.task}
                    completed={todo.completed}
                />
            ))}
        </List>
    );
};

export default TodoList;
