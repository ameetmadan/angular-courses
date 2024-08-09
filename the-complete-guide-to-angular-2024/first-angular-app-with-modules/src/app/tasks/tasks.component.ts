import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { AddTaskComponent } from "./add-task/add-task.component";
import { TasksService } from "./tasks.service";

@Component({
  selector: 'app-tasks',
  // standalone: true,
  // imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  constructor(private tasksService: TasksService) {}

  isAddTaskModalOpen = false;
  @Input() userId!: string;
  @Input() name!: string;

  get userTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onComplete(id: string) {}

  onCloseAddTask() {
    this.isAddTaskModalOpen = false;
  }
  onCreateNewTask() {
    this.isAddTaskModalOpen = true;
  }
}
