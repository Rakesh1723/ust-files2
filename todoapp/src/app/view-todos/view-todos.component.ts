import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../todo-data.service';
import { TodoCardComponent } from '../todo-card/todo-card.component';
import { Todo } from '../model/Todo';
import { TodoApiService } from '../todo-api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-todos',
  imports: [CommonModule,TodoCardComponent,RouterModule],
  templateUrl: './view-todos.component.html',
  styleUrl: './view-todos.component.css'
})

export class ViewTodosComponent implements OnInit {
 

  // constructor(public todoDataService:TodoDataService){}
  
  //   ngOnInit(): void {
  //     this.todoDataService.fetchTodos(); 
  //   }

  todos:Array<Todo>=[]
  constructor(private todoApiService:TodoApiService){}
  
  ngOnInit(): void {
    this.fetchTodos() 
  }

  fetchTodos(){
    this.todoApiService.fetchTodos().subscribe(
      response => this.todos=response,
    )
  }

}
