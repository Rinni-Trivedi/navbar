import { Injectable } from '@angular/core';

import { of } from 'rxjs';

export interface TemDataClass {
  id: number;
  pname: string;
  price: number;
}

@Injectable()
export class MainService {

  temdata: TemDataClass[] = [
    { "id": 1, "pname": "Product One", "price": 22.05},
    { "id": 2, "pname": "Product Two", "price": 15},
  ];

  getData() {
    return of(this.temdata);
  }
}


