
// tslint:disable:max-line-length

export class PortfolioImage {
    src: string;
    title: string;
    description: string;
    category: PortfolioCategory;

    constructor(base?: Partial<PortfolioImage>) {
        this.src = base.src || '';
        this.title = base.title || base.category || '';
        this.description = base.description || '';
        this.category = base.category || PortfolioCategory.Interior;
    }
}

export enum PortfolioCategory {
    Interior = 'Klassiek binnen schilderwerk',
    Exterior = 'Buitenwerken',
    Paper = 'Behangpapier',
    DecoTechniques = 'Decoratietechnieken'

}

const interiorImages: PortfolioImage[] = [
    new PortfolioImage({
        src: '/assets/images/portfolio/interieur/int-13.jpg',
        description: 'Schilderen van woonkamer en TV kast in MDF',
        category: PortfolioCategory.Interior
    }),
    new PortfolioImage({
        src: '/assets/images/portfolio/interieur/int-10.jpg',
        description: 'Originele babykamer met handgeschilderde figuren',
        category: PortfolioCategory.Interior
    }),
    new PortfolioImage({
        src: '/assets/images/portfolio/interieur/int-11.jpg',
        description: 'Schilderen van strakke, moderne keuken',
        category: PortfolioCategory.Interior
    }),
    new PortfolioImage({
        src: '/assets/images/portfolio/interieur/int-9.jpg',
        description: 'Een wit interieur gecombineerd met een warm behangpapier',
        category: PortfolioCategory.Interior
    }),
    new PortfolioImage({
        src: '/assets/images/portfolio/interieur/int-12.jpg',
        description: 'Een zwart plafond, witte muren en eigentijdse kunst',
        category: PortfolioCategory.Interior
    }),
];

const paperImages: PortfolioImage[] = [
    new PortfolioImage({
        src: '/assets/images/portfolio/behangpapier/paper-1.jpg',
        description: 'Dit handgemaakt behangpapier in "jute" van Arte (Insero Mix) brengt authenticiteit en puurheid, geïnspireerd op moeder natuur. Jute past binnen de trend om subtiel een etnische sfeer in ons interieur te brengen. Jute is zeer stevig, milieuvriendelijk en duurzaam. Het materiaal verwerken in muurbekleding is niet vanzelfsprekend en vraagt enorm precisiewerk.',
        category: PortfolioCategory.Paper
    }),
    new PortfolioImage({
        src: '/assets/images/portfolio/behangpapier/paper-2.jpg',
        description: 'Voor dit toilet werd behangpapier gekozen van Khrôma (Serenade) door het 100% West-Vlaamse bedrijf Masureel. Passie staat samen met kwaliteit en kunst centraal bij Masureel.',
        category: PortfolioCategory.Paper
    }),
    new PortfolioImage({
        src: '/assets/images/portfolio/behangpapier/paper-3.jpg',
        description: 'Het behangpapier van Hookedonwalls (Mixed Moods, Perplex) is enkel voor durvers. Mixed Moods zoekt naar stoere tegenstellingen zoals deze driehoekige, aardekleurige tegels afgewerkt met een laagje hoogglans metallic.',
        category: PortfolioCategory.Paper
    }),
    new PortfolioImage({
        src: '/assets/images/portfolio/behangpapier/paper-4.jpg',
        description: 'Arte (Alchemy, Volt) tovert je muren om tot edelmetaal. De damast-achtige tekening geeft het behang een klassieke toets. De subtiele glanzende uitstraling brengt ons een stapje dichter bij dat eeuwige, fascinerende leven.',
        category: PortfolioCategory.Paper
    }),
    new PortfolioImage({
        src: '/assets/images/portfolio/behangpapier/paper-5.jpg',
        description: 'Het behangpapier Metal X van Arte brengt de sfeer van geoxideerd metaal. Een zachte glans creëert een luxueus en industrieel effect.',
        category: PortfolioCategory.Paper
    }),
    new PortfolioImage({
        src: '/assets/images/portfolio/behangpapier/paper-6.jpg',
        description: 'Arte brengt met haar skin collectie gezelligheid in je ruimte dankzij hun inspiratie op dierenhuiden. Dit vinyl vliesbehang is zo in detail uitgewerkt dat je de haren op de muur als het ware wil aanraken.',
        category: PortfolioCategory.Paper
    }),
];

const decoImages: PortfolioImage[] = [
    new PortfolioImage({
        src: '/assets/images/portfolio/decoratie/deco-7.jpg',
        description: 'In deze Boss Ice verftechniek zijn kleine glaspareltjes verwerkt die voor een betoverende lichtweerkaatsing zorgen. Breng deze techniek aan op een plaats waar de zon, het licht en schaduw met de wand kan spelen voor een spectaculair resultaat.',
        category: PortfolioCategory.DecoTechniques
    }),
    new PortfolioImage({
        src: '/assets/images/portfolio/decoratie/deco-1.jpg',
        description: 'Deze Boss Maroc Vintage Glamour decoratie techniek herstelt vergane glorie in zijn eer. De combinatie van de aardse tinten van kalk met de glasparels uit de Ice verftechniek zorgen voor een schitterend contrast.',
        category: PortfolioCategory.DecoTechniques
    }),
    new PortfolioImage({
        src: '/assets/images/portfolio/decoratie/deco-2.jpg',
        description: 'De decoratietechniek Metalic Chic van Boss Paints creëert een unieke metaalachtige sfeer. De techniek is veelzijdig inzetbaar. Hier werd hij aangebracht op Patent Decor 3D behang van Arte. Andere mogelijkheden zijn het toepassen van stuktechniek (sterkere metaalschakkeringen), inbrengen van kwaststrepen of verspuiten voor een egaal resultaat.',
        category: PortfolioCategory.DecoTechniques
    }),
    new PortfolioImage({
        src: '/assets/images/portfolio/decoratie/deco-3.jpg',
        description: 'Verfwinkel Colora biedt muurstickers van Wall mania aan. Ze komen in verschillende thema’s en brengen pit en originaliteit in elk mogelijke ruimte.',
        category: PortfolioCategory.DecoTechniques
    }),
    new PortfolioImage({
        src: '/assets/images/portfolio/decoratie/deco-4.png',
        description: 'Aqua Sensa van Boss Paints is de waterbestendige oplossing voor vochtige ruimtes zoals uw badkamer. Deze op cement gebaseerde steenimitatie kan zowel op de wand als op de vloer gebruikt worden. Het natuurlijke matte uitzicht brengt een warme, zuiderse sfeer in jouw badkamer.',
        category: PortfolioCategory.DecoTechniques
    }),
    new PortfolioImage({
        src: '/assets/images/portfolio/decoratie/deco-5.jpg',
        description: 'Een recent vernieuwd product van Boss Paints is hun whiteboard verf. Deze verf kan in wit of in kleur aangebracht worden op eender welke ondergrond.',
        category: PortfolioCategory.DecoTechniques
    }),
    new PortfolioImage({
        src: '/assets/images/portfolio/decoratie/deco-6.jpg',
        description: 'Magneetbehang van Colora is opgebouwd uit glasvezels. Het zorgt voor een strakkere afwerking dan de eerder korreligere structuur van magneetverf.',
        category: PortfolioCategory.DecoTechniques
    }),
];

const exteriorImages: PortfolioImage[] = [
    new PortfolioImage({
        src: '/assets/images/portfolio/exterieur/ext-10.jpg',
        description: 'Schilderen van accent in gevel',
        category: PortfolioCategory.Exterior
    }),
    new PortfolioImage({
        src: '/assets/images/portfolio/exterieur/ext-3.jpg',
        description: 'Schilderen dakoversteek met hoogtewerker',
        category: PortfolioCategory.Exterior
    }),
    new PortfolioImage({
        src: '/assets/images/portfolio/exterieur/ext-11.jpg',
        description: 'Schilderen buitengevel',
        category: PortfolioCategory.Exterior
    })
];

export const portfolioImages: PortfolioImage[] = [
    ...interiorImages,
    ...paperImages,
    ...decoImages,
    ...exteriorImages
];
