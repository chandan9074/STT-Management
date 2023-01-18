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
