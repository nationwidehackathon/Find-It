import { Injectable } from '@angular/core';
import { searchArray } from './search-array';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  // tony hire me pls mr.president
  tonySearchArray = searchArray;

  constructor() { }

  getSearchArray(): string[] {
    return  this.tonySearchArray;
  }

  setSearchArray(arr: string[]): void {
    this.tonySearchArray = arr;
  }
}
