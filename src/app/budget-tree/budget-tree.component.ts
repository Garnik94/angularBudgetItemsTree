import {Component, Input, OnInit} from '@angular/core';
import {BudgetItemService} from "../service/BudgetItemService";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {BudgetItem} from "../model/BudgetItem";

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

  shawAllDepartments() {
    this.isGroupPressed = false;
    this.isCategoryPressed.fill(false);
    for (let i = 0; i < this.isSubCategoryPressed.length; i++) {
      this.isSubCategoryPressed[i].fill(false);
    }
  }

  shawAllGroups() {
    this.isGroupPressed = true;
    this.isCategoryPressed.fill(false);
    for (let i = 0; i < this.isSubCategoryPressed.length; i++) {
      this.isSubCategoryPressed[i].fill(false);
    }
  }

  shawAllCategories() {
    this.isGroupPressed = true;
    this.isCategoryPressed.fill(true);
    for (let i = 0; i < this.isSubCategoryPressed.length; i++) {
      this.isSubCategoryPressed[i].fill(false);
    }
  }

  shawAllSubCategories() {
    this.isGroupPressed = true;
    this.isCategoryPressed.fill(true);
    for (let i = 0; i < this.isSubCategoryPressed.length; i++) {
      this.isSubCategoryPressed[i].fill(true);
    }
  }

  getLevelsCount(item: BudgetItem[]): number[]  {
    let countOfLevels = 0;
    for (let key in item[0]){
      if (key.includes("id")){
        countOfLevels++;
      }
    }
    return Array(countOfLevels);
  }


}
