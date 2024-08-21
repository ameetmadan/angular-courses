import { Component, ContentChild, ElementRef, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, // if needed
})
export class ControlComponent {
  @ContentChild('input') private input?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  label = input.required<string>();
}
