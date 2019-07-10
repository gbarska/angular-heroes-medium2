import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { InputComponent } from './input/input.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  {path: '', component: CardComponent },
  {path: 'edit/:id', component: InputComponent },
  {path: 'new', component: InputComponent},
  {path: 'gallery', component: GalleryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
