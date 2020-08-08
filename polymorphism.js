class Movie {
    constructor(title) {
        this.title = title;
    }


    story() {
        return 'no story here'
    }

    get name() {
        return this.title;
    }
}


class Batman extends Movie {
    constructor() {
        super('Batman')
    }
    // overriding
    story() {
        return 'Batman begins';
    }
}

class StarWars extends Movie {
    constructor() {
        super('Star wars');
    }
    // overriding
    story() {
        return ' force awakens';
    }

}

class Sholay extends Movie {
    constructor() {
        super('Sholay');
    }

    story() {
        return 'Gabbar '
    }
}

class BadBoys extends Movie {
    constructor() {
        super('BadBoys');
    }
    story() {
        return 'will smith '
    }

}


function selectMovie() {
    let randomNumber = Math.floor(Math.random() * 4) + 1;
    switch (randomNumber) {
        case 1: return new Batman(); break;
        case 2: return new StarWars; break;
        case 3: return new Sholay; break;
        case 4: return new BadBoys; break;
    }
}

for (let i = 0; i < 10; i++) {
    let movie = selectMovie();
    console.log('Movie name is ' + movie.name + ' and is about ' + movie.story())
}