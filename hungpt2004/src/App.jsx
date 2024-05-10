import Header from './Header.jsx'
import Body from './Body.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'


let greet = (name, timeOfDay) => {
  console.log(`${timeOfDay} and ${name}`);
};

greet('Hung', 'morning');

let person = {
  name:'John',
  age:30,
  greet: function(){
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
  }
};
person.greet();

let sum = (...numbers)=>{
  let total = 0;
  for(let number in numbers){
    total += numbers[number];
  }
  return total;
}

console.log(`Sum: ${sum(1,2,3,4,5,6,7,8,10)}`);

function App() {

    return(
        //Để sử dụng thành phần thì gọi tên của nó trong thẻ
        //Gọi Header.jsx
        <>
          {/* <Header/>
          <Food/>
          <Footer/> */}
          <Card/>
        </>
    );
}

export default App
