import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CardComponent } from './card/card.component';

import { ImageService } from './shared/services/image-service';
import { HeroService } from './shared/services/hero-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputComponent,
    GalleryComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ImageService,
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
