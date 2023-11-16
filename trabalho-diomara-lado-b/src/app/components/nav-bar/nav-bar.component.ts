import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HtmlIdentifier } from 'src/app/shared/htmlIdentifierModel';
import { NavButtons } from 'src/app/shared/navbuttonsmodel';
import { ServicoGetInfoService } from 'src/app/shared/servico-get-info.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public listaDeBotoes: Array<NavButtons> = [];
  @Input() identificadorDeArea: number = 0;
  public objetoDeIdentificacao!: HtmlIdentifier;

  public instantiateNavButtons(): void {
    this.listaDeBotoes = [
      {icon: '<i class="fa-solid fa-compass"></i>', route: `/${String(this.identificadorDeArea)}/discovery`},
      {icon: '<i class="fa-solid fa-phone"></i>', route: `/${String(this.identificadorDeArea)}/contacts`},
      {icon: '<i class="fa-solid fa-table-list"></i>', route: `/${String(this.identificadorDeArea)}/stats`},
      {icon: '<i class="fa-solid fa-store"></i>', route: `/${String(this.identificadorDeArea)}/stores`},
      {icon: '<i class="fa-solid fa-circle-exclamation"></i>', route: `/${String(this.identificadorDeArea)}/curiosities`}
    ]
  }

  constructor(public router: Router, private serviocGetInfo: ServicoGetInfoService) {

  }

  ngOnInit(): void {
    setTimeout(async () => {
      this.instantiateNavButtons();
      await this.serviocGetInfo.getInfos(this.identificadorDeArea).subscribe({
        error: () => {
          alert("Ocorreu um Erro...");
        },
        next: (dados) => {
          this.objetoDeIdentificacao = dados;
        }
      })
    })
  }

  public alterarARota(rota: string): void {
    this.router.navigateByUrl(rota, {state: {commandHtml: this.objetoDeIdentificacao} })
  }
}
