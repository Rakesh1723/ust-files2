import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ErrorService } from '../error.service';

@Component({
  selector: 'app-error-page',
  imports: [CommonModule],
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.css'
})
export class ErrorPageComponent {
 
  constructor(public errorHandler:ErrorService){}

}
