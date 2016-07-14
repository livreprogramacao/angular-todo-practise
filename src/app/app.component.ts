import { Component } from '@angular/core';

import { TodoAppComponent } from '../app/todo-app/todo-app.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [TodoAppComponent]
})
export class AppComponent {
  title = 'app works!';
}
