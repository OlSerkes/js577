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

//let num;
//do {
//    num = Number(prompt('Enter a number'));
//} while (Number.isNaN(num)) 
//console.log('You entered ' + num)

//Масиви
//const cars = ['Tesla Model X', 'Ford F150', 'Toyota LC Prada', 'FW Tiguan']
//cars[4] = 'Skoda Fabia'
//cars.push('Nissan rouge')
//console.log(cars)
//console.log(cars.length)

//for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
//}
//for (let i = cars.length - 1; i >= 0; i--) {//в обратном порядке
//   console.log(cars[i]);
//}
//cars.sort();//отсортирует по алфавиту
//cars.reverse();//перевернет наоборот
//cars.sort().reverse()//перевернет наоборот алфавитный порядок
//for (let i = 0; i <= cars.length; i++) {
//   console.log(cars[i]);
//}

//set - выведет только уникальные названия, повторяющиеся значения покажет только один раз
let cars = ['Tesla Model X', 'Ford F150', 'Skoda Fabia', 'Toyota LC Prada', 'FW Tiguan']
cars.push('Skoda Fabia')
//cars = [...new Set(cars)];
//console.log(cars)

//cars = [...new Set(cars)];
//for (let i = 0; i < cars[4].length; i++){
  // console.log(cars[4][i]);
//}//выведет 4ый элемент массива в столбец по буквам

//еще один способ вывести только уникальные названия из массива и убрать повторяющиеся
const uniqueCars = [];
for (let i = 0; i < cars.length; i++) {
   if (!uniqueCars.includes(cars[i]))
   uniqueCars.push(cars[i]);
}
console.log(uniqueCars);

//сортировка данных в массиве
const nums = [1, 2, 21, 4, 42, 2, 40, 50, 100];
//nums.sort(compare);
//console.log(nums)
//function compare(a, b) {
   //return a - b;//сортировка по увеличению
  // return b - a;//сортировка по убыванию
//}
//сортировка с помощью стрелочной функции
nums.sort((a, b) => {
   return b - a;
});
console.log(nums)//or
nums.sort((a, b) => a - b)
console.log(nums)
