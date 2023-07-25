import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TodoItemType, TodoSliceType } from "../../types/todoSlice/TodoSliceType";

const initialState: TodoSliceType = {
    todo: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState, 
    reducers: {
        addTodo: (state, action: PayloadAction<TodoItemType[]>) => {
            state.todo = [...state.todo, ...action.payload];
        },

        deleteTodo: (state, action: PayloadAction<number>) => {
            state.todo = state.todo.filter((item) => item.id !== action.payload);
        },

        compliteTodo: (state, action: PayloadAction<number>) => {
            state.todo = state.todo.filter((item) => item.id !== action.payload);
        }
    }
})

export const {addTodo, deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;