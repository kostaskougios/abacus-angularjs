import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AbacusComponent } from './abacus/abacus.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdditionsComponent } from './additions/additions.component';
import { SubtractionsComponent } from './subtractions/subtractions.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'abacus', component: AbacusComponent },
      { path: 'additions', component: AdditionsComponent },
      { path: 'subtractions', component: SubtractionsComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    AbacusComponent,
    HomePageComponent,
    AdditionsComponent,
    SubtractionsComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

