import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Memorabilia } from '../memorabilia.model';
import { MemorabiliaService } from '../memorabilia.service';

@Component({
  selector: 'app-memorabilia-list',
  templateUrl: './memorabilia-list.component.html',
  styleUrls: ['./memorabilia-list.component.css'],
  providers: [MemorabiliaService]
})
export class MemorabiliaListComponent implements OnInit {
  collectibles: Memorabilia[];

  goToDetailPage(clickedCollectible: Memorabilia) {
     this.router.navigate(['memorabilia', clickedCollectible.id]);
   };

  constructor(private router: Router, private memorabiliaService: MemorabiliaService) { }

  ngOnInit() {
    this.collectibles = this.memorabiliaService.getMemorabilia();
  }

}
