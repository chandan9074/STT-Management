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
  sourceurl: string;
  module: string;
  domain: string;
  subDomain: string;
  distributionSource: string;
  title: string;
  isAge: boolean;
  sourceType: string;
  sourceFile: string;
  description: string;
  date: string

}

export type createScriptDt = {
  file: any;
  sourceurl: string;
  module: string;
  sourceType: string;
  domain: string;
  subDomain: string;
  distributionSource: string;
  isAge: boolean;
  title: string;
  description: string;
}
