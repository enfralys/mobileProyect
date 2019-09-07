import { CertifiedService } from '../core/certified.service';
import { DOCUMENT, Location } from '@angular/common';
import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.scss'],
  animations:[
    trigger('fade',
    [
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(500)]),
    ]
  )]
})
export class CertificadosComponent implements OnInit {

  certificates: any[];

  constructor(
    private service: CertifiedService,
    private _location: Location,
    @Inject(DOCUMENT) document)
  {
    this.loadData();
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 10) {
       let element = document.getElementById('navbar');
       element.classList.add('sticky');
     } else {
      let element = document.getElementById('navbar');
        element.classList.remove('sticky');
     }
  }

  loadData()
  {
    this.service.getCertified().subscribe(data => {
      let source: any = data;
      console.log(source.data)
      this.certificates = source.data;
    });
  }

}
