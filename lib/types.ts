export interface TokenSale {
  id: string;
  fromAmount: string;
  fromCurrency: string;
  toAmount: string;
  timeAgo: string;
}

export interface ICOPhase {
  phase: number;
  nextPhaseDate: Date;
  usdtRaised: number;
  listingDate: string;
  holders: number;
  tokenPrice: number;
  totalTokensSold: number;
}

export interface SupportedToken {
  symbol: string;
  name: string;
  icon: string;
}

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
