import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.scss'],
})
export class ForgetpassComponent implements OnInit {
  myRenk = "#700d0d";

  constructor() { }

  renkdegisG(){
    this.myRenk="#a1a1a1";
  }

  renkdegisK(){
    this.myRenk="#700d0d";
  }

  ngOnInit() { }

}
