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

export type createCollectDT = {
  id: string;
  module: string;
  role: string;
  data: {
    createData: createDataDT;
    collectData: collectDataDT;
  };
};

export type createDataDT = {
  id: string;
  name: string;
  target: string;
  totalValid: number;
  totalInvalid: number;
  notChecked: number;
  totalReceived: number;
  lastUpdate: string;
  achieved: number;
  distributionSourceWise: distributionSourceWiseDT[];
  domainWise: createCollectSimilarPropertyDT[];
  genderWise: genderWiseDT[];
  ageWise: createCollectSimilarPropertyDT[];
  localityWise: createCollectSimilarPropertyDT[];
  economicSituationWise: createCollectSimilarPropertyDT[];
  educationWise: createCollectSimilarPropertyDT[];
  professionWise: createCollectSimilarPropertyDT[];
  recordingArea: createCollectSimilarPropertyDT[];
  recordingDistance: createCollectSimilarPropertyDT[];
};

export type collectDataDT = {
  id: string;
  name: string;
  target: string;
  totalValid: number;
  totalInvalid: number;
  notChecked: number;
  totalReceived: number;
  lastUpdate: string;
  achieved: number;
  distributionSourceWise: distributionSourceWiseDT[];
  domainWise: createCollectSimilarPropertyDT[];
  genderWise: genderWiseDT[];
  ageWise: createCollectSimilarPropertyDT[];
  localityWise: createCollectSimilarPropertyDT[];
};

export type createCollectSimilarPropertyDT = {
  id: string;
  name: string;
  totalReceived: number;
  totalValid: number;
  totalInvalid: number;
  notChecked: number;
  lastUpdate: string;
  contribution: number;
};

export type distributionSourceWiseDT = {
  id: string;
  name: string;
  target: number;
  totalValid: number;
  totalInvalid: number;
  notChecked: number;
  totalReceived: number;
  lastUpdate: string;
  achieved: number;
};

export type genderWiseDT = {
  id: string;
  name: string;
  totalReceived: number;
  totalValid: number;
  totalInvalid: number;
  notChecked: number;
  lastUpdate: string;
  contribution: number;
  speakers: number;
};
