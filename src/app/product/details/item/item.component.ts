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
      console.log(source.datos)
      this.products = source.data;
    });
  }

  back() {
    this._location.back()
    console.log('BACK')
  }

}
