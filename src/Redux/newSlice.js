import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, addTask, deleteTask } from "./operations";
const tasksSlice = createSlice({
    // Код остальных редюсеров
    extraReducers: {
        [deleteTask.pending](state) {
            state.isLoading = true;
        },
        [deleteTask.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
                task => task.id === action.payload.id
            );
            state.items.splice(index, 1);
        },
        [deleteTask.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});
export const tasksReducer = tasksSlice.reducer;