import {Pipe, PipeTransform} from '@angular/core';
import {BudgetItem} from "../model/BudgetItem";

@Pipe({
  name: 'calculateBudget'
})
export class CalculateBudgetPipe implements PipeTransform {

  transform(budgetItems: BudgetItem[], id: number, property: string): number {
    if (property === "Department") {
      let departmentAmountList = new Set<number>();
      budgetItems.forEach(item => departmentAmountList.add(Number(item.current_cat_am)));
      return Array.from(departmentAmountList).reduce((acc, value) => acc += value);
    } else if (property === "Group") {
      return Number(budgetItems.find(item => item.group_id === id).current_cat_am);
    } else if (property === "Category") {
      return Number(budgetItems.find(item => item.category_id === id).current_cat_am);
    } else {
      return Number(budgetItems.find(item => item.sub_cat_id === id).current_sub_cat_am);
    }
  }

}
