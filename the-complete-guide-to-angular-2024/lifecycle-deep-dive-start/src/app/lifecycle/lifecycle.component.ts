import {
  Component,
  Input,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
  inject,
  DestroyRef,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css',
})
export class LifecycleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() text?: string;
  private destroyRef = inject(DestroyRef);
  constructor() {
    console.log('CONSTRUCTOR');
    // do not use this for any init logic. bad practice
  }

  ngOnInit() {
    // add your http requests here
    console.log('ngOnInit');
    this.destroyRef.onDestroy(() => {
      console.log('destroyRef ngOnDestroy');
      // use this for any cleanup logic
      // e.g. clearTimeout, remove event listeners, etc.
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes); 
    // changes in the text input (line 33)
  }

  ngDoCheck() {
    // gets invoked a lot, after every change detection cycle
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    // gets invoked after the content (ngContent) has been initialized
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    // gets invoked after the content (ngContent) has been checked
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    // gets invoked after the template view has been initialized
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    // gets invoked after the template view has been checked
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    // gets invoked when the component is destroyed
    // use this for any cleanup logic
    // e.g. clearTimeout, remove event listeners, etc.
    console.log('ngOnDestroy');
  }
}
