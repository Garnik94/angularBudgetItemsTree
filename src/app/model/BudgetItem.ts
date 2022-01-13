export class BudgetItem {

  constructor(private _department_id: number,
              private _department_nm: string,
              private _current_department_am: string,
              private _group_id: number,
              private _group_nm: string,
              private _current_group_am: string,
              private _category_id: number,
              private _category_nm: string,
              private _current_cat_am: string,
              private _sub_cat_id: number,
              private _sub_cat_nm: string,
              private _current_sub_cat_am: string) {
  }

  get department_id(): number {
    return this._department_id;
  }

  set department_id(value: number) {
    this._department_id = value;
  }

  get department_nm(): string {
    return this._department_nm;
  }

  set department_nm(value: string) {
    this._department_nm = value;
  }

  get current_department_am(): string {
    return this._current_department_am;
  }

  set current_department_am(value: string) {
    this._current_department_am = value;
  }

  get group_id(): number {
    return this._group_id;
  }

  set group_id(value: number) {
    this._group_id = value;
  }

  get group_nm(): string {
    return this._group_nm;
  }

  set group_nm(value: string) {
    this._group_nm = value;
  }

  get current_group_am(): string {
    return this._current_group_am;
  }

  set current_group_am(value: string) {
    this._current_group_am = value;
  }

  get category_id(): number {
    return this._category_id;
  }

  set category_id(value: number) {
    this._category_id = value;
  }

  get category_nm(): string {
    return this._category_nm;
  }

  set category_nm(value: string) {
    this._category_nm = value;
  }

  get current_cat_am(): string {
    return this._current_cat_am;
  }

  set current_cat_am(value: string) {
    this._current_cat_am = value;
  }

  get sub_cat_id(): number {
    return this._sub_cat_id;
  }

  set sub_cat_id(value: number) {
    this._sub_cat_id = value;
  }

  get sub_cat_nm(): string {
    return this._sub_cat_nm;
  }

  set sub_cat_nm(value: string) {
    this._sub_cat_nm = value;
  }

  get current_sub_cat_am(): string {
    return this._current_sub_cat_am;
  }

  set current_sub_cat_am(value: string) {
    this._current_sub_cat_am = value;
  }

}
