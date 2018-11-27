import { Component, OnInit, ViewChild } from '@angular/core';
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
  activeFilters: string[] = [];
  filterLabel = 'Voeg filters toe';

  @ViewChild('filter') filter;

  constructor() { }

  ngOnInit() {
    this.calculateColumns();
  }

  addFilter(filter: string): void {
    if (filter !== this.filterLabel) {
      const filterIndex = this.activeFilters.findIndex(f => f === filter);
      if (filterIndex === -1) {
        this.activeFilters.push(filter);
      }

      this.calculateColumns();
    }
  }

  removeFilter(filter: string): void {
    const filterIndex = this.activeFilters.findIndex(f => f === filter);
    if (filterIndex !== -1) {
      this.activeFilters.splice(filterIndex, 1);
    }

    this.calculateColumns();
  }

  setActiveImage(image) {
    this.activeImage = image;
  }

  resetActiveImage() {
    this.activeImage = null;
  }

  calculateColumns() {
    // reset the images
    this.filter.nativeElement.value = this.filterLabel;
    this.columnOneImages = [];
    this.columnTwoImages = [];
    this.columnThreeImages = [];
    this.columnFourImages = [];

    let filteredImages: PortfolioImage[];

    // set the filter
    if (this.activeFilters.length > 0) {
      filteredImages = this.portfolioImages.filter((image: PortfolioImage) => this.activeFilters.indexOf(image.category) !== -1);
      this.portfolioLength = filteredImages.length;
    } else {
      filteredImages = this.portfolioImages;
      this.portfolioLength = this.portfolioImages.length;
    }

    // fill the columns
    for (let i = 0; i < this.portfolioLength; i += 4) {
      this.columnOneImages.push(filteredImages[i]);
    }
    for (let i = 1; i < this.portfolioLength; i += 4) {
      this.columnTwoImages.push(filteredImages[i]);
    }
    for (let i = 2; i < this.portfolioLength; i += 4) {
      this.columnThreeImages.push(filteredImages[i]);
    }
    for (let i = 3; i < this.portfolioLength; i += 4) {
      this.columnFourImages.push(filteredImages[i]);
    }
  }

}
