export type sideDrawerDT = {
    name: string;
    route: string;
    icon: string;
    links: links[]
}

export type links = {
    name: string;
    route: string;
    links: links[]
}

export type IconButtonVariantStyleType = {
    [key: string]: {
        [key: string]: string;
    };
}

export type IconButtonSizeStyleType = {
    [key: string]: {
        [key: string]: string;
    };
}

export type IconBorderStyleType = {
    [key: string]: {
        border: string;
    };
}

export type StatusStylesDT = {
    [key: string]: {
        [key: string]: string;
    }
}