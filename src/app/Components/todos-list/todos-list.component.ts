import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../../Models/todo.model';
import { getTodos } from '../../Store/todo.selector';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todos-list',
  imports: [CommonModule],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.css',
})
export class TodosListComponent implements OnInit{
  store = inject(Store)

  todos$! :  Observable<Todo[]>

  ngOnInit(): void {
    console.log('Store: ', this.store)
    this.todos$ = this.store.select(getTodos)
    console.log('Todos: ', this.todos$)
  }
}
