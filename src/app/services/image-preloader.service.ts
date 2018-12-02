import { Injectable } from '@angular/core';
import { ImagePreloaderServiceContract } from './image-preloader-service.contract';

@Injectable()
export class ImagePreloaderService implements ImagePreloaderServiceContract {
    images: any[];

    constructor() { }

    loadImages(sources: string[]): void {
        if (!this.images) {
            this.images = [];
        }

        for (const source of sources) {
            const existingImage = this.images.find(img => (img.src as string).indexOf(source) !== -1);

            if (!existingImage) {
                const preloadImage = new Image(300, 300);
                preloadImage.src = source;
                this.images.push(
                    preloadImage
                );
            }
        }
    }
}
