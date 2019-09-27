import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GridsterModule } from 'angular-gridster2';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { Tile1Component } from './components/tile1/tile1.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    Tile1Component
  ],
  imports: [
    BrowserModule,
    GridsterModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
