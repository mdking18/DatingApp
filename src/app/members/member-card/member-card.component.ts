import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models/user.ts';
import { UserService } from 'src/app/_services/user.service';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
  @Input() user: User;

  constructor(private router: Router) { }

  ngOnInit() {
  }
}
