class Media {
    constructor(title){
          this._title = title;
      this._ratings = [];
      this._isCheckedOut = false;
    }
  
    get title(){
      return this._title;
    }
  
    get ratings(){
          return this._ratings;
    }
  
    get isCheckedOut(){
      return this._isCheckedOut;
    }
  
    toggleCheckOutStatus(){
      this._isCheckedOut = !this._isCheckedOut;
    }
  
    getAverageRating() {
    let ratingsSum =this.ratings.reduce((accumulator, rating) => accumulator + rating);
    return ratingsSum / this.ratings.length;
  }
  
    addRating(rating){
      this._ratings.push(rating);
    }
  }
  class Book extends Media {
    constructor(author, title, pages){
      super(title);
      this._title = title;
      this._pages = pages;
      this._author = author;
    }
  
    get pages(){
      return this._pages;
    }
  
    get author(){
      return this._author;
    }
  }
  class Movie extends Media {
    constructor(director, title, runTime){
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
  
    get runTime(){
      return this._runTime;
    }
  
    get director(){
      return this._runTime;
    }
  }
  let historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything. getAverageRating());
  
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating()); 
  