import managerImage from "../assets/Icons/manager.png";

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
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  address: string;
  totalPaid: string;
  totalHours: string;
  noOfPayments: number;
  paymentHistory: paymentHistoryDataDT[];
};

export type paymentHistoryDataDT = {
  id: string;
  date: string;
  amount: number;
  hours: number;
};
// BILLINGS TYPE----------------
export type allBillingParamsDT = {
  pageSize: number;
  type: string;
  role: string;
};
export type allBillingsDT = {
  role: string;
  type: string;
  billingInfo: billingInfoDT[];
};

export type billingInfoDT = {
  id: number;
  date: string;
  hour: number;
  amountPaid: number;
};
export type lastBillingParamsDT = {
  page: number;
  pageSize: number;
  type: string;
  role: string;
};
export type lastBillingsDT = {
  paid: number;
  dateOfPayment: string;
  role: string;
  type: string;
  billingInfo: lastBillingInfoDT[];
};

export type lastBillingInfoDT = {
  id: number;
  userInfo: roleInfo;
  hour: number;
  amountPaid: number;
};
export type roleInfo = {
  name: string;
  locality: string;
  image: string;
};

export type timeWiseDisbursementParamsDT = {
  role: string;
  module: string;
  start?: string;
  end?: string;
};

export type timeWiseDisbursementDT = {
  role: string;
  type: string;
  totalDisbursedAmount: number;
  totalValidHours: number;
  data: timeWiseYearDT[];
};

export type timeWiseYearDT = {
  id: string;
  year: number;
  month: string;
  totalAmount: number;
  totalHours: number;
  disbursed: timeWiseDisbursedDT[];
};

export type timeWiseDisbursedDT = {
  amount: number;
  day: string;
  hours: number;
};

export type roleParamsDT = {
  id: string;
  type: string;
  role: string;
};

export type roleDT = {
  id: string;
  name: string;
  role: string;
  contact: string;
  address: string;
};

export type paymentHistoryParamsDT = {
  id: string;
  module: string;
  start?: string;
  end?: string;
  page: number;
  pageSize: number;
};
