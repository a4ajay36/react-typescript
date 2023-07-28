import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
	id: string;
	title: string;
	description: string;
}

export interface TodoState {
	todos: Todo[];
}

const initialState: TodoState = {
	todos: [],
};

const todoSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<Todo>) => {
			state.todos.push(action.payload);
		},
		deleteTodo: (state, action: PayloadAction<string>) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
		},
	},
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
