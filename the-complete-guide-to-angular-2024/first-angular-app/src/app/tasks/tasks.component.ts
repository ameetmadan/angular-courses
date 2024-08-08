import { Component, Input, input } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent { 
  @Input({ required: true }) userId!: string;
  // title = input.required<string>();
  // description = input.required<string>();
  tasks = DUMMY_TASKS;
  get userTasks() {
    return this.tasks.filter(task => task.id === this.userId).map(task => task.title).join(', ');
  }
}
