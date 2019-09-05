import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { SubcategoryService } from 'src/app/core/subcategory.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  subcategories: any[];
  catId;
  obj: {};

  constructor(
    private router: ActivatedRoute,
    private service: SubcategoryService)
  {
    this.loadData();
  }

  ngOnInit() {
  }

  loadData() {
    this.catId = this.router.snapshot.paramMap.get('id');
    this.service.getSubcategory(this.catId).subscribe(data => {
      let source: any = data;
      this.obj = Object.keys(source.datos).length === 0;
      if (this.obj !== 'undefined' && source.datos.length > 0) {
        for (let ani of source.datos) {
          if (ani.status === 1) {
            this.subcategories = source.datos;
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
}
