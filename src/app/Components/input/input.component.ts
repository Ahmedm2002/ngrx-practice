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
  newDate: string = '';
  addNewTodo() {
    const randomId = Math.floor(Math.random() * 99999);
    const currentDate = new Date();
    if (
      new Date(this.newDate) < currentDate ||
      new Date(this.newDate) == currentDate
    ) {
      alert('Date cannot be past or on the same day');
    } else {
      this.store.dispatch(
        addTodo({
          todo: {
            id: randomId,
            todoName: this.newTodo,
            isCompleted: false,
            date: this.newDate,
          },
        })
      );
      this.newTodo = '';
      this.newDate = ''
    }
  }
}
