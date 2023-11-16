import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HtmlIdentifier } from 'src/app/shared/htmlIdentifierModel';

@Component({
  selector: 'app-about-site',
  templateUrl: './about-site.component.html',
  styleUrls: ['./about-site.component.scss'],
})
export class AboutSiteComponent implements OnInit{
  htmlElementToBeRead: HtmlIdentifier = new HtmlIdentifier;

  constructor() {
  }

  ngOnInit(): void {

    setTimeout(() => {
      this.htmlElementToBeRead = history.state.commandHtml;
    })
  }

}
