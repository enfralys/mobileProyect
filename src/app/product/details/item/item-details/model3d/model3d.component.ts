import { Location } from '@angular/common';
import { ItemService } from '../../../../../core/item.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as a from '../../../../../../assets/minejs'
@Component({
  selector: 'app-model3d',
  templateUrl: './model3d.component.html',
  styleUrls: ['./model3d.component.scss']
})
export class Model3dComponent implements OnInit {

  pdf: boolean = false;
  video: boolean = false;
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
      source.data.forEach(data => {
        if (data.type === "ftPdf") {
          this.pdf = true;
        }
        else if (data.type === "ftVideo")
        {
          this.video = true;
        }
      });
    });
  }

    test(){
      let v = a;
      v.test("hola");
    }
  ngOnInit() {
  }

}
