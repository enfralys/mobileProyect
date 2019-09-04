import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CategoryService } from '../core/category.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  categories: any[];

  constructor(private service: CategoryService, private _location: Location)
  {
    this.loadData();
  }

  ngOnInit() {
  }

  loadData()
  {
    this.service.getCategory().subscribe(data => {
      let source: any = data;
      console.log(source.data)
      this.categories = source.data;
    });
  }

}
