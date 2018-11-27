export class PortfolioImage {
    src: string;
    title: string;
    description: string;
    category: PortfolioCategory;

    constructor(base?: Partial<PortfolioImage>) {
        this.src = base.src || '';
        this.title = base.title || '';
        this.description = base.description || '';
        this.category = base.category || PortfolioCategory.Interior;
    }
}

export enum PortfolioCategory {
    Interior = 'Interieur',
    Exterior = 'Exterieur'
}

export const portfolioImages: PortfolioImage[] = [
    new PortfolioImage({
        src: '/assets/images/exterieur/ext-1.jpg',
        title: 'Exterieur',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit dapibus nulla, eu gravida est.',
        category: PortfolioCategory.Exterior
    }),
    new PortfolioImage({
        src: '/assets/images/exterieur/ext-2.png',
        title: 'Exterieur',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit dapibus nulla, eu gravida est.',
        category: PortfolioCategory.Exterior
    }),
    new PortfolioImage({
        src: '/assets/images/exterieur/ext-3.jpg',
        title: 'Exterieur',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit dapibus nulla, eu gravida est.',
        category: PortfolioCategory.Exterior
    }),
    new PortfolioImage({
        src: '/assets/images/exterieur/ext-4.jpg',
        title: 'Exterieur',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit dapibus nulla, eu gravida est.',
        category: PortfolioCategory.Exterior
    }),
    new PortfolioImage({
        src: '/assets/images/interieur/int-1.png',
        title: 'Interieur',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit dapibus nulla, eu gravida est.',
        category: PortfolioCategory.Interior
    }),
    new PortfolioImage({
        src: '/assets/images/interieur/int-2.png',
        title: 'Interieur',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit dapibus nulla, eu gravida est.',
        category: PortfolioCategory.Interior
    }),
    new PortfolioImage({
        src: '/assets/images/interieur/int-3.png',
        title: 'Interieur',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit dapibus nulla, eu gravida est.',
        category: PortfolioCategory.Interior
    }),
    new PortfolioImage({
        src: '/assets/images/interieur/int-4.png',
        title: 'Interieur',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit dapibus nulla, eu gravida est.',
        category: PortfolioCategory.Interior
    }),
    new PortfolioImage({
        src: '/assets/images/interieur/int-5.png',
        title: 'Interieur',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit dapibus nulla, eu gravida est.',
        category: PortfolioCategory.Interior
    }),
    new PortfolioImage({
        src: '/assets/images/interieur/int-6.png',
        title: 'Interieur',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit dapibus nulla, eu gravida est.',
        category: PortfolioCategory.Interior
    }),
    new PortfolioImage({
        src: '/assets/images/interieur/int-7.jpg',
        title: 'Interieur',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit dapibus nulla, eu gravida est.',
        category: PortfolioCategory.Interior
    }),
    new PortfolioImage({
        src: '/assets/images/interieur/int-8.jpg',
        title: 'Interieur',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit dapibus nulla, eu gravida est.',
        category: PortfolioCategory.Interior
    }),
    new PortfolioImage({
        src: '/assets/images/interieur/int-9.jpg',
        title: 'Interieur',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit dapibus nulla, eu gravida est.',
        category: PortfolioCategory.Interior
    }),
];
