import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addTodo } from '../../Store/todo.actions';
@Component({
  selector: 'app-input',
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  public store = inject(Store);
  newTodo: string = '';
  addNewTodo() {
    const randomId = Math.floor(Math.random() * 99999);
    this.store.dispatch(
      addTodo({
        todo: {
          id: randomId,
          todoName: this.newTodo,
          isCompleted: false,
        },
      })
    );
    this.newTodo = '';
  }
}
