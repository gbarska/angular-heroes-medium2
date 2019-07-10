import { Hero } from '../models/hero-model';

export class HeroService {

 private selectedHero = null;
 private heroes: Hero[] = [];

   public setSelectedHero(hero: Hero) {
        this.selectedHero = hero;
    }

   public getSelectedHero() {
        return this.selectedHero;
    }
}