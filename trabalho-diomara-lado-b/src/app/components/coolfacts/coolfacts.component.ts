import { Component, OnInit } from '@angular/core';
import { HtmlIdentifier } from 'src/app/shared/htmlIdentifierModel';

@Component({
  selector: 'app-coolfacts',
  templateUrl: './coolfacts.component.html',
  styleUrls: ['./coolfacts.component.scss']
})
export class CoolfactsComponent implements OnInit {
  public htmlElementToBeRead: HtmlIdentifier = new HtmlIdentifier

  ngOnInit(): void {
      setTimeout(() => {
        this.htmlElementToBeRead = history.state.commandHtml
      })
  }
}
