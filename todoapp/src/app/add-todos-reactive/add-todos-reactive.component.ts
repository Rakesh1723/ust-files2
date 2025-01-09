import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TodoApiService } from '../todo-api.service';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-add-todos-reactive',
  imports: [ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './add-todos-reactive.component.html',
  styleUrl: './add-todos-reactive.component.css'
})

export class AddTodosReactiveComponent implements OnInit{

  // private todoDataService:TodoDataService,
 constructor(private formBuilder:FormBuilder,private todoApiService:TodoApiService,private todoDataService:TodoDataService,
  private router:Router){}

 todoForm:FormGroup|any;

   ngOnInit():void{
      this.todoForm=this.formBuilder.group({
        title:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]{3,20}')]],
        status:['',Validators.required],
        // subTasks:this.formBuilder.group({
        //   name:[''],
        //   description:['']
        // })
      })
   }

   addTodos(todo:any){
    //  this.todoDataService.addTodo(todo)
    this.todoApiService.createTodo(todo)
    .subscribe(
      response=>{
        console.log(response),
        this.todoDataService.fetchTodos()
        this.router.navigate(['/view-all'])
      },
      error=>console.error(error)    
    )
   }

}
