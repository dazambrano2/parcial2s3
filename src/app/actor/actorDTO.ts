export class ActorDTO {

    id: number;
    name: string;
    born_year: number;
    country: string;
    genre: string;
    description: string;
    main_award: string;
    img_url: string;

    constructor (
        id: number,
        name: string,
        born_year: number,
        country: string,
        genre: string,
        description: string,
        main_award: string,
        img_url: string,
    ) {
        this.id = id;
        this.name = name;
        this.born_year = born_year;
        this.country = country;
        this.genre = genre;
        this.description = description;
        this.main_award = main_award;
        this.img_url = img_url;
    }
}
