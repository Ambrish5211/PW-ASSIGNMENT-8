const convert = (arr) => {

var newList =  arr.map((element) => {
    
  var inRupees = {
    name : element.name,
    Price : element.Price*80
  }
  return inRupees;
 });
 return newList;
};

const list = [
  { name: "Shampoo", Price: 30 },
  { name: "Shoes", Price: 70 },
  { name: "I-Phone", Price:200  },
  { name: "Mac", Price: 500 },
  { name: "Dairy Milk", Price: 2 },
];

const result = convert(list);
console.log(result);
