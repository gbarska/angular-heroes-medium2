import { Hero } from '../models/hero-model';

const imagesPath = 'http://localhost:4200/assets/img/';

const images = [
    'batman.png',
    'robbin.png',
    'incrediblew.png',
    'arrow.png',
    'flash.png',
    'america.png',
    'spider.png',
    'wonderwoman.png',
    'cat.png'
  ];

export class HeroService {

 private selectedHero = null;
 private heroes: Hero[] = [];

   public setSelectedHero(hero: Hero) {
        this.selectedHero = hero;
    }

   public getSelectedHero() {
        return this.selectedHero;
    }

    public getImagePath() {
        return imagesPath;
    }

    public getImages() {
        return images;
    }
}