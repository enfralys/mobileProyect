import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../../../../../core/item.service';

@Component({
  selector: 'app-ins-qx',
  templateUrl: './ins-qx.component.html',
  styleUrls: ['./ins-qx.component.scss']
})
export class InsQxComponent implements OnInit {

  
  item= [];
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

  loadData() {
    this.productId = this.router.snapshot.paramMap.get('id');
    this.service.getproductitems(this.productId).subscribe(data => {
      let source: any = data;
      console.log(source.data)
      this.item = source.data;
     let a = this.item.filter(res => res.type == "insQx");
      this.item = a;
    });
  }
}
