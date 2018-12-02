import { Component, OnInit, OnDestroy } from '@angular/core';
import { ImagePreloaderServiceContract } from '../../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  backgrounds: string[] = [
    '/assets/images/banners-home/banner0.jpg',
    '/assets/images/banners-home/banner1.jpg',
    // '/assets/images/banners-home/banner2.jpg'
  ];

  currentBackground = 0;
  backgroundTimer: any;

  constructor(private preloadService: ImagePreloaderServiceContract) { }

  ngOnInit() {
    this.preloadImages();

    this.backgroundTimer = setInterval(() => {
      this.swapBackgrounds();
    }, 5000);
  }

  swapBackgrounds() {
    if (!this.currentBackground) {
      this.currentBackground = 0;
    }

    if (this.currentBackground < this.backgrounds.length - 1) {
      this.currentBackground++;
    } else {
      this.currentBackground = 0;
    }
  }

  ngOnDestroy() {
    clearInterval(this.backgroundTimer);
  }

  preloadImages(): void {
    this.preloadService.loadImages(this.backgrounds);
  }

}
