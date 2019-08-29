import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CertifiedService } from '../core/certified.service';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.scss']
})
export class CertificadosComponent implements OnInit {

  certificates: any[];

  constructor(private service: CertifiedService, private _location: Location)
  {
    this.loadData();
  }

  ngOnInit() {
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
