export type HeaderChild = {
    id: number;
    name: string;
    thumb: string;
    inside: number;
    icon?: string | null;
    display_type: number;
};

interface Articles {
    desc: string;
    id: number;
    title: string;
}

export type Header = {
    id: number;
    name: string;
    thumb: string;
    inside: number;
    display_type: number;
    icon?: string | null;

    children: HeaderChild[];
}[];

export type Settings = {
    phone: string;
    address: string;
    email: string;
    iframe_map: string;
};
export type Setting = {
    headers: Header;
    settings: Settings;
    articles: Articles[];
};
