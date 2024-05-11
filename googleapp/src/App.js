import logo from './logo.svg';
import './App.css';

var people = [
  { name: 'Jack', age: 50 },
  { name: 'Michael', age: 9 },
  { name: 'John', age: 40 },
  { name: 'Ann', age: 19 },
  { name: 'Elisabeth', age: 16 }
]
//Exercise 1
//1
console.log('•	Find the first person off the people array is teenager (age >=10 and age <=20).');
function firstPerson() {
  let first = null;
  people.forEach(p => {
    if (p.age >= 10 && p.age <= 20) {
      first = p;
      return;
    }
  });
  return first;
}
console.log(firstPerson());
//2
console.log('•	Find the all person of the people array is teenager (age >=10 and age <=20).');
function allPerson() {
  people.forEach(p => {
    if (p.age >= 10 && p.age <= 20) {
      console.log(p);
    }
  });
}
allPerson();
//3
console.log('•	Check if every person of the people array is teenager (age >=10 and age <=20), which should return true or false.');
function checkEveryTeenager(people) {
  return people.every(p => p.age >= 10 && p.age <= 20);
}
console.log(checkEveryTeenager(people));
//4
console.log('•	Checks if any person of the people array is teenager (age >=10 and age <=20), which should return true or false.');
function checkAnyTeenager() {
  return people.some(p => p.age >= 10 && p.age <= 20);
}
console.log(checkAnyTeenager(people));
// =====================================================================
//Exercise 2
console.log('Exercise 2');
const numberArray = [1, 2, 3, 4];
function calculateSumByReduce(array) {
  const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0); //Số 0 từ tính từ tổng = 0
  console.log(sum);
}
console.log(`Sum: ${calculateSumByReduce(numberArray)}`)
// =====================================================================
//Exercise 3
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12"
  }
};
//1
console.log('•	Print the name of each company using forEach');
function nameCompany() {
  companies.forEach(c => {
    console.log(c.name);
  });
}
nameCompany();
//2
console.log('•	Print the name of each company that started after 1987');
function nameCompanyWithYear() {
  companies.forEach(c => {
    if (c.start > 1987) {
      console.log(c.name);
    }
  });
}
nameCompanyWithYear();
//3
console.log('•	Get only the companies that have category Retail, increment their start by 1 and append in the DOM a div that has the name, the category, the start and the end in paragraphs elements');
let newC = companies.filter((c) => {
  if (c.category === 'Retail') {
    return c;
  }
});
newC.forEach((c) => {
  ++c.start;
})
//4
console.log('•	Sort the companies based on their end date in ascending order');
function sortEndDate() {
  companies.sort((a, b) => a.end - b.end);
  console.log(companies);
}
sortEndDate();
//5 
console.log('•	Sort the ages array in descending order');
function sortAgeDes(age) {
  const n = age.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (age[j] < age[j + 1]) {
        const temp = age[j];
        age[j] = age[j + 1];
        age[j + 1] = temp;
      }
    }
  }
  return age;
}
console.log(sortAgeDes(ages));
//6
console.log('•	Print the sum if you add all the ages using reduce');
function sumAgeByReduce(age) {
  const ageTotal = age.reduce((a, b) => a + b);
  console.log(ageTotal);
}
sumAgeByReduce(ages);
//7
console.log('•	Make a new object that has the properties of name and category same as the companies [0] and a method print that prints out the name, use object restructuring and ES6 JS');
const { name, category } = companies[0];
const newObject = {
  name,
  category,
  print() {
    console.log(newObject.name);
  }
}
newObject.print();
//8
console.log('•	Create a function that takes an unknown number of arguments that are numbers and return their sum;');
function sumUnkownNumber(...numbers){
  const total = [...numbers].reduce((a,b)=>a+b);
  console.log(total);
}
sumUnkownNumber(...ages);
//9
console.log('•	Make a function that takes an unknown number of arguments of any type and adds them in an array and returns the array, if the argument is an array, it should add its values to the array that will be returned by the function');
const addArray = (...rest) =>{
  let rs = [];
  rest.forEach((e) =>{
    if(Array.isArray(e)){
      rs = [...rs,...e];
    }else{
      rs.push(e);
    }
  });
  return rs;
}
console.log(addArray('a',['b','c','d'],1,{name:'Hung'}));
//10
console.log('•	Destructuring the property street in a variable named street from the object person'); //OBJECT DESTRUCTURING
const {address: {street}} = person; 
console.log(street);
//11
console.log('•	Write a function that every time you call it, it returns a number that increments starting from 0');
let increment = () => {
  let counter = 0;
  return function(){
     return ++counter;
  }
}
let increase = increment();
console.log(increase());
console.log(increase());
console.log(increase());
//12
console.log('•	Create a function that destructors the query parameters of a URL and adds them in an object as key value pairs and then returns the object');
const getQueryParams = (url) =>{
  const params = url.split('?')[1].split('&');
  const obj = {};
  params.forEach((p) =>{
    const [key,value] = p.split('=');
    obj[key] = value;
  })
  return obj;
}
console.log(getQueryParams('https://example.com/page?name=Minh&age=20&city=Da Nang'));

//Exercise 4
console.log('Create classes as images');
class Shape {
  constructor(color){
    this.color = color;
  }
  getArea(){
    return 0;
  }
  toString(){
    return `Color: ${this.color}`;
  }
}
class Rectangle extends Shape {
  constructor(color,width,length){
    super(color);
    this.width = width;
    this.length = length;
  }
  getArea(){
    return this.width * this.length;
  }
  toString(){
    return `${super.toString()}, length = ${this.length}, width = ${this.width}`;
  }
}
const rectangle = new Rectangle("blue", 5, 10);
console.log(rectangle.toString()); 
console.log(rectangle.getArea()); 

class Triangle extends Shape {
  constructor(color, base, height) {
      super(color);
      this.base = base;
      this.height = height;
  }

  getArea() {
      return 0.5 * this.base * this.height;
  }
  toString(){
    return ` ${super.toString()}, height = ${this.height}, base = ${this.base}`;
  }
}
const triangle = new Triangle("green", 4, 5);
console.log(triangle.toString());
console.log(triangle.getArea()); 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>FullName: Phạm Trọng Hùng</p>
        <p>Class: SE17D08</p>
        <p>School: FPT University</p>
        <p>Description: Iam 19 years old and my major is software engineer. My all time favourite sport is basketball</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
