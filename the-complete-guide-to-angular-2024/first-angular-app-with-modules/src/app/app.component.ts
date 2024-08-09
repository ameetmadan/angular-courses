import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { DUMMY_TASKS } from './dummy-tasks';

// metadata for the component, where to get styles and other information
@Component({
  selector: 'app-root', // the selector is what angular uses to find the component
  // standalone: true, // if the component is a module of another component, this is false
  // imports: [
  //   RouterOutlet, 
  //   HeaderComponent, 
  //   UserComponent, 
  //   TasksComponent
  // ], // the imports are the components that are used in this component
  templateUrl: './app.component.html', // the template is the html that will be rendered
  styleUrl: './app.component.css' // can't clash with other styles
})
export class AppComponent {
  users = DUMMY_USERS;
  tasks = DUMMY_TASKS;
  selectedUserId?: string;
  title = 'first-angular-app';

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
