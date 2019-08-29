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

  back() {
    this._location.back()
    console.log('BACK')
  }
  openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("nav").style.display = "none";

  }
  setvalueshome() {
    document.getElementById("imgc1").style.height = screen.height * 0.45 + "px";
    document.getElementById("imgc2").style.height = screen.height * 0.45 + "px";
    document.getElementById("imgc3").style.height = screen.height * 0.45 + "px";
    document.getElementById("logos").style.height = screen.height * 0.28 + "px";

  }
  setvalues() {
    document.getElementById("html").style.maxHeight = screen.height + "px";
    document.getElementById("html").style.height = screen.height + "px";
  }
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    // document.body.style.backgroundColor = "white";
    document.getElementById("nav").style.display = "";
  }
  items(info) {
    document.getElementById("html").style.maxHeight = screen.height + "px";
    document.getElementById("html").style.height = screen.height + "px";
    document.getElementById("html").style.backgroundColor = "#EDEDED";

  }

}
