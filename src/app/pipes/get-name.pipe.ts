import { Pipe, PipeTransform } from '@angular/core';
import {BudgetItem} from "../model/BudgetItem";

@Pipe({
  name: 'getName'
})
export class GetNamePipe implements PipeTransform {

  transform(value: number, fieldName: string, budgetItems: BudgetItem[]): string {
    if (fieldName === "Group"){
      return budgetItems.find(budgetItem => budgetItem.group_id === value).group_nm;
    } else if (fieldName === "Category") {
      return budgetItems.find(budgetItem => budgetItem.category_id === value).category_nm;
    } else {
      return budgetItems.find(budgetItem => budgetItem.sub_cat_id === value).sub_cat_nm;
    }

  }

}
