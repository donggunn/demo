import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  matList = [
    { path: '', title:'dashboard'}, {path:'settings', title: 'Settings'}, {path: 'logs', title: 'Logs'}
  ];
}
