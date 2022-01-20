import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private list: any[] = [
    {
      "name": "figura",
      "tipo": "1"
    },
    {
      "name": "figura-2",
      "tipo": "2"
    },
    {
      "name": "figura-3",
      "tipo": "3"
    }
  ]
  constructor() { }

  getList() {
    return this.list;
  }
}
