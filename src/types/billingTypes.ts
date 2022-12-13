export type totalAmountDisbursedDT = {
  // yearlyHistory: {
  yearList: number[];
  totalAmount: string;
  totalHours: string;
  yearlyData: yearlyDataDT[];
  // };
};

export type yearlyDataDT = {
  year: number;
  maxDisbursed: number;
  yearData: yearDataDT[];
};

export type yearDataDT = {
  month: string;
  totalDisbursed: number | null;
  validHours: number | null;
  monthlyDisbursed: disbursedDT[];
};

export type disbursedDT = {
  amount: number;
  hours: number;
  day: string;
};
