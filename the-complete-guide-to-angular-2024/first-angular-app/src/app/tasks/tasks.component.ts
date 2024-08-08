import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { TaskComponent } from "./task/task.component";
import { AddTaskComponent, NewTask } from "./add-task/add-task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  isAddTaskModalOpen = false;
  @Input() userId!: string;
  @Input() name?: string;
  tasks = DUMMY_TASKS;
  get userTasks() {
    return this.tasks
    .filter(task => task.userId === this.userId)
  }
  onCancelAddTask() {
    this.isAddTaskModalOpen = false;
  }
  onCreateNewTask() {
    this.isAddTaskModalOpen = true;
  }
  onComplete(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
  onAddTask(task: NewTask) {
    const id = new Date().getTime().toString()
    this.tasks.unshift({ 
      id: id,
      userId: this.userId,
      description: task.description,
      dueDate: task.dueDate,
      title: task.title
    });
  }
}
