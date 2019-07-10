import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/services/image-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  private images = [];


  constructor(private router: Router, private imageService: ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getImages();
  }

  onSelect(img: string){
    this.imageService.setSelectedImage(img);
  }
}
