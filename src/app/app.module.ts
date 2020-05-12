import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { AbacusComponent } from './abacus/abacus.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdditionsComponent } from './additions/additions.component';
import { SubtractionsComponent } from './subtractions/subtractions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopMenuComponent } from './top-menu/top-menu.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'abacus', component: AbacusComponent },
      { path: 'additions', component: AdditionsComponent },
      { path: 'subtractions', component: SubtractionsComponent },
    ]),
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    AbacusComponent,
    HomePageComponent,
    AdditionsComponent,
    SubtractionsComponent,
    TopMenuComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

