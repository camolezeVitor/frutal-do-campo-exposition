import { HtmlIdentifier } from './../../shared/htmlIdentifierModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit{
  public htmlElementToBeRead: HtmlIdentifier = new HtmlIdentifier

  ngOnInit(): void {
      setTimeout(() => {
        this.htmlElementToBeRead = history.state.commandHtml
      })
  }

  public avisoAoUsuario(): void {
    alert("O site não funciona corretamente")
  }
}
