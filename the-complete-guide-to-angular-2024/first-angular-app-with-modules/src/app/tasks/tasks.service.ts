import { Injectable } from "@angular/core";
import { DUMMY_TASKS } from "../dummy-tasks";
import { NewTask } from "./add-task/add-task.component";

// CRUD service
@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = DUMMY_TASKS;

  getUserTasks(userId: string) {
      return this.tasks.filter(task => task.userId === userId)
  }

  addTask(task: NewTask, userId: string) {
    const id = new Date().getTime().toString()
    this.tasks.unshift({ 
      id: id,
      userId: userId,
      description: task.description,
      dueDate: task.dueDate,
      title: task.title
    });
  }

  completeTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

}