import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../../core/item.service';
import { Router, ActivatedRoute } from '@angular/router';
// import * as v from '../../../../../assets/minejs.js';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  item: any;
  productId;

  constructor(
    private router: ActivatedRoute,
    private navigate: Router,
    private service: ItemService)
  {
    this.loadData();
  }

  ngOnInit() {
  }

    // test(te){
    //   let a = v;
    //   console.log(a);
    //   a.test(te);
    // }

  loadData() {
    this.productId = this.router.snapshot.paramMap.get('id');
    this.service.getItemById(this.productId).subscribe(data => {
      let source: any = data;
      console.log(source.data)
      this.item = source.data;
    });
  }

}
