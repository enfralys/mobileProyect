import { Component, OnInit, HostListener } from '@angular/core';
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
  route: string;
  mobile: number;
  slidersFormatted;

  constructor(private service: SliderService, config: NgbCarouselConfig, private router: Router) {
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  ngOnInit() {
    if (window.screen.width === 320) { // 768px portrait
      this.mobile = 1;
      this.loadData();
    } else if (window.screen.width <= 767) {
      this.mobile = 1;
      this.loadData();
    } else if (window.screen.width === 768) {
      this.mobile = 2;
      this.loadData();
    } else {
      this.mobile = 3;
      this.loadData();
    }
    this.route = this.router.url;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth >= 320) { // 320px portrait
      this.mobile = 1;
      this.loadData();
    }
    if (event.target.innerWidth === 768) { // 768px portrait
      this.mobile = 2;
      this.loadData();
    }
    if (event.target.innerWidth > 768) { // 768px portrait
      this.mobile = 3;
      this.loadData();
    }
    console.log(event.target.innerWidth)
  }

  loadData() {
    this.service.getSlider().subscribe(data => {
      let source: any = data;
      this.sliders = source.data;

      this.slidersFormatted = [];
      let j = -1;

      for (let i = 0; i < this.sliders.length; i++) {
        if (this.mobile === 2) {
          if (i % 2 == 0) {
            j++;
            this.slidersFormatted[j] = [];
            this.slidersFormatted[j].push(this.sliders[i]);
          }
          else {
            this.slidersFormatted[j].push(this.sliders[i]);
          }
        }
        else if (this.mobile === 3) {
          if (i % 4 == 0) {
            j++;
            this.slidersFormatted[j] = [];
            this.slidersFormatted[j].push(this.sliders[i]);
          }
          else {
            this.slidersFormatted[j].push(this.sliders[i]);
          }
        }

      }
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
