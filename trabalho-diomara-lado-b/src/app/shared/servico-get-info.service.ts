import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HtmlIdentifier } from './htmlIdentifierModel';

@Injectable({
  providedIn: 'root'
})
export class ServicoGetInfoService {
  localizacoes: Array<string> = ['oeste', 'centro', 'leste']

  constructor(
    private httpClient: HttpClient
    ) { }

  public getInfos(indexIdentifier: number): Observable<HtmlIdentifier> {
    return this.httpClient.get<HtmlIdentifier>(`http://localhost:3000/${this.localizacoes[indexIdentifier]}`)
  }
}
