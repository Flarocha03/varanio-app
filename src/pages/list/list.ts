import { Component } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { NavController, NavParams, Platform } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  /**
   * 
   */
  varanios: any[] = [];

  /**
   * 
   * @param platform 
   * @param nativeStorage 
   */
  constructor( public platform: Platform, public nativeStorage: NativeStorage ) {
    this.platform.ready().then(() => {
      this.listPagos();
    });
  }

  /**
   * 
   */
  listPagos() {
    // this.nativeStorage.getItem( 'pago' )
    // .then( pagos => pagos == null ? this.nativeStorage.setItem( 'pago', [] ) : this.varanios = pagos );
  }

  /**
   * 
   */
  getTotal() {
    let total = 0.0;
    for( let produto of this.varanios ) {
      total += ( produto.valor ) * 1.0;
    }

    return total;
  }
}
