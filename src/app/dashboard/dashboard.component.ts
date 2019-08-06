import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = ""
  constructor(private _location: Location) { }

  ngOnInit() {
  }

  back(){
    this._location.back()
  }
}
