import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BudgetTreeComponent} from './budget-tree/budget-tree.component';
import {BudgetItemService} from "./service/BudgetItemService";

@NgModule({
  declarations: [
    AppComponent,
    BudgetTreeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    BudgetItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
