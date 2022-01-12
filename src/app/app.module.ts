import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BudgetTreeComponent} from './budget-tree/budget-tree.component';
import {BudgetItemService} from "./service/BudgetItemService";
import { GetNamePipe } from './pipes/get-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BudgetTreeComponent,
    GetNamePipe
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
