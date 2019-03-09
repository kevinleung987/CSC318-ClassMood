import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.css']
})
export class StartMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  attend(id: number) {
    this.router.navigate(['student']);
  }

}
