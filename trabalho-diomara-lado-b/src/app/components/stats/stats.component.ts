import { Component, OnInit } from '@angular/core';
import { HtmlIdentifier } from 'src/app/shared/htmlIdentifierModel';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit{
  public htmlElementToBeRead: HtmlIdentifier = new HtmlIdentifier

  ngOnInit(): void {
      setTimeout(() => {
        this.htmlElementToBeRead = history.state.commandHtml
      })
  }
}
