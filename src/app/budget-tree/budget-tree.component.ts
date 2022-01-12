import {Component, OnInit} from '@angular/core';
import {BudgetItemService} from "../service/BudgetItemService";

@Component({
  selector: 'budget-tree',
  templateUrl: './budget-tree.component.html',
  styleUrls: ['./budget-tree.component.css']
})
export class BudgetTreeComponent implements OnInit {

  isGroupPressed: boolean = false;
  isCategoryPressed: boolean[] = []
  isSubCategoryPressed: Array<boolean[]> = [];

  constructor(public budgetItemService: BudgetItemService) {
  }

  ngOnInit(): void {
    this.pushValueInCategoryPressed();
    this.pushValueInSubCategoryPressed();
  }

  pushValueInCategoryPressed() {
    this.budgetItemService.allBudgetItems$.subscribe(items => {
        for (let groupId of this.budgetItemService.getGroupIdList(items)) {
          this.isCategoryPressed.push(false);
        }
      }
    )
  }

  pushValueInSubCategoryPressed() {
    this.budgetItemService.allBudgetItems$.subscribe(items => {
        for (let groupId of this.budgetItemService.getGroupIdList(items)) {
          for (let categoryId of this.budgetItemService.getCategoryIdList(groupId, items))
            this.isSubCategoryPressed.push(Array<boolean>(this.budgetItemService.getCategoryIdList(groupId, items).length));
        }
        console.log(this.isSubCategoryPressed)
      }
    )
  }


}
