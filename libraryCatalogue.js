class Media {
    constructor(title) {
        this._title = title;
        this._ratings = [];
        this._isCheckedOut = false;
    }

    get title() {
        return this._title;
    }

    get ratings() {
        return this._ratings;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }

    getAverageRating() {
        let sumRatings = this._ratings.reduce((accumulator, currentValue) => accumulator + currentValue);
        return sumRatings / this._ratings.length;
    }

    addRating(rating) {
        if (rating < 1 || rating > 5) {
            console.log(`${rating} is not between 1 and 5. Try again!`)
        } else {
            this._ratings.push(rating);
        }
    }
}

class Book extends Media {
    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(title, director, runTime, movieCast){
        super(title);
        this._director = director;
        this._runTime = runTime;
        this._movieCast = movieCast;
    }

    get director(){
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }
}

class CD extends Media {
    constructor(artist, title, songs) {
        super(title);
        this._artist = artist;
        this._songs = songs;
    }

    get artist() {
        return this._artist;
    }

    get songs() {
        return this._songs;
    }

    shuffle() {
        // Using the Knuth shuffle algorithm
        // Make a shuffledSongs array that consists of all the songs
        let shuffledSongs = [...this._songs];

        // For each index number i of the array, decreasing after each iteration
        for (let i = shuffledSongs.length - 1; i > 0; i--) {
            
            // Pick a random number j between 0 and the current index number
            const j = Math.floor(Math.random() * i);

            // Assign the i'th value to a temporary variable
            const temp = shuffledSongs[i];

            // In the array, set the i'th value to the j'th value
            shuffledSongs[i] = shuffledSongs[j];

            // In the array, set the j'th value to the i'th value we stored in the temporary variable
            shuffledSongs[j] = temp;
        }

        return shuffledSongs;
    }
}

class Catalogue {
    constructor() {
        this._media = [];
    }

    addMedia(obj) {
        this._media.push(obj);
    }
}

// Step 15: create a new book
const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
console.log(historyOfEverything.title + ' is checked out? ' + historyOfEverything.isCheckedOut);

// Step 16: toggle checkout status
historyOfEverything.toggleCheckOutStatus();

// Step 17: log isCheckedOut
console.log(historyOfEverything.title + ' is checked out? ' + historyOfEverything.isCheckedOut);

// Step 18: add ratings
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

// Step 19: get average rating
console.log(historyOfEverything.getAverageRating());

// Step 20: Create a new movie
const speed = new Movie('Speed', 'Jan de Bont', 116);

// Step 21: toggle check out status
speed.toggleCheckOutStatus();

// Step 22: log isCheckedOut
console.log(speed.title + ' is checked out? ' + speed.isCheckedOut);

// Step 23: add ratings
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

// Step 24: Log average rating
console.log(speed.getAverageRating());

// Step 25.1: add more properties to each class
const thor = new Movie('Thor: Love and Thunder', 'Taika Waititi', 118, ['Chris Hemsworth', 'Natalie Portman', 'Christian Bale']);
console.log(thor);

// Step 25.2: create a CD class that extends Media
const leah = new CD('Leah Haywood', 'Leah', ['We Think It\'s Love','Takin\' Back What\'s Mine','My Own Thing','Just to Make You','One Word','A Little Messed Up','Missing You','Sweet Baby Dreamer','Crazy','Summer of Love','The Moment','Take a Chance']);
console.log(leah);

// Step 25.3: add a QC to the addRatings() method
leah.addRating(15);
leah.addRating(2);
leah.addRating(5);
leah.addRating(4);
leah.addRating(1000);
leah.addRating(3);
leah.addRating(1);
leah.addRating(-5);
leah.addRating(5);
leah.addRating(10);

console.log(leah.ratings);

// Step 25.4: shuffle the songs
console.log(leah.shuffle());

console.log(leah.songs);

// Step 25.5 Create a Catalogue class that holds all media itmes in our library
const libraryCatalogue = new Catalogue()
libraryCatalogue.addMedia(leah)

console.log(libraryCatalogue);

libraryCatalogue.addMedia(thor);

console.log(libraryCatalogue)