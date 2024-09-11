import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  // template: '<h1> Hello Wordl </h1>',
  // if false is module
  standalone: true,
  templateUrl: './header.component.html',
  // new version
  styleUrl: './header.component.css',
  // old version
  // styleUrls: ['./header.component.css'],
  // inline
  // styles: ['h1 {color:red}']
})
export class HeaderComponent {}
