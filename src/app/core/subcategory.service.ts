import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  constructor(public http: HttpClient) { }

  server = "http://167.99.2.33:5000"

  getSubcategory(catId) {
    let json = {
      id: '3',
      catId: catId
    }
    let params = json;
    return this.http.get(`${this.server}/subcategorybyid`, { params })
  }
}
