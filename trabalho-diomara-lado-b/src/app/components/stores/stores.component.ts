import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HtmlIdentifier } from 'src/app/shared/htmlIdentifierModel';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit{
  public htmlElementToBeRead: HtmlIdentifier = new HtmlIdentifier;

  constructor(private router: Router) {

  }

  ngOnInit(): void {

    setTimeout(() => {
      this.htmlElementToBeRead = history.state.commandHtml;
      console.log(this.htmlElementToBeRead);
    })
  }
}
