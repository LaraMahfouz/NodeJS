//write a variable without initial value
var z = undefined;
var x = Number;
console.log(z);

//write a variable with initial value
var x = 4
console.log(x);

//write 3 variables in same line without initial value
var a = null, b = null ,  c = null;
console.log(a,b,c);

//write 3 variables in same line with initial value
var a = 4, b = "November" ,  c = true;
console.log(a,b,c);

//write 3 variables with Boolean value
var a = true, b = false ,  c = true;
console.log(a,b,c);

//write a constant
const PI = 3.14;
console.log(PI);

//write an empty array without initializing its size (1)
var arr = new Array(5);
console.log(typeof(arr));
//write an empty array without initializing its size (2)
var arr = [];
console.log(arr);

//write an array of number from 1 to 10
var arr = new Array(1,2,3,4,5,6,7,8,9,10);
console.log(arr);

//write an array of strings has letters from A to J
var arr = new Array("A",'B',"C","D","E","F","J");
console.log(arr);

//Write an Object has at least 3 attributes (keys) and give each one a numeric value
let user = {    
    height: 158 ,  
    age: 22,
    wight: 55   
  };
  console.log(user);

//write an object has at least 3 attributes (keys) and give each one a string value
let user2 = {    
    name: "Lara",  
    job: "Designer",
    favouritFood: "Dwalle"   
  };
  console.log(user2);

 // write an object has at least 3 attributes (keys) and give each one a Boolean value
 let user3 = {    
    likecat:false,
    Trainee: true ,
    Designer:true  
  };
  console.log(user3);

  //write an object has at least 3 attributes (keys) and give each one an array value
  const hero = {
    name: 'Batman',
    city: 'Gotham'  
  };
  console.log(hero);

  // write an object has at least 3 attributes (keys) and give each one an array value
let journal = [
    {food: ["pizza", "chiken", "Potato"]
            },
    {deserts: ["ice cream", "Chocolate"]
            },
    {sports: ["football", "tenis"]
            },
  ];
  console.log(journal);

//write an object has at least 3 attributes (keys) and give each one an object value (object of objects)
  let number = [
    {z: 1, x: 2},
    {z: 3, x: 4},
    {z: 5, x: 6},

];
console.log(number);

//Write an object has at least 5 attributes (keys) and give each one different type of values including: string, number, Boolean, array, object
let user5 =  {A: 'A', B: [1], C: false, D:4 , E:"Hello" }
console.log(user5);

//Write an array of objects
let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    }]
    console.log(cars);
   // Write a function to sum two numbers passed in parameters
    var obj = [{ likeBird: true },
         { Name: "Hussam" }];
         console.log(obj);


//Write a function to sum two numbers passed in parameters
function sum2(x, y) {
    return x + y;
  }
  console.log(sum2(4, 8));

  //write a function to multiply two numbers
  function multiply2(x, y) {
    return x * y;
  }
  console.log(multiply2(4, 8));

  //write a function to sum two numbers entered by user
  function sum4(x, y) {
    return x + y;
  }
  console.log(sum4(4, 8));

  //Write a function to return a value
  function minuse(num1,num2){
    return num1-num2;
}
console.log(minuse(120,50));

// Write a function to print a value
function print() {
    return "Lara Mahfouz";
  };
console.log(print());