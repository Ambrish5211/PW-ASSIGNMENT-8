const filter = (arr) => {
 const filteredBooks = arr.filter((element) => {
  return element.Publication > 2010;
 })
 const updatedBooks =  filteredBooks.map((element) =>{

  if(element.Publication >= 2010)
  {
    const updatedName = element.Name.toUpperCase();
      const obj = {
        Name: updatedName,
        Author: element.Author,
        Publication: element.Publication,
      };
      return obj;
  }
  })
return updatedBooks;
};

const books = [
  { Name: "Ring of fire", Author: "George RR MARTIN", Publication: 2000 },
  { Name: "A clash of King", Author: "George RR MARTIN", Publication: 2014 },
  { Name: "House of Dragon", Author: "George RR MARTIN", Publication: 2008 }
];

const result = filter(books);
console.log(result);
