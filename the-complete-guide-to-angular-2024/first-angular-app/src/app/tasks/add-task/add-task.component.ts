import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task/task.component';

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
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTask>();
  // title = signal('');
  // summary = signal('');
  // dueDate = signal(new Date());  
  title = '';
  description = '';
  dueDate = new Date().toString();
  onCancel() {
    this.close.emit();
  }
  onSubmit() {
    this.add.emit({ 
      title: this.title, 
      description: this.description, 
      dueDate: this.dueDate
    });
    this.close.emit();
  }
}
