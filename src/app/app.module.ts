import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BudgetTreeComponent} from './budget-tree/budget-tree.component';
import {BudgetItemService} from "./service/BudgetItemService";
import { GetNamePipe } from './pipes/get-name.pipe';
import { GetIdListsPipe } from './pipes/get-id-lists.pipe';
import { CalculateBudgetPipe } from './pipes/calculate-budget.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BudgetTreeComponent,
    GetNamePipe,
    GetIdListsPipe,
    CalculateBudgetPipe
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
