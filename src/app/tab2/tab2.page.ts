import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  myEmail: string = "";
  myPass: string = "";
 bilgi:string="";
 hata:boolean=false;
 dogru:boolean=false;

  constructor() { }

  testfonksiyonu(){
    this.myEmail="selam"
  }

  giris() {
    
    if (this.myEmail == "t@t.com" && this.myPass == "1234") {
      console.log(this.myEmail + " Başarılı giriş yaptınız");
    this.bilgi=this.myEmail + " Başarılı giriş yaptınız"
      this.dogru=true;
      this.hata=false;
  }
    else {
      console.log("Giriş bilgilerinizi kontrol ediniz")
      this.bilgi="Hatalı Giriş"
      this.hata=true;
      this.dogru=false;
    }

  }

}
