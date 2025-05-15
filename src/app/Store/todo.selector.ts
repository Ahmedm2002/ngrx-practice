import { createFeatureSelector, createSelector } from "@ngrx/store";
import { todosState } from "./todo.reducers";

export interface AppState {
  todoState : todosState
}

export const selectTodoState = (state : AppState) => state.todoState

export const getTodos = createSelector(
  selectTodoState,
  (state : todosState) => state.todos
)

export const totalTodos = createSelector(
  selectTodoState,
  (state: todosState) => state.totalNumber
)