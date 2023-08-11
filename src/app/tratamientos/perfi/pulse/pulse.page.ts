import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pulse',
  templateUrl: './pulse.page.html',
  styleUrls: ['./pulse.page.scss'],
})
export class PulsePage implements OnInit {
  selectTabs = 'cardio1';
  constructor() { }

  ngOnInit() {
  }

}
