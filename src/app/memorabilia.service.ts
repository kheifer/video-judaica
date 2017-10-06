import { Injectable } from '@angular/core';
import { Memorabilia } from './memorabilia.model';
import { MEM } from './mock-memorabilia';
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MemorabiliaService {
//   shopitems: FirebaseListObservable<any[]>;
//
//   constructor(private database: AngularFireDatabase) { }
//     this.shopitems = database.list('shopitems');
// }

  collectibles: Memorabilia[];

  constructor(){ }

  getMemorabilia(){
    // return this.shopitems;
    return MEM;
  }

  getMemorabiliaById(collectibleId: number){
    for (var i = 0; i <= MEM.length - 1; i++) {
      if (MEM[i].id === collectibleId) {
        return MEM[i];
      }
    }
  }
}
