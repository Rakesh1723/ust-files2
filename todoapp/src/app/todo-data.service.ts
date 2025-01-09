import { Injectable } from '@angular/core';
import {Todo} from './model/Todo';
import { TodoApiService } from './todo-api.service';


@Injectable({
  providedIn: 'root'
})

export class TodoDataService {

//   constructor() { }

//   todos:Array<Todo>=[{
//     id:1,
//     title:'Learn Angular',
//     status:'Pending'
//   },
//   {
//     id:2,
//     title:'Learn Java',
//     status:'Completed'
//   },
//   {
//     id:3,
//     title:'Learn Spring',
//     status:'Completed'
//   }
// ];

 
  constructor(private todoApiService:TodoApiService){}
  
   todos:Array<Todo>=[];

  addTodo(todo:Todo){
    this.todos.push(todo)
  }

  fetchTodos(){
    this.todoApiService.fetchTodos().subscribe(
      response => this.todos=response
    )
  }

  deleteTodo(title:string){
    this.todoApiService.deleteTodos(title).subscribe(
      response => this.fetchTodos()
    )   
  }

  updateTodo(todo:Todo){
    this.todoApiService.updateTodos(todo).subscribe(
      // response =>todo=response
      (updatedTodo)=>
      {
        const index = this.todos.findIndex(t => t.id === updatedTodo.id);
          if (index !== -1) {
            this.todos[index] = updatedTodo;
          }
      }
          
    )
  }

// deleteTodo(title:string){
//   const index = this.todos.findIndex(t => t.title === title)
//   if(index != -1)
//       this.todos.splice(index,1)
// }

  
}
