import { Component, OnInit } from '@angular/core';
import { SliderService } from '../core/slider.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sliders: any[];

  constructor(private service: SliderService, config: NgbCarouselConfig)
  {
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = true;

    this.loadData();
  }

  ngOnInit() {
  }

  loadData()
  {
    this.service.getSlider().subscribe(data => {
      let source: any = data;
      this.sliders = source.data;
    });
  }

}
