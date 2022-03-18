import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ControlService {
  localStorage = window.localStorage;
  currentPage: number = 0;
  pageChanged = new BehaviorSubject<number>(0);

  constructor() {
    const storedIndex = this.localStorage.getItem('currentPageIndex');
    this.pageChanged.next(storedIndex? +storedIndex : this.currentPage);
  }

  setCurrentPage(page: number) {
    this.currentPage = page;
    this.pageChanged.next(this.currentPage);
  }

  getCurrentPage() {
    return this.currentPage;
  }

  getLocalStorageIndex() {
    const index = this.localStorage.getItem('currentPageIndex') || '0';
    this.currentPage = +index;
    return this.currentPage;
  }

}
