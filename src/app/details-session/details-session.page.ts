import { Component, OnInit } from '@angular/core';
import {Session} from '../entities/sessions/session';

@Component({
  selector: 'app-details-session',
  templateUrl: './details-session.page.html',
  styleUrls: ['./details-session.page.scss'],
})
export class DetailsSessionPage implements OnInit {

  session: Session;

  constructor() { }

  ngOnInit() {

  }

}
