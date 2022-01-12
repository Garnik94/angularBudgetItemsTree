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

  set allBudgetItems$(value: Observable<BudgetItem[]>) {
    this._allBudgetItems$ = value;
  }

  public getDepartmentNameById(departmentId: number, budgetItems: BudgetItem[]): string {
    return budgetItems.find(budgetItem => budgetItem.department_id === departmentId).department_nm;
  }

  public getGroupNameById(groupId: number, budgetItems: BudgetItem[]): string {
    return budgetItems.find(budgetItem => budgetItem.group_id === groupId).group_nm;
  }

  public getCategoryNameById(categoryId: number, budgetItems: BudgetItem[]): string {
    return budgetItems.find(budgetItem => budgetItem.category_id === categoryId).category_nm;
  }

  public getSubCategoryNameById(subCategoryId: number, budgetItems: BudgetItem[]): string {
    return budgetItems.find(budgetItem => budgetItem.sub_cat_id === subCategoryId).sub_cat_nm;
  }


  public getGroupList(budgetItems: BudgetItem[]): number[] {
    const budgetItemGroupSet = new Set<number>();
    for (let budgetItem of budgetItems) {
      budgetItemGroupSet.add(budgetItem.group_id);
    }
    return Array.from(budgetItemGroupSet);
  }

  public getCategoryList(groupId: number, budgetItems: BudgetItem[]): number[] {
    const budgetItemCategorySet = new Set<number>();
    for (let budgetItem of budgetItems) {
      if (budgetItem.group_id === groupId) {
        budgetItemCategorySet.add(budgetItem.category_id);
      }
    }
    return Array.from(budgetItemCategorySet);
  }

  public getSubCategoryList(categoryId: number, budgetItems: BudgetItem[]): number[] {
    const budgetItemSubCategorySet = new Set<number>();
    for (let budgetItem of budgetItems) {
      if (budgetItem.category_id === categoryId) {
        budgetItemSubCategorySet.add(budgetItem.sub_cat_id);
      }
    }
    return Array.from(budgetItemSubCategorySet);
  }


}
