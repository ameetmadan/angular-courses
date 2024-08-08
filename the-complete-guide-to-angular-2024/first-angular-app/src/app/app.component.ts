import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";

// metadata for the component, where to get styles and other information
@Component({
  selector: 'app-root', // the selector is what angular uses to find the component
  standalone: true, // if the component is a module of another component, this is false
  imports: [RouterOutlet, HeaderComponent, UserComponent], // the imports are the components that are used in this component
  templateUrl: './app.component.html', // the template is the html that will be rendered
  styleUrl: './app.component.css' // can't clash with other styles
})
export class AppComponent {
  title = 'first-angular-app';
}
