import { Component, OnInit } from '@angular/core';
import { HeroHttpService } from '../shared/services/herohttp-service';
import { Hero } from '../shared/models/hero-model';
import { HeroService } from '../shared/services/hero-service';
import { Router } from '@angular/router';
import { ImageService } from '../shared/services/image-service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  imagePath = 'http://localhost:4200/assets/img/';
  heroesArray: Hero[] = [];

  constructor(private heroHttpService: HeroHttpService, private heroService: HeroService, private router: Router, private imageService: ImageService) { }

  ngOnInit() {

    this.heroHttpService.get()
    .subscribe(
      //sucesso
      heroes => {
      console.log(heroes[0].firstName);
      this.heroesArray.push(...heroes);
    },
     //erro
    error => {
      console.log("Deu ruim: "+ error);
    });
  }

  onDelete(hero: Hero) {
    this.heroHttpService.delete(hero.id)
    .subscribe(
      //sucesso
      data => {
      console.log(data);
    },
     //erro
    error => {
      console.log("Deu ruim: "+ error);
    });
  }

  onUpdate(hero: Hero) {
    this.heroService.setSelectedHero(hero);
    this.imageService.setSelectedImage(hero.image);
    this.router.navigate(['edit', hero.id]);
  }

}
