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

  public getBudgetItemDepartment(departmentId: number, budgetItems: BudgetItem[]): string {
    return budgetItems.find(budgetItem => budgetItem.department_id == departmentId).department_nm;
  }

  public getBudgetItemGroupList(budgetItems: BudgetItem[]): string[] {
    const budgetItemGroupSet = new Set<string>();
    for (let budgetItem of budgetItems) {
      // if (budgetItem.department_nm === departmentName){
        budgetItemGroupSet.add(budgetItem.group_nm);
      // }
    }
    return Array.from(budgetItemGroupSet);
  }

  public getBudgetItemCategoryList(budgetItems: BudgetItem[]): string[] {
    const budgetItemCategorySet = new Set<string>();
    for (let budgetItem of budgetItems) {
      // if (budgetItem.department_nm === departmentName){
      budgetItemCategorySet.add(budgetItem.category_nm);
      // }
    }
    return Array.from(budgetItemCategorySet);
  }



}
