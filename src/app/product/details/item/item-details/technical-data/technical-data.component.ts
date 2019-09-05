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

  pdf: boolean = false;
  video: boolean = false;
  productId;
  obj = {};

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
      source.data.forEach(data => {
        if (data.type === "ftPdf") {
          this.pdf = true;
        }
        else if (data.type === "ftVideo")
        {
          this.video = true;
        }
        else
        {
          this.obj = false;
          console.log(this.obj)
        }
      });
    });
  }

  ngOnInit() {
  }

}
