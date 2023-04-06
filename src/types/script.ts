import { roleDT } from "./billingTypes";

export type FilterDT = {
  dataType: string[];
  distributionSource: string[];
  domain: string[];
  subDomain: subDomainDT[];
};

export type subDomainDT = {
  name: string;
  subDomain: string[];
};
// Script API
export type getAllScriptsParamsDT = {
  role: string;
  module?: string;
  distribution?: string;
  domain?: string;
  subdomain?: string;
  page?: number;
  pageSize?: number;
};
export type allScriptResDT = {
  scripts: scriptResDT[];
  totalNumberOfScripts: number;
  // frequency?: number;
}

export type scriptResDT = {
  id?: string;
  sourceUrl: string;
  module: string;
  domain: string;
  subdomain: string;
  distributionSource?: string;
  title: string;
  isAge?: boolean;
  sourceType: string;
  sourceFile?: string;
  description: string;
  date?: string,
  sourceFileName: string
}

// export type createScriptDt = {
//   sourceFile: any;
//   sourceUrl: string;
//   module: string;
//   sourceType: string;
//   domain: string;
//   subdomain: string;
//   distributionSource: string;
//   isAge: boolean;
//   title: string;
//   description: string;
// }

export type remarkDt = {
  dateTime: string;
  role: roleDT;
  remark: string
}

export type scriptParamDT = {
  id: string;
  role: string;
}

export type scriptDeleteParamDT = {
  role: string;
  id: string;
}