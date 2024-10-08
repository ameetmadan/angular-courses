import { Component, computed, input, Input, output } from '@angular/core';
import { CardComponent } from "../shared/card/card.component";
// import { DUMMY_USERS } from '../dummy-users';
// const randomIndex: number = Math.floor(Math.random() * DUMMY_USERS.length);

export type User = {
  id: string;
  avatar: string;
  name: string;
};

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() user!: User;
  select = output<string>();
  @Input({ required: true }) selected!: boolean;
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatarUrl!: string;
  // @Input({ required: true }) name!: string;  
  // @Output() select = new EventEmitter();
  // avatarUrl = input.required<string>();
  // name = input.required<string>();

  get imagePath() {
    return this.user.avatar;
  }

  // imagePath = computed(() => { return this.avatarUrl; });

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
