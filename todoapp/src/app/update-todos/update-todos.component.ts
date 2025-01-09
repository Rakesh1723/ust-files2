import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Todo } from '../model/Todo';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-update-todos',
  imports: [ReactiveFormsModule],
  templateUrl: './update-todos.component.html',
  styleUrl: './update-todos.component.css'
})
export class UpdateTodosComponent implements OnInit{
  
  @Input('todo')
  todo?:Todo

  constructor(private formBuilder:FormBuilder,private todoDataService:TodoDataService) { }

  toUpdateForm:FormGroup|any;

  ngOnInit(): void {
      this.toUpdateForm = this.formBuilder.group({
        id:[this.todo?.id],
        title:[this.todo?.title],
        status:[this.todo?.status]
      })
  } 

   updateTodo(todo:Todo){
     this.todoDataService.updateTodo(todo);
   }


}
