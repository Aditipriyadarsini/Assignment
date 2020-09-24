import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { 
  DxDataGridModule,
  DxSelectBoxModule,
  DxCheckBoxModule,
  DxButtonModule } from 'devextreme-angular';

import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    DxDataGridModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
