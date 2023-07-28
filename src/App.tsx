import { Container, Grid } from '@mui/material';
import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App: React.FC = () => {
	return (
		<Container maxWidth="md">
			<h1>Todo App</h1>
			<Grid container>
				<Grid item xs={6}>
					<TodoForm />
				</Grid>
				<Grid item xs={6}>
					<TodoList />
				</Grid>
			</Grid>
		</Container>
	);
};

export default App;
