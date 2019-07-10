import { Component, OnInit, OnDestroy } from '@angular/core';
//importando o servico da galeria
import { ImageService } from '../shared/services/image-service';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { HeroService } from '../shared/services/hero-service';
import { Hero } from '../shared/models/hero-model';
import { HeroHttpService } from '../shared/services/herohttp-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnDestroy {

  heroAvatar = '';
  hero: Hero = null;
  editMode = false;
  pickImage = false;
  private imageSubscription: Subscription;
  isFetching = false;

  constructor(private router: Router, private imageService: ImageService, private activatedRoute: ActivatedRoute,
              private heroService: HeroService, private heroHttpService: HeroHttpService ) { }

  ngOnInit() {
  this.heroAvatar = this.imageService.getSelectedImage();

  let id = '';
  this.activatedRoute.params
      .subscribe(
        (params: Params) => {
          id = params['id'];
          if (id) {
            this.hero = this.heroService.getSelectedHero();
            if (this.hero) {
              this.editMode = true;
            } 
          }
        }
      );

  this.imageSubscription = this.imageService.selectedImageChanged
    .subscribe(data => {
      this.heroAvatar = data;
      this.pickImage = false;
    });
    }

  onSelectImage() {
    this.pickImage = true;
  }

  onSubmit(inputData: {id: string, firstName: string; lastName: string; description: string; superHeroName: string } ) {
    this.isFetching = true;
    const newHero = {
      id: inputData.id,
      firstName: inputData.firstName,
      lastName: inputData.lastName,
      superHeroName: inputData.superHeroName,
      description: inputData.description,
      profilePicture: this.heroAvatar,
      image: this.heroAvatar
    };

    if (this.editMode){
      this.heroHttpService.update(newHero)
      .subscribe(responseData =>{
        console.log(responseData);
        this.isFetching = false;
        this.router.navigate(['/']);
      }, error =>{
        console.log(error);
      });
    } else {
      this.heroHttpService.post(newHero)
    .subscribe(responseData =>{
      console.log(responseData);
      this.isFetching = false;
    }, error =>{
      console.log(error);
    });
    } 
   }
   ngOnDestroy(): void {
   this.imageSubscription.unsubscribe();
  }
}
