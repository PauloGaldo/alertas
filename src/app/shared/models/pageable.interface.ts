export interface Pageable<ARRAY> {
    content: ARRAY;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    size: number;
    totalElements: number;
    totalPages: number;
    sort: any;
    pageable: any;
}
