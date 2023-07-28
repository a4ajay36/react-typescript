import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Todo, deleteTodo } from '../redux/todoSlice';

type TodoItemProps = {
    todo: Todo
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }): JSX.Element => {
    const { id, title, description } = todo
    const dispatch = useDispatch();

    const handleDeleteTodo = () => {
        dispatch(deleteTodo(id));
    };

    return (
        <ListItem>
            <ListItemText primary={title} secondary={description} />
            <IconButton onClick={handleDeleteTodo}>
                <DeleteIcon />
            </IconButton>
        </ListItem>
    );
};

export default TodoItem;
