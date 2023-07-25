import DeleteIcon from '@mui/icons-material/Delete';
import { Checkbox, IconButton, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../redux/todoSlice';

type TodoItemProps = {
    id: number;
    task: string;
    completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, task, completed }): JSX.Element => {
    const dispatch = useDispatch();

    const handleToggleTodo = () => {
        dispatch(toggleTodo(id));
    };

    const handleDeleteTodo = () => {
        dispatch(deleteTodo(id));
    };

    return (
        <ListItem
            button
            onClick={handleToggleTodo}
            sx={{
                textDecoration: completed ? 'line-through' : 'none',
            }}
        >
            <Checkbox checked={completed} />
            <ListItemText primary={task} />
            <IconButton onClick={handleDeleteTodo} aria-label="delete">
                <DeleteIcon />
            </IconButton>
        </ListItem>
    );
};

export default TodoItem;
