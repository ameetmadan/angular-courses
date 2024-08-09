import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

export type NewTask = {
  title: string;
  description: string;
  dueDate: string;
}

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule], // automatically prevents default form submission
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})

export class AddTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  // title = signal('');
  // summary = signal('');
  // dueDate = signal(new Date());

  title = '';
  description = '';
  dueDate = new Date().toString();

  private tasksService: TasksService = inject(TasksService); 
  // injection token, alternative to constructor injection

  onCancel() {
    this.close.emit();
  }
  onSubmit() {
    this.tasksService.addTask({ 
      title: this.title, 
      description: this.description, 
      dueDate: this.dueDate 
    }, this.userId);
    this.close.emit();
  }
}
