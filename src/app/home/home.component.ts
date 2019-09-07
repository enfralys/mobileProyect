import { Component, OnInit } from '@angular/core';
import { SliderService } from '../core/slider.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sliders: any[];

  constructor(private service: SliderService, config: NgbCarouselConfig,private router:Router)
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
