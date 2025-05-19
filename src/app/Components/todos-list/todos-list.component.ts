import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectAllTodos } from '../../Store/todo.selector';
import { Todo } from '../../Models/todo.model';
import { removeTodo, updateTodo } from '../../Store/todo.actions';
@Component({
  selector: 'app-todos-list',
  imports: [CommonModule, AsyncPipe],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.css',
})
export class TodosListComponent {
  private store = inject(Store);
  todos$ = this.store.select(selectAllTodos);
  deleteTodo(todo : Todo){
    this.store.dispatch(removeTodo({ todoId : todo.id}))
  }
  onToggle(event : any, todo : Todo){
    this.store.dispatch(updateTodo({updatedTodo : {
      ...todo,
      isCompleted : event.target.checked
    }}))
  }
}
