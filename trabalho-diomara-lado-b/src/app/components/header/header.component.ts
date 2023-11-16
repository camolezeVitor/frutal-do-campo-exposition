import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() identificadorDeLadoDoFrutal: number = 0;
  public regExp: RegExp = new RegExp('[0-9]', 'g')
  identificacaoGlobalDePosicao: Array<string> = ['Oeste da Cidade', 'Centro da Cidade', 'Leste da Cidade']

  public voltarAPaginaInicial(): void {
    console.info('ERRO')
    window.open('http://127.0.0.1:5173', '_self')
  }

  constructor(public router: Router) {
  }

  ngOnInit(): void {

  }
}
