import { Component, OnInit } from '@angular/core';
import { portfolioImages, PortfolioImage, PortfolioCategory } from './portfolioImages';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolioCategories = PortfolioCategory;
  portfolioImages: PortfolioImage[] = portfolioImages;
  portfolioLength = this.portfolioImages.length;
  activeImage;

  columnOneImages = [];
  columnTwoImages = [];
  columnThreeImages = [];
  columnFourImages = [];

  filters: string[] = [];
  activeFilter: string;

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.portfolioLength; i += 4) {
      this.columnOneImages.push(this.portfolioImages[i]);
    }
    for (let i = 1; i < this.portfolioLength; i += 4) {
      this.columnTwoImages.push(this.portfolioImages[i]);
    }
    for (let i = 2; i < this.portfolioLength; i += 4) {
      this.columnThreeImages.push(this.portfolioImages[i]);
    }
    for (let i = 3; i < this.portfolioLength; i += 4) {
      this.columnFourImages.push(this.portfolioImages[i]);
    }
  }

  setActiveImage(image) {
    this.activeImage = image;
  }

  resetActiveImage() {
    this.activeImage = null;
  }

}
