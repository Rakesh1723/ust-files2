import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../model/Todo';
import { TodoApiService } from '../todo-api.service';

@Component({
  selector: 'app-todo-details',
  imports: [],
  templateUrl: './todo-details.component.html',
  styleUrl: './todo-details.component.css'
})
export class TodoDetailsComponent implements OnInit{
  todo?:Todo;
  id=0;
  
  constructor(private activatedRoute:ActivatedRoute,private apiservice:TodoApiService){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      param=>{
        this.id=param['id']
      }
    )
    this.apiservice.fetchTodoById(this.id).subscribe(
      response=>this.todo=response
    )
  }



}
