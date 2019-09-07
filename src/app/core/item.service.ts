import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(public http: HttpClient) { }

  server = "http://159.89.190.139:5000"

  getItem(Id) {
    let json = {
      id: Id,
      client_id: '3'
    }
    let params = json;
    return this.http.get(`${this.server}/products`, { params })
  }

  getItemById(Id)
  {
    let json = {
      id: Id,
      client_id: '3'
    }
    let params = json;
    return this.http.get(`${this.server}/productbyid`, {params})
  }

  getproductitems(Id)
  {
    let json = {
      id: Id,
      client_id: '3'
    }
    let params = json;
    return this.http.get(`${this.server}/productitems`, {params})
  }
}
