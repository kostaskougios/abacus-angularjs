import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AbacusComponent } from './abacus/abacus.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'abacus', component: AbacusComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    AbacusComponent,
    HomePageComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

