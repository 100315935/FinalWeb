import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  show() {
    const modal = document.getElementById('evento_pop_up');
    modal.style.display = 'block';
  }
  hide() {
    document.getElementById('evento_pop_up').style.display = 'none';
  }


}
