import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutSiteComponent } from './components/about-site/about-site.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { StatsComponent } from './components/stats/stats.component';
import { StoresComponent } from './components/stores/stores.component';
import { CoolfactsComponent } from './components/coolfacts/coolfacts.component';
import { AppComponent } from './app.component';
import { ComponenteInicialComponent } from './components/componente-inicial/componente-inicial.component';

const routes: Routes = [
  {
    path: ':id/discovery',
    component: AboutSiteComponent,
  },
  {
    path: ':id/contacts',
    component: ContactsComponent
  },
  {
    path: ':id/stats',
    component: StatsComponent
  },
  {
    path: ':id/stores',
    component: StoresComponent
  },
  {
    path: ':id/curiosities',
    component: CoolfactsComponent
  },
  {
    path: ':id/menuprincipal',
    component: ComponenteInicialComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
