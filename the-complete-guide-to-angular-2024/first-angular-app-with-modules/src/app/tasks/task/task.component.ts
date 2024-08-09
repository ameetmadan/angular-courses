import { Component, inject, Input } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

export type Task = {
  id: string;
  dueDate: string;
  userId: string;
  title: string;
  description: string;
};

@Component({
  selector: 'app-task',
  // standalone: true,
  // imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  private tasksService: TasksService = inject(TasksService);
  @Input({ required: true }) task!: Task;
  onComplete() {
    this.tasksService.completeTask(this.task.id);
  }
}
