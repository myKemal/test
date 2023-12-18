import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.component.html',
  styleUrls: ['./tab3.component.scss'],
})
export class Tab3Component implements OnInit {

  products = [
    {
    "name": "Ürün 1",
    "image": "https://ionicframework.com/docs/img/demos/card-media.png",
    "fiyat": "150 TL",
    "bilgi": "asssss."
  }
    , {
    "name": "Ürün 2",
    "image": "https://ionicframework.com/docs/img/demos/card-media.png",
    "fiyat": "50 TL",
    "bilgi": "sdfsdfsdf."
  }
  ]
  constructor() { }

  ngOnInit() { }

}
