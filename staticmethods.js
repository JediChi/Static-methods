class Library{
    static genre = "Thriller"; //static property 
    constructor(name, pages) {
      this.name = name;
      this.pages = pages;
    }
    static typeOfBook(allGenres){ // static method 
      console.log(`Name of Book is ${allGenres.name} \nNumber of pages of the book is ${allGenres.pages} \nGenre of book is ${Library.genre}`);
    }
  }
  
  let new_book = new Library("The Richest Man in Babylon", 234); 
  
  console.log("Accessing Library.genre static property"); 
  console.log(Library.genre);
  
  console.log("Calling static method Library.typeOfBook"); 
  Library.typeOfBook(new_book);
