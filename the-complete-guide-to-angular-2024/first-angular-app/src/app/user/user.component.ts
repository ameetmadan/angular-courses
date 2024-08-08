import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex: number = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  // computed(() => {}) 
  // rerender only when the selected user changes
  imagePath = computed(() => this.selectedUser().avatar);
  onSelectUser() {
    const randomUserIndex: number = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomUserIndex]);
  }
}
