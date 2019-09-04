import { Component, OnInit, ElementRef, ViewChild, Renderer2,AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../../../../../core/item.service';
import * as v from '../../../../../../assets/video.js';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss']
})
export class AnimationComponent implements OnInit {

  @ViewChild("play", {static: false}) play: ElementRef;

  item = [];
  productId;
  duration;

  constructor(
    private router: ActivatedRoute,
    private service: ItemService,
    private renderer: Renderer2)
  {
    this.loadData();
  }
  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  plays(a){
   console.log(a.toString())
   v.play(a);

  }

  loadData() {
    this.productId = this.router.snapshot.paramMap.get('id');
    this.service.getproductitems(this.productId).subscribe(data => {
      let source: any = data;
      console.log(source.data)
      this.item = source.data;
      this.duration = document.getElementById(source.data.path_data);
      console.log(this.duration);
    });
  }

}
