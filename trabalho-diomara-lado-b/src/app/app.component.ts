import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'trabalho-diomara-lado-b';
  public identificadorDaParteDeFrutalPai: number = 0;

  constructor(public router: Router) {

  }

  ngOnInit(): void {
    setTimeout(() => this.identificadorDaParteDeFrutalPai = Number(this.router.url
    .replaceAll('/', '').replaceAll(RegExp('[A-z]','g'), '')));
  }
}
