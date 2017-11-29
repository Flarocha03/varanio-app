import { NativeStorage } from '@ionic-native/native-storage';
import { DatabaseHelper } from './../../database/DatabaseHelper';
import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  ASSETS_ALEATORIO_1 = "./assets/aleatorio/1.png";
  ASSETS_ALEATORIO_2 = "./assets/aleatorio/2.png";
  ASSETS_ALEATORIO_3 = "assets/aleatorio/3.png";
  ASSETS_ALEATORIO_4 = "./assets/aleatorio/4.png";
  ASSETS_ALEATORIO_5 = "./assets/aleatorio/5.png";
  ASSETS_ALEATORIO_6 = "./assets/aleatorio/6.png";
  ASSETS_ALEATORIO_7 = "./assets/aleatorio/7.png";

  ASSETS_PORO_COMIDA  = "./assets/poro/comida.png";
  ASSETS_PORO_MUNDIAL = "./assets/poro/mundial.png";
  ASSETS_PORO_PORO    = "./assets/poro/poro.png";
  ASSETS_PORO_RAIVOSO = "./assets/poro/raivoso.png";

  ASSETS_VARANIO_ACHEI  = "./assets/varanio/achei.png";
  ASSETS_VARANIO_AWNS   = "./assets/varanio/awns.png";
  ASSETS_VARANIO_CORRE  = "./assets/varanio/corre.png";
  ASSETS_VARANIO_HUE    = "./assets/varanio/hue.png";
  ASSETS_VARANIO_LIKE   = "./assets/varanio/like.png";
  ASSETS_VARANIO_LINGUA = "./assets/varanio/lingua.png";
  ASSETS_VARANIO_UE     = "./assets/varanio/ue.png";

  ASSETS_VARANIO_MAP: any[] = [];

  //holder do produto
  produto: any = {};

  //lista onde será armazenado varanios
  varanios: any[] = [];
  pagos: any[] = [];

  constructor( public platform: Platform, public nativeStorage: NativeStorage, public navCtrl: NavController ) {
    this.ASSETS_VARANIO_MAP.push( this.ASSETS_VARANIO_ACHEI );
    this.ASSETS_VARANIO_MAP.push( this.ASSETS_VARANIO_AWNS );
    this.ASSETS_VARANIO_MAP.push( this.ASSETS_VARANIO_CORRE );
    this.ASSETS_VARANIO_MAP.push( this.ASSETS_VARANIO_HUE );
    this.ASSETS_VARANIO_MAP.push( this.ASSETS_VARANIO_LIKE );
    this.ASSETS_VARANIO_MAP.push( this.ASSETS_VARANIO_LINGUA );
    this.ASSETS_VARANIO_MAP.push( this.ASSETS_VARANIO_UE );

    this.ASSETS_VARANIO_MAP.push( this.ASSETS_PORO_COMIDA );
    this.ASSETS_VARANIO_MAP.push( this.ASSETS_PORO_MUNDIAL );
    this.ASSETS_VARANIO_MAP.push( this.ASSETS_PORO_PORO );
    this.ASSETS_VARANIO_MAP.push( this.ASSETS_PORO_RAIVOSO );

    this.ASSETS_VARANIO_MAP.push( this.ASSETS_ALEATORIO_1 );
    this.ASSETS_VARANIO_MAP.push( this.ASSETS_ALEATORIO_2 );
    this.ASSETS_VARANIO_MAP.push( this.ASSETS_ALEATORIO_3 );
    this.ASSETS_VARANIO_MAP.push( this.ASSETS_ALEATORIO_4 );
    this.ASSETS_VARANIO_MAP.push( this.ASSETS_ALEATORIO_5 );
    this.ASSETS_VARANIO_MAP.push( this.ASSETS_ALEATORIO_6 );
    this.ASSETS_VARANIO_MAP.push( this.ASSETS_ALEATORIO_7 );

    this.platform.ready().then(() => {
      this.listProdutos();
      this.listPagos();
    });
  }

  varanioAleatorio() {
    let index = Math.floor( Math.random() * this.ASSETS_VARANIO_MAP.length );
    return this.ASSETS_VARANIO_MAP[index];
  }

  adicionarVaranio( produto: any ) {
    //novo varanio
    let varanio: any = {
      image: this.varanioAleatorio(),
      nome: produto.nome,
      valor: produto.valor,
    };
  
    this.insertProduto( varanio );
    produto.nome = null;
    produto.valor = null;
  };

  removeProduto( index: any ) {
      this.varanios.splice(index, 1);
      this.nativeStorage.setItem( 'produto', this.varanios );
  }

  getTotal() {
    let total = 0.0;
    for( let produto of this.varanios ) {
      total += ( produto.valor ) * 1.0;
    }

    return total;
  }

  insertProduto( produto ) {
    this.varanios.push( produto );
    this.nativeStorage.setItem( 'produto', this.varanios );
  }

  listProdutos() {
    this.nativeStorage.getItem( 'produto' )
    .then( produtos => produtos == null ? this.nativeStorage.setItem( 'produto', [] ) : this.varanios = produtos );
  }

  listPagos() {
    this.nativeStorage.getItem( 'pago' )
    .then( pagos => pagos == null ? this.nativeStorage.setItem( 'pago', [] ) : this.pagos = pagos );
  }

  pagar( produto, index ) {
    produto.dataPaga = new Date();
    this.pagos.push( produto );
    this.removeProduto( index );
    this.nativeStorage.setItem( 'pago', this.pagos );
  }
}
