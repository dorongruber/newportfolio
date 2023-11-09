import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ControlService {
  localStorage = window.localStorage;
  currentPage: number = 0;
  pageChanged = new BehaviorSubject<number>(0);

  constructor() {
    this.pageChanged.next(this.currentPage);
  }

  setCurrentPage(page: number) {
    this.currentPage = page;
    this.pageChanged.next(this.currentPage);
  }

  getCurrentPage() {
    return this.currentPage;
  }

}
