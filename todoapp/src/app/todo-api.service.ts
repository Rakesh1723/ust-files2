import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { ErrorService } from './error.service';
import { Todo } from './model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

   baseUrl="http://localhost:8080/api/v1/todos";

  constructor(private todoClient:HttpClient,private router:Router,private error:ErrorService) { }

  createTodo(todo:Todo):Observable<Todo>{
    return this.todoClient.post<Todo>(this.baseUrl,todo)
    // .pipe(
    //   err => {
    //     console.error(err)
    //     this.router.navigate(['/error'])
    //     return throwError(()=>err)
    //   }
    // )
  }

  fetchTodos():Observable<Array<Todo>>{
    return this.todoClient.get<Array<Todo>>(this.baseUrl)
    .pipe(
      catchError(
        // err => {
        //   console.error(err)
        //   this.router.navigate(['/error'])
        //   return throwError(()=>err)
        // }
        err => {
          this.error.errorResponse={
            message:'Unable to Connect to the Server',
            status:503,
            timestamp:new Date()

          }
          this.router.navigate(['/error'])
          return throwError(()=>err)
        }

      )
    )
  }

  deleteTodos(title:string):Observable<void>{
     return this.todoClient.delete<void>(`${this.baseUrl}?title=${title}`)
     .pipe(
       catchError(
       err=>{
        console.error(err)
        this.router.navigate(['/error'])
        return throwError(()=>err)
       })
     )
  }

  updateTodos(todo:Todo):Observable<Todo>{
    return this.todoClient.put<Todo>(`${this.baseUrl}/${todo.id}`,todo)
    .pipe(
      catchError(
      err=>{
       console.error(err)
       this.router.navigate(['/error'])
       return throwError(()=>err)
      })
    )
  }

  fetchTodoById(id:number):Observable<Todo>{
    return this.todoClient.get<Todo>(this.baseUrl+'/'+id)
    .pipe(
      catchError(
        err => {
          this.error.errorResponse=err.error
          this.router.navigate(['/error'])
          return throwError(()=>err)
        }
      )
    );
  }


}
