import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  myEmail: string = ""
  myPass: string = ""

  constructor() {}

  giris(){
    if(this.myEmail=="t@t.com" && this.myPass=="1234")
    {
      console.log(this.myEmail+" Başarılı giriş yaptınız");
    }
    else{
      console.log("Giriş bilgilerinizi kontrol ediniz")
    }
  }

}
