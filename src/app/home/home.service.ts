import { Injectable } from '@angular/core';

export class Order {
  ID: number;
  OrderNumber: number;
  OrderDate: string;
  DeliveryDate: string;
  SaleAmount: number;
  Terms: string;
  Employee: string;
  StateID: number;
}

export class State {
  ID: number;
  Name: string;
}

let orders: Order[] = [{
  "ID": 1,
  "OrderNumber": 35703,
  "OrderDate": "2017/04/10",
  "DeliveryDate": "2017/04/13 9:00",
  "SaleAmount": 11800,
  "Terms": "15 Days",
  // "CustomerStoreCity": "Los Angeles, CA",
  "Employee": "Harv Mudd",
  "StateID": 5
}, {
  "ID": 4,
  "OrderNumber": 35711,
  "OrderDate": "2017/01/12",
  "DeliveryDate": "2017/01/13 9:00",
  "SaleAmount": 16050,
  "Terms": "15 Days",
  // "CustomerStoreCity": "San Jose, CA",
  "Employee": "Jim Packard",
  
  "StateID": 5
}, {
  "ID": 5,
  "OrderNumber": 35714,
  "OrderDate": "2017/01/22",
  "DeliveryDate": "2017/01/27 9:00",
  "SaleAmount": 14750,
  "Terms": "15 Days",
  // "CustomerStoreCity": "Las Vegas, NV",
  "Employee": "Harv Mudd",
  
  "StateID": 4
}, {
  "ID": 7,
  "OrderNumber": 35983,
  "OrderDate": "2017/02/07",
  "DeliveryDate": "2017/02/10 13:00",
  "SaleAmount": 3725,
  "Terms": "15 Days",
  // "CustomerStoreCity": "Denver, CO",
  "Employee": "Todd Hoffman",
  "StateID": 11
}, {
  "ID": 11,
  "OrderNumber": 38466,
  "OrderDate": "2017/03/01",
  "DeliveryDate": "2017/03/03 17:45",
  "SaleAmount": 7800,
  "Terms": "15 Days",
  //"CustomerStoreCity": "Los Angeles, CA",
  "Employee": "Harv Mudd",
  "StateID": 13
}, {
  "ID": 14,
  "OrderNumber": 39420,
  "OrderDate": "2017/02/15",
  "DeliveryDate": "2017/02/17 11:45",
  "SaleAmount": 20500,
  "Terms": "15 Days",
  //"CustomerStoreCity": "San Jose, CA",
  "Employee": "Jim Packard",
  "StateID": 44
}, {
  "ID": 15,
  "OrderNumber": 39874,
  "OrderDate": "2017/02/04",
  "DeliveryDate": "2017/02/10 15:00",
  "SaleAmount": 9050,
  "Terms": "30 Days",
  //"CustomerStoreCity": "Las Vegas, NV",
  "Employee": "Harv Mudd",
  "StateID": 5
}, {
  "ID": 18,
  "OrderNumber": 42847,
  "OrderDate": "2017/02/15",
  "DeliveryDate": "2017/02/17 8:30",    
  "SaleAmount": 20400,
  "Terms": "30 Days",
  //"CustomerStoreCity": "Casper, WY",
  "Employee": "Todd Hoffman",
  "StateID": 4
}, {
  "ID": 30,
  "OrderNumber": 57429,
  "OrderDate": "2017/05/16",
  "DeliveryDate": "2017/05/19 11:45",
  "SaleAmount": 11050,
  "Terms": "30 Days",
  //"CustomerStoreCity": "Phoenix, AZ",
  "Employee": "Clark Morgan",
  "StateID": 26
}, {
  "ID": 32,
  "OrderNumber": 58292,
  "OrderDate": "2017/05/13",
  "DeliveryDate": "2017/05/19 14:30",
  "SaleAmount": 13500,
  "Terms": "15 Days",
  //"CustomerStoreCity": "Los Angeles, CA",
  "Employee": "Harv Mudd",
  "StateID": 5
}, {
  "ID": 36,
  "OrderNumber": 62427,
  "OrderDate": "2017/01/27",
  "DeliveryDate": "2017/02/03 18:00",
  "SaleAmount": 23500,
  "Terms": "15 Days",
  //"CustomerStoreCity": "Las Vegas, NV",
  "Employee": "Harv Mudd",
  "StateID": 11
}, {
  "ID": 39,
  "OrderNumber": 65977,
  "OrderDate": "2017/02/05",
  "DeliveryDate": "2017/02/10 13:15",
  "SaleAmount": 2550,
  "Terms": "15 Days",
  //"CustomerStoreCity": "Casper, WY",
  "Employee": "Todd Hoffman",
  "StateID": 5
}, {
  "ID": 42,
  "OrderNumber": 68428,
  "OrderDate": "2017/04/10",
  "DeliveryDate": "2017/04/14 11:30",
  "SaleAmount": 10500,
  "Terms": "15 Days",
  //"CustomerStoreCity": "Los Angeles, CA",
  "Employee": "Harv Mudd",
  "StateID": 29
}, {
  "ID": 43,
  "OrderNumber": 69477,
  "OrderDate": "2017/03/09",
  "DeliveryDate": "2017/03/10 12:00",
  "SaleAmount": 14200,
  "Terms": "15 Days",
  //"CustomerStoreCity": "Anaheim, CA",
  "Employee": "Harv Mudd",
  "StateID": 13

 }];

let states: State[] = [{
  "ID": 1,
  "Name": "Alabama"
}, {
  "ID": 2,
  "Name": "Alaska"
}, {
  "ID": 3,
  "Name": "Arizona"
}, {
  "ID": 4,
  "Name": "Arkansas"
}, {
  "ID": 5,
  "Name": "California"
}, {
  "ID": 6,
  "Name": "Colorado"
}, {
  "ID": 7,
  "Name": "Connecticut"
}, {
  "ID": 8,
  "Name": "Delaware"
}, {
  "ID": 9,
  "Name": "District of Columbia"
}, {
  "ID": 10,
  "Name": "Florida"
}, {
  "ID": 11,
  "Name": "Georgia"
}, {
  "ID": 12,
  "Name": "Hawaii"
}, {
  "ID": 13,
  "Name": "Idaho"
}, {
  "ID": 14,
  "Name": "Illinois"
}, {
  "ID": 15,
  "Name": "Indiana"
}, {
  "ID": 16,
  "Name": "Iowa"
}, {
  "ID": 17,
  "Name": "Kansas"
}, {
  "ID": 18,
  "Name": "Kentucky"
}, {
  "ID": 19,
  "Name": "Louisiana"
}, {
  "ID": 20,
  "Name": "Maine"
}, {
  "ID": 21,
  "Name": "Maryland"
}, {
  "ID": 22,
  "Name": "Massachusetts"
}, {
  "ID": 23,
  "Name": "Michigan"
}, {
  "ID": 24,
  "Name": "Minnesota"
}, {
  "ID": 25,
  "Name": "Mississippi"
}, {
  "ID": 26,
  "Name": "Missouri"
}, {
  "ID": 27,
  "Name": "Montana"
}, {
  "ID": 28,
  "Name": "Nebraska"
}, {
  "ID": 29,
  "Name": "Nevada"
}, {
  "ID": 30,
  "Name": "New Hampshire"
}, {
  "ID": 31,
  "Name": "New Jersey"
}, {
  "ID": 32,
  "Name": "New Mexico"
}, {
  "ID": 33,
  "Name": "New York"
}, {
  "ID": 34,
  "Name": "North Carolina"
}, {
  "ID": 35,
  "Name": "Ohio"
}, {
  "ID": 36,
  "Name": "Oklahoma"
}, {
  "ID": 37,
  "Name": "Oregon"
}, {
  "ID": 38,
  "Name": "Pennsylvania"
}, {
  "ID": 39,
  "Name": "Rhode Island"
}, {
  "ID": 40,
  "Name": "South Carolina"
}, {
  "ID": 41,
  "Name": "South Dakota"
}, {
  "ID": 42,
  "Name": "Tennessee"
}, {
  "ID": 43,
  "Name": "Texas"
}, {
  "ID": 44,
  "Name": "Utah"
}, {
  "ID": 45,
  "Name": "Vermont"
}, {
  "ID": 46,
  "Name": "Virginia"
}, {
  "ID": 47,
  "Name": "Washington"
}, {
  "ID": 48,
  "Name": "West Virginia"
}, {
  "ID": 49,
  "Name": "Wisconsin"
}, {
  "ID": 50,
  "Name": "Wyoming"
}, {
  "ID": 51,
  "Name": "North Dakota"
}];


@Injectable()
export class HomeService {
    getOrders(): Order[] {
        return orders;
    }
    getStates() {
      return states;
  }
}
