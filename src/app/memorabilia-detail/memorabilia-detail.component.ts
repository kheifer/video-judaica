import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Memorabilia } from '../memorabilia.model';
import { MemorabiliaService } from '../memorabilia.service'

@Component({
  selector: 'app-memorabilia-detail',
  templateUrl: './memorabilia-detail.component.html',
  styleUrls: ['./memorabilia-detail.component.css'],
  providers: [MemorabiliaService]
})
export class MemorabiliaDetailComponent implements OnInit {

  collectibleId: number = null;
  collectible;

  constructor(private route: ActivatedRoute, private location: Location, private memorabiliaService: MemorabiliaService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.collectibleId = parseInt(urlParameters['id']);
    });
    this.collectible = this.memorabiliaService.getMemorabiliaById(this.collectibleId);
  }

}
