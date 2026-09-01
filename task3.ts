//Написать программу, которая проверяет, если число четное до выводит "чет", в ином случае выводит "нечет". Числа в диапазоне от 1 до 20.
//Одно решение с помощью цикла for, другое - while
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`${i} число четное`);
  } else {
    console.log(`${i} нечетное`);
  }
}

let number: number = 1;
while (number <= 20) {
  if (number % 2 === 0) {
    console.log(`${number} число четное`);
  } else {
    console.log(`${number} нечетное`);
  }
  number++;
}
