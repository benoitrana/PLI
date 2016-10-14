import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { HeaderComponent }   from './header.component';
import { SliderComponent }   from './slider.component';
import { AnnonceComponent }   from './annonce.component';
import { FooterComponent }   from './footer.component';
import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
  	AppComponent,
  	HeaderComponent,
  	SliderComponent,
  	AnnonceComponent,
  	FooterComponent
   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }