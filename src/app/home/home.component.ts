import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { DxDataGridComponent } from 'devextreme-angular';
import { Order, HomeService, State } from './home.service';

// if(!/localhost/.test(document.location.host)) {
//   enableProdMode();
// }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
    orders: Order[];
    states: State[];
    events: Array<string> = [];


    saleAmountHeaderFilter: any;
    applyFilterTypes: any;
    currentFilter: any;
    showFilterRow: boolean;
    showHeaderFilter: boolean;
    // positionDisableSorting = false;

    // Code for menu bar
  @ViewChild('sidebar')
    public sidebar: SidebarComponent;
    public width: string = '290px';
    public onCreated(args: any) {
         this.sidebar.element.style.visibility = '';
    }
    openClick(): void {
        this.sidebar.toggle();
    }



  constructor( service: HomeService ) { 
    this.orders = service.getOrders();
    this.states = service.getStates();
        this.showFilterRow = true;
        this.showHeaderFilter = true;
        this.applyFilterTypes = [{
          key: "auto",
          name: "Immediately"
      }, {
          key: "onClick",
          name: "On Button Click"
      }];
      this.saleAmountHeaderFilter = [{
        text: "Less than $3000",
        value: ["SaleAmount", "<", 3000]
    }, {
        text: "$3000 - $5000",
        value: [
            ["SaleAmount", ">=", 3000],
            ["SaleAmount", "<", 5000]
        ]
    }, {
        text: "$5000 - $10000",
        value: [
            ["SaleAmount", ">=", 5000],
            ["SaleAmount", "<", 10000]
        ]
    }, {
        text: "$10000 - $20000",
        value: [
            ["SaleAmount", ">=", 10000],
            ["SaleAmount", "<", 20000]
        ]
    }, {
        text: "Greater than $20000",
        value: ["SaleAmount", ">=", 20000]
    }]; 
    this.currentFilter = this.applyFilterTypes[0].key;
    this.orderHeaderFilter = this.orderHeaderFilter.bind(this);
   }

// Code for Editing and Deleting
logEvent(eventName) {
    this.events.unshift(eventName);
}

clearEvents() {
    this.events = [];
}
   private static getOrderDay(rowData) {
    return (new Date(rowData.OrderDate)).getDay();
}
calculateFilterExpression(value, selectedFilterOperations, target) {
  let column = this as any;
  if(target === "headerFilter" && value === "weekends") {
      return [[HomeComponent.getOrderDay, "=", 0], "or", [HomeComponent.getOrderDay, "=", 6]];
  }
  return column.defaultCalculateFilterExpression.apply(this, arguments);
}
orderHeaderFilter(data) {
  data.dataSource.postProcess = (results) => {
      results.push({
          text: "Weekends",
          value: "weekends"
      });
      return results;
  };
}
clearFilter() {
  this.dataGrid.instance.clearFilter();
}

  ngOnInit(): void {
  }
  


}
