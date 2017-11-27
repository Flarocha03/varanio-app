import { NativeStorage } from '@ionic-native/native-storage';

export class DatabaseHelper {

public static db = null;
public static TABLE_PRODUTO = 'produto';

constructor( private nativeStorage: NativeStorage ) {
  if( DatabaseHelper.db == null ) DatabaseHelper.db = nativeStorage;
}

getNativeStorage() {
  return this.nativeStorage;
}

public static insertProduto( produto: any ) {
  DatabaseHelper.db.setItem( DatabaseHelper.TABLE_PRODUTO, produto )
  .then(
    () => console.log( 'Stored item!' ),
    error => console.error( 'Error storing item', error )
  );
}

public static listProdutos(): any[] {
  if(  DatabaseHelper.db == null ) return [];
  return DatabaseHelper.db.getItem( DatabaseHelper.TABLE_PRODUTO );
}

  // this.nativeStorage.getItem('myitem')
  //   .then(
  //     data => console.log(data),
  //     error => console.error(error)
  //   );

}