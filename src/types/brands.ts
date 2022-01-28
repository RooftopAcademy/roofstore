export type Brand = {
    brandName: string;
    src: string;
    to: string
}

export type CategoryBrand = {
    title: string;
    brands: Array<Brand>;
}

