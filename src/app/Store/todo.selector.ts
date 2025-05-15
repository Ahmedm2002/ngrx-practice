import { createFeatureSelector, createSelector } from "@ngrx/store";
import { todosState } from "./todo.reducers";


export const selectTodoState = createFeatureSelector<todosState>('todos')
