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
  constructor(){ }

  getMemorabilia(){
    // return this.shopitems;
    return MEM;
  }
}
