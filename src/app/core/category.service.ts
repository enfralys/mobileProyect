import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(public http: HttpClient) { }

  server = "http://167.99.2.33:5000"

  getCategory() {
    let json = {
      id: '3'
    }
    let params = json;
    return this.http.get(`${this.server}/category`, { params })
  }
}
