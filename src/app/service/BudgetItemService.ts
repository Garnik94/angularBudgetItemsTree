import {Observable} from "rxjs";
import {BudgetItem} from "../model/BudgetItem";
import {HttpClient} from "@angular/common/http";
import {map, shareReplay} from "rxjs/operators";
import {Injectable} from "@angular/core";

@Injectable()
export class BudgetItemService {

  private _allBudgetItems$: Observable<BudgetItem[]>;

  constructor(private http: HttpClient) {
    this._allBudgetItems$ = this.http.get("/assets/data/response.json")
      .pipe(
        map((response: any) => response.data),
        shareReplay({bufferSize: 1, refCount: true})
      )
  }

  get allBudgetItems$(): Observable<BudgetItem[]> {
    return this._allBudgetItems$;
  }

  public getDepartmentIdList(budgetItems: BudgetItem[]): number[] {
    const budgetItemGroupSet = new Set<number>();
    for (let budgetItem of budgetItems) {
      budgetItemGroupSet.add(budgetItem.department_id);
    }
    return Array.from(budgetItemGroupSet);
  }

  public getGroupIdList(budgetItems: BudgetItem[]): number[] {
    const budgetItemGroupSet = new Set<number>();
    for (let budgetItem of budgetItems) {
      budgetItemGroupSet.add(budgetItem.group_id);
    }
    return Array.from(budgetItemGroupSet);
  }

  public getCategoryIdList(groupId: number, budgetItems: BudgetItem[]): number[] {
    const budgetItemCategorySet = new Set<number>();
    for (let budgetItem of budgetItems) {
      if (budgetItem.group_id === groupId) {
        budgetItemCategorySet.add(budgetItem.category_id);
      }
    }
    return Array.from(budgetItemCategorySet);
  }

  public getSubCategoryIdList(categoryId: number, budgetItems: BudgetItem[]): number[] {
    const budgetItemSubCategorySet = new Set<number>();
    for (let budgetItem of budgetItems) {
      if (budgetItem.category_id === categoryId) {
        budgetItemSubCategorySet.add(budgetItem.sub_cat_id);
      }
    }
    return Array.from(budgetItemSubCategorySet);
  }

  calculateDepartmentBudget(departmentId: number, budgetItems: BudgetItem[]): number {
    let departmentAmountList = new Set<number>();
    budgetItems.forEach(item => departmentAmountList.add(Number(item.current_cat_am)));
    return Array.from(departmentAmountList).reduce((acc, value) => acc += value);
  }

  calculateGroupBudget(groupId: number, budgetItems: BudgetItem[]): number {
    return Number(budgetItems.find(item => item.group_id === groupId).current_cat_am);
  }

  calculateCategoryBudget(categoryId: number, budgetItems: BudgetItem[]): number {
    return Number(budgetItems.find(item => item.category_id === categoryId).current_cat_am);

  }

  calculateSubCategoryBudget(subCategoryId: number, budgetItems: BudgetItem[]): number {
    return Number(budgetItems.find(item => item.sub_cat_id === subCategoryId).current_sub_cat_am);
  }


}
