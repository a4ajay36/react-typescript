import { Box, Button, Container, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TodoList from './components/TodoList';
import { addTodo } from './redux/todoSlice';

const App: React.FC = () => {
	const [task, setTask] = useState('');
	const dispatch = useDispatch();

	const handleAddTodo = () => {
		if (task.trim()) {
			dispatch(addTodo(task.trim()));
			setTask('');
		}
	};

	return (
		<Container maxWidth="sm">
			<h1>Todo App</h1>
			<Box display="flex" alignItems="center">
				<TextField
					label="Task"
					variant="outlined"
					value={task}
					onChange={(e) => setTask(e.target.value)}
				/>
				<Button variant="contained" onClick={handleAddTodo} sx={{ marginLeft: '8px' }}>
					Add
				</Button>
			</Box>
			<TodoList />
		</Container>
	);
};

export default App;
