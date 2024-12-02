export interface NavbarDropdownMultipleData {
    label: string;
    url: string;
    columns: {
        items: {
            label: string;
            href: string;
            image: string;
        }[];
    }[];
} 
