import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AboutSiteComponent } from './components/about-site/about-site.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { StatsComponent } from './components/stats/stats.component';
import { StoresComponent } from './components/stores/stores.component';
import { CoolfactsComponent } from './components/coolfacts/coolfacts.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from  '@angular/common/http';
import { ComponenteInicialComponent } from './components/componente-inicial/componente-inicial.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutSiteComponent,
    ContactsComponent,
    StatsComponent,
    StoresComponent,
    CoolfactsComponent,
    HeaderComponent,
    ComponenteInicialComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
