import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import { MenuComponent } from './menu/menu.component';
import {MatMenuModule} from '@angular/material/menu';
import { RodapeComponent } from './rodape/rodape.component';
import { AtendimentoOnlineComponent } from './atendimento-online/atendimento-online.component';
import { QuemSouEuComponent } from './quem-sou-eu/quem-sou-eu.component';
import { ContatoComponent } from './contato/contato.component';
import { BannerPrincipalComponent } from './banner-principal/banner-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    AtendimentoOnlineComponent,
    QuemSouEuComponent,
    ContatoComponent,
    BannerPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
