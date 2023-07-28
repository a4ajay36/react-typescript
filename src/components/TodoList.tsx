import { Divider, List } from '@mui/material';
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import TodoItem from './TodoItem';

const TodoList: React.FC = (): JSX.Element => {
    const { todos } = useSelector((state: RootState) => state);

    return (
        <List>
            {todos.todos.map((todo, idx) => (
                <Fragment key={todo.id}>
                    <TodoItem
                        todo={todo}
                    />
                    {idx + 1 < todos.todos.length && (
                        <Divider />
                    )}
                </Fragment>
            ))}
        </List>
    );
};

export default TodoList;
