export type totalAmountDisbursedDT = {
  totalAmount: string;
  totalHours: string;
  yearlyHistory: {
    yearList: number[];
    yearlyData: yearlyDataDT[];
  };
};

export type yearlyDataDT = {
    year: number;
    maxAmount: number;
    yearData: yearDataDT[];
};

export type yearDataDT = {
    month: string;
    totalDisbursed: number | null;
    validHours: number | null;
    disbursed: disbursedDT[];
}

export type disbursedDT = {
    amount: number;
    hours: number;
    day: string;
}
