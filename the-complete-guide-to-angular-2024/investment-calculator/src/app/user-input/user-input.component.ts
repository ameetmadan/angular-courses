import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentResultsService } from '../investment-results/investment-results.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})

export class UserInputComponent {
  initialAmount = 0;
  annualInvestmentAmount = 0;
  expectedReturn = 0;
  investmentPeriod = 0;

  private investmentResultsService: InvestmentResultsService = inject(InvestmentResultsService); 

  onSubmit() {
    console.log(this.initialAmount, this.annualInvestmentAmount, this.expectedReturn, this.investmentPeriod);
    this.investmentResultsService.calculate({
      initialInvestment: this.initialAmount,
      annualInvestment: this.annualInvestmentAmount,
      expectedReturn: this.expectedReturn,
      durationInYears: this.investmentPeriod
    });
  }

}
