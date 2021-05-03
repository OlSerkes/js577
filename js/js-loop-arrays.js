//for (let i = 0; i < 10; i++) {
   // console.log(i);
//}
//Выводить парные числа 0-100
//for (let i = 0; i <= 100; i+=2) {
 //   console.log(i);
//}
//Вывести от 100 до 0
//for (let i = 100; i >= 0; i-=2) {
  //  console.log(i);
//}
//Цикл с предусловием
//let i = 0;
//while (i < 10) {
   // console.log (i);
   // i++;
//}
//Цикл с постусловием
//do {
//    console.log(i);
//    i++;
//} while (i < 0);

//let num = Number(prompt('Enter a number'));
//while (Number.isNaN(num)) {
   // num = Number(prompt('Enter a number'));
//}
//console.log('You entered ' + num);//or

let num;
do {
    num = Number(prompt('Enter a number'));
} while (Number.isNaN(num)) 
console.log('You entered ' + num)