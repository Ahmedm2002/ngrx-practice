import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { InputComponent } from './Components/input/input.component';
import { TodosListComponent } from './Components/todos-list/todos-list.component';

@Component({
  selector: 'app-root',
  imports: [ InputComponent, TodosListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'ngrx-practice';
  private store = inject(Store);
}
