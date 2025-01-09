import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayComponent } from './play/play.component';
// import {Status} from './app.component.css'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PlayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Status=Status
  title = 'hello-ust';

}
