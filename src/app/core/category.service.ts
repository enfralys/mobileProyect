import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(public http: HttpClient) { }

  server = "http://159.89.190.139:5000"

  getCategory() {
    let json = {
      id: '3'
    }
    let params = json;
    return this.http.get(`${this.server}/category`, { params })
  }
}
