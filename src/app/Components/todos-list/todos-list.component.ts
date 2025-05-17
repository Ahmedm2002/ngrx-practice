import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectAllTodos, totalTodos } from '../../Store/todo.selector';
@Component({
  selector: 'app-todos-list',
  imports: [CommonModule, AsyncPipe],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.css',
})
export class TodosListComponent {
  private store = inject(Store);
  todos$ = this.store.select(selectAllTodos);
}
