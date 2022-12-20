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
// BILLINGS TYPE----------------
export type allBillingParamsDT={
  pageSize:number;
  type:string;
  role:string
}
export type allBillingsDT={
  role:string;
  type:string;
  billingInfo: billingInfoDT[];
}

export type billingInfoDT = {
  id: number;
  date: string;
  hour: number;
  amountPaid: number;
}
export type lastBillingParamsDT={
  page:number;
  pageSize:number;
  type:string;
  role:string
}
export type lastBillingsDT={
  paid:number
  dateOfPayment:string;
  role:string;
  type:string;
  billingInfo: lastBillingInfoDT[];
}

export type lastBillingInfoDT = {
  id: number;
  manager:roleInfo
  hour: number;
  amountPaid: number;
}
export type roleInfo={
  name:string;
  locality:string;
  image:string
}

