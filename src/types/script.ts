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
};
export type allScriptResDT = {
  id: string;
  module: string;
  distributionSource: string;
  isAge: boolean;
  domain: string;
  subDomain: string;
  sourceType: string;
  sourceurl: string;
  sourceFile: string;
  title: string;
  description: string;
  date: string

}
