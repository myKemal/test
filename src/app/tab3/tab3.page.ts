import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {
  myEmail: string = ""
  myPass: string = ""
  constructor() {
  }

  mesaj() {

    console.log("Girdiğin email : " + this.myEmail)
    console.log("Şifren : " + this.myPass)
    
  }


}
