import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  prueba(){
    const ds3 = 2
    const result = ds3 + ds3
      alert('LA DS3=  '+result)
  }

}
