import { Location } from '@angular/common';
import { ItemService } from '../../../../../core/item.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-technical-data',
  templateUrl: './technical-data.component.html',
  styleUrls: ['./technical-data.component.scss']
})
export class TechnicalDataComponent implements OnInit {

  item: any[];
  productId;

  constructor(
    private router: ActivatedRoute,
    private navigate: Router,
    private _location: Location,
    private service: ItemService
  )
  {
    this.loadData();
  }

  loadData() {
    this.productId = this.router.snapshot.paramMap.get('id');
    this.service.getproductitems(this.productId).subscribe(data => {
      let source: any = data;
      console.log(source.data)
      this.item = source.data;
    });
  }

  ngOnInit() {
  }

}
