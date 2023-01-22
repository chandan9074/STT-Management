export type sideDrawerDT = {
    name:string;
    route: string;
    icon:string;
    links:links[]
}

export type links = {
    name:string;
    route:string;
    links:links[]   
}