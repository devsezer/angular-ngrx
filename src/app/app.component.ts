import {Component} from '@angular/core';
// import {select, Store} from '@ngrx/store';
// import {AppState} from './store/reducers';
import {Observable} from 'rxjs';

// import { selectCompanyName } from './store/company';
export interface User {
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
}

const DATA: User[] = [
  {firstName: 'Osman', lastName: 'Yazıcı', age: 12, gender: 'E'},
  {firstName: 'Serhan', lastName: 'Asker', age: 30, gender: 'E'},
  {firstName: 'Ayşe', lastName: 'Turan', age: 45, gender: 'K'},
  {firstName: 'Şebnem', lastName: 'Ak', age: 30, gender: 'K'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-ngrx';
  name$: Observable<any>;
  dataSource: User[] = DATA;

  constructor() {

  }
}
