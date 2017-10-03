import { Component, Input, OnInit } from '@angular/core';
import { MembershipService } from '../membership.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css'],
  providers: [MembershipService]
})
export class MembershipComponent implements OnInit {
    @Input() selectedMembership;

  constructor(private membershipService: MembershipService)) { }

  ngOnInit() {
  }

}
