import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../core/item.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  products: any[];
  subCatId;
  obj = {};

  constructor(
    private router: ActivatedRoute,
    private navigate: Router,
    private _location: Location,
    private service: ItemService)
  {
    this.loadData();
  }

  ngOnInit() {
  }

  loadData() {
    this.subCatId = this.router.snapshot.paramMap.get('id');
    this.service.getItem(this.subCatId).subscribe(data => {
      let source: any = data;
      console.log(this.subCatId)
      console.log(source.data)
      this.obj = Object.keys(source.data).length === 0;
      if (this.obj !== 'undefined' && source.data.length > 0) {
        this.products = source.data;
        for (let product of this.products) {
          if (product.status === 1) {
            this.obj = true;
          } else {
            this.obj = false;
          }
        }
      } else {
        console.log(this.obj)
      }
    });
  }

  back() {
    this._location.back()
    console.log('BACK')
  }

}
