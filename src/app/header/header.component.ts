import { Component, OnInit } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';
// import * as $ from 'jquery/dist/jquery.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  header: String = 'My header';
  constructor() { }

  ngOnInit() {

  }

}
