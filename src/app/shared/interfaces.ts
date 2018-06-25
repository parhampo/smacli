import { ModuleWithProviders } from '@angular/core';

export interface IProduct {
id?: number;
_id?: string;
productName: string;
auctype: string;
description: string;
releaseDate: string;
website: string;
Highlights:[string];
coverimg: string;
imageUrl:[string];
email: string;
terms:string;
time: string;
tel: string;
shipping:string;
note: string;
address:string;
city: string;
zip: string;
state: string;


}
export interface ICustomer {
    _id?: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    city: string;
    state?: IState;
    stateId?: number;
    zip: number;
    gender: string;
    orderCount?: number;
    orders?: IOrder[];
    orderTotal?: number;
}

export interface IState {
    abbreviation: string;
    name: string;
}

export interface IOrder {
    product: string;
    price: number;
    quantity: number;
    orderTotal?: number;
}

export interface IRouting {
    routes: ModuleWithProviders,
    components: any[]
}

export interface IPagedResults<T> {
    totalRecords: number;
    results: T;
}

export interface ICustomerResponse {
    customer: ICustomer;
    status: boolean;
    error: string;
}
export interface IProductResponse {
    product: IProduct;
    status: boolean;
    error: string;
}