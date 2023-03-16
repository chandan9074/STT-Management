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
  id?: string;
  sourceUrl: string;
  module: string;
  domain: string;
  subdomain: string;
  distributionSource?: string;
  title: string;
  isAge?: boolean;
  sourceType: string;
  sourceFile: string;
  description: string;
  date?: string,
  sourceFileName: string
  // frequency?: number;

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
