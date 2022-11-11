import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HEADERComponent } from '../app/components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ExpCardsComponent } from './components/exp-cards/exp-cards.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { EduCardsComponent } from './components/edu-cards/edu-cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsCardsComponent } from './components/skills-cards/skills-cards.component';
import { LoginComponent } from './components/login/login.component';
import { TuboComponent } from './components/tubo/tubo.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

import { PortfolioService } from './servicios/portfolio.service';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HEADERComponent,
    BannerComponent,
    NavbarComponent,
    ExperienciaComponent,
    ExpCardsComponent,
    SkillsComponent,
    EducacionComponent,
    EduCardsComponent,
    FooterComponent,
    SkillsCardsComponent,
    LoginComponent,
    TuboComponent,
    ProyectosComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
