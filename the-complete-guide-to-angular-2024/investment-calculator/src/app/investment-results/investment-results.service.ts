import { Injectable } from "@angular/core";
import { Investment } from "./investment-results.component";

type InvestmentResult = {
  year: number,
  interest: number,
  valueEndOfYear: number,
  annualInvestment: number,
  totalInterest: number,
  totalAmountInvested: number;
};

@Injectable({ providedIn: 'root' })
export class InvestmentResultsService {
  tableData: InvestmentResult[] = [];

  calculate(investment: Investment) {
    let investmentValue = investment.initialInvestment;

    for (let i = 0; i < investment.durationInYears; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (investment.expectedReturn / 100);
      investmentValue += interestEarnedInYear + investment.annualInvestment;
      const totalInterest =
        investmentValue - investment.annualInvestment * year - investment.initialInvestment;
      this.tableData.push({
        year: year,
        interest: Math.round(interestEarnedInYear),
        valueEndOfYear: Math.round(investmentValue),
        annualInvestment: Math.round(investment.annualInvestment),
        totalInterest: Math.round(totalInterest),
        totalAmountInvested: Math.round(investment.initialInvestment + investment.annualInvestment * year),
      });
  }
}

  getTableData(): InvestmentResult[] {
    console.log(this.tableData);
    return this.tableData;
  }
  
}