import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Memorabilia } from '../memorabilia.model';
import { MemorabiliaService } from '../memorabilia.service';

@Component({
  selector: 'app-memorabilia-shop',
  templateUrl: './memorabilia-shop.component.html',
  styleUrls: ['./memorabilia-shop.component.css'],
  providers: [MemorabiliaService]
  })
export class MemorabiliaShopComponent implements OnInit {
  items: Memorabilia[];

  constructor(private router: Router, private memorabiliaService: MemorabiliaService) { }

  ngOnInit() {
    this.items = this.memorabiliaService.getMemorabilia();
  }

}
