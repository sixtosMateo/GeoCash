export class Account {
  savingAccountSummary: {
    displayAccountNumber: string;
    currentBalance: number
  };
  totalCurrentBalance: {
    localCurrencyBalanceAmount: number
  };
  totalAvailableBalance: {
    localCurrencyCode: string;
    localCurrencyBalanceAmount: number
  };
}
