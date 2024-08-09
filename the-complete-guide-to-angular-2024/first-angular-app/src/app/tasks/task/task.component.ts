import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';

export type Task = {
  id: string;
  dueDate: string;
  userId: string;
  title: string;
  description: string;
};

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Output() complete = new EventEmitter<string>();
  @Input({ required: true }) task!: Task;
  onComplete() {
    this.complete.emit(this.task.id);
  }
}
