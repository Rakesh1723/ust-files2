import { Component } from '@angular/core';
import { ViewTodosComponent } from '../view-todos/view-todos.component';
import { AddTodosComponent } from '../add-todos/add-todos.component';
import { AddTodosReactiveComponent } from '../add-todos-reactive/add-todos-reactive.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [ViewTodosComponent,AddTodosReactiveComponent,RouterModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
