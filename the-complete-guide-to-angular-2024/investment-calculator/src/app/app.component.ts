import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { Investment, InvestmentResultsComponent } from "./investment-results/investment-results.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'essentials-practice';
  investment!: Investment;

  onSubmit(investment: Investment) {
    this.investment = investment;
  }
}
