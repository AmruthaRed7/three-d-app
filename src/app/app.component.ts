import { Component } from '@angular/core';
import { object } from './Object';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'three-d-app';
  object = object;
}
