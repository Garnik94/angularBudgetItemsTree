import {Component, OnInit} from '@angular/core';
import {BudgetItemService} from "../service/BudgetItemService";

@Component({
  selector: 'budget-tree',
  templateUrl: './budget-tree.component.html',
  styleUrls: ['./budget-tree.component.css']
})
export class BudgetTreeComponent implements OnInit {

  isGroupPressed: boolean = false;
  isCategoryPressed: boolean = false;

  shawAdvertising() {

  }

  constructor(public budgetItemService: BudgetItemService) {
  }

  ngOnInit(): void {
  }

  printResponse() {
    this.budgetItemService.allBudgetItems$
      .subscribe(data => console.log(data));
  }

}
