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
  maxAmount: number;
  yearData: yearDataDT[];
};

export type yearDataDT = {
  month: string;
  totalDisbursed: number | null;
  validHours: number | null;
  disbursed: disbursedDT[];
};

export type disbursedDT = {
  amount: number;
  hours: number;
  day: string;
};

export type paymentHistoryDT = {
  id: string,
  name: string,
  role: string,
  email: string,
  phone: string,
  address: string,
  totalPaid: string,
  totalHours: string,
  noOfPayments: number,
  paymentHistory: paymentHistoryDataDT[]
}

export type paymentHistoryDataDT = {
  id: string,
  date: string,
  amount: number,
  hours: number,
}
