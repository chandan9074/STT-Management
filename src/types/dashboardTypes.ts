export type overTheTimeGDT = {
  id: string;
  year: number;
  month: string;
  maxReceivedHour: number;
  dayData: dayDataDT[];
};

export type dayDataDT = {
  id: string;
  day: string;
  receivedHour: number;
  lastUpdate: string;
  hourData: hourDataDT[];
  accuracy: number;
};

export type hourDataDT = {
  id: string;
  title: string;
  hour: number;
};

// {
//     id: string;
//     validHour: number;
//   },
//   {
//     id: string;
//     inValidHour: number;
//   },
//   {
//     id: string;
//     notCheckedHour: number;
//   }
