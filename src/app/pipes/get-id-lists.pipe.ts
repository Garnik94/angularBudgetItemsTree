import {Pipe, PipeTransform} from '@angular/core';
import {BudgetItem} from "../model/BudgetItem";

@Pipe({
  name: 'getIdLists'
})
export class GetIdListsPipe implements PipeTransform {

  transform(budgetItems: BudgetItem[], property: string, id?: number): number[] {
    const budgetItemSet = new Set<number>();
    if (property === "Department") {
      for (let budgetItem of budgetItems) {
        budgetItemSet.add(budgetItem.department_id);
      }
      return Array.from(budgetItemSet);
    } else if (property === "Group") {
      for (let budgetItem of budgetItems) {
        budgetItemSet.add(budgetItem.group_id);
      }
      return Array.from(budgetItemSet);
    } else if (property === "Category") {
      for (let budgetItem of budgetItems) {
        if (budgetItem.group_id === id) {
          budgetItemSet.add(budgetItem.category_id);
        }
      }
      return Array.from(budgetItemSet);
    } else {
      for (let budgetItem of budgetItems) {
        if (budgetItem.category_id === id) {
          budgetItemSet.add(budgetItem.sub_cat_id);
        }
      }
      return Array.from(budgetItemSet);
    }
  }

}
