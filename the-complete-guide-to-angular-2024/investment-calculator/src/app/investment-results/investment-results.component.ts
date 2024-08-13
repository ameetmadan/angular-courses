import { Component, inject, Input, Output } from '@angular/core';
import { InvestmentResultsService } from './investment-results.service';

export type Investment = {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  durationInYears: number;
};

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  private investmentResultsService: InvestmentResultsService = inject(InvestmentResultsService);
  get tableData() {
    return this.investmentResultsService.getTableData();
  }
}
