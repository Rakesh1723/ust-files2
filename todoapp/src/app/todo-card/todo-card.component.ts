import { Component,Input, OnChanges } from '@angular/core';
import { Todo } from '../model/Todo'; 
import { TodoDataService } from '../todo-data.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UpdateTodosComponent } from '../update-todos/update-todos.component';

@Component({
  selector: 'app-todo-card',
  imports: [CommonModule,RouterModule,UpdateTodosComponent],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.css'
})

export class TodoCardComponent implements OnChanges {
   
  @Input('todo')
   todo?:Todo;

  constructor(private todoDataService:TodoDataService){} 
      
   deleteTodo(title:string){
    this.todoDataService.deleteTodo(title);
   }

  //  updateTodo(todo:Todo){
  //    this.todoDataService.updateTodo(todo);
  //  }

  isUpdating:boolean = false;

  toggleUpdate(){
    this.isUpdating = !this.isUpdating;
  }
  
  ngOnChanges(): void {
    console.log(this.todo);
  }

}
