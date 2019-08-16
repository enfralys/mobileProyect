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

  constructor(
    private router: ActivatedRoute,
    private navigate: Router,
    private service: SubcategoryService,
    private _location: Location)
  {
    this.loadData();
  }

  ngOnInit() {
  }

  loadData() {
    this.catId = this.router.snapshot.paramMap.get('id');
    this.service.getSubcategory(this.catId).subscribe(data => {
      let source: any = data;
      console.log(source.data)
      this.subcategories = source.data;
    });
  }

  back() {
    this._location.back()
    console.log('BACK')
  }
}
