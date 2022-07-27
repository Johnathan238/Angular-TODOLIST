import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

// ^ Data Binding - Eject to the DOM ^ //
export class TodosComponent implements OnInit {

  todos:Todo[]

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false
      },
      {
        content: 'Second todo',
        completed: false
      },
    ]
  }

  toggleDone(id:number) {
    this.todos.map((v, i) => {
      if (i === id) v.completed = !v.completed

      return v
    })
  }

  deleteTodo(id:number) {
    this.todos = this.todos.filter((v, i) => i !== id)
  }
}
