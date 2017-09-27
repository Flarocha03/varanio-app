import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  ASSETS_VARANIO_LIKE = "assets/varanio/like.png";
  ASSETS_VARANIO_ACHEI = "assets/varanio/achei.png";

  //lista onde será armazenado varanios
  varanios: any[] = [];

  constructor(public navCtrl: NavController) {
    
    //novo varanio
    let varanio: any = {
      image: this.ASSETS_VARANIO_ACHEI,
      titulo: "Varanio puto",
      subTitulo: "Putasso",
    };
  
    this.varanios.push( varanio );
  }

  adicionarVaranio() {
    //novo varanio
    let varanio: any = {
      image: this.ASSETS_VARANIO_LIKE,
      titulo: "Varanio puto2",
      subTitulo: "Putasso2",
    };
  
    this.varanios.push( varanio );
  };

}
