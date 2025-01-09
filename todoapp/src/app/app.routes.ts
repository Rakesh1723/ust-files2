import { Routes } from '@angular/router';
import { AddTodosReactiveComponent } from './add-todos-reactive/add-todos-reactive.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { ViewTodosComponent } from './view-todos/view-todos.component';

export const routes: Routes = [
    {path:'add',component:AddTodosReactiveComponent},
    {path:'home',component:HomeComponent},
    {path:'view-all',component:ViewTodosComponent,children:[
        {path:':id',component:TodoDetailsComponent}
    ]},
    // {path:'view/:id', component:TodoDetailsComponent}
    {path:'error',component:ErrorPageComponent},
    {path:'**',redirectTo:'error'}
];
