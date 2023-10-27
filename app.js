/* -------------------------------------------------------------------------- */
/*                                   13. soru                                 */
/* -------------------------------------------------------------------------- */
console.log("******************************13.soru çözüm***************************")
const input1 =[1, -4, 12, 0, -3, 30, 42, -150]

let pozitifToplam = input1.filter((x)=> x > 0).reduce((a, b)=> a+b, 0)
console.log("Pozitif sayıların toplamı1:", pozitifToplam)
 
// let negativeSum = input.filter((x)=> x < 0).reduce((a, b)=> a+b, 0)
// console.log(negativeSum)

//!.....................................2.çözüm...........................

const input2 = [1, -4, 12, 0, -3, 30, 42, -150];

function sumOfPositiveElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

const result = sumOfPositiveElements(input2);
console.log("Pozitif sayıların toplamı2:", result);
//!........................................3.çözüm.........................

const input3 = [1, -4, 12, 0, -3, 30, 42, -150];

const positiveSum3= input3.reduce((sum, element) => {
  if (element > 0) {
    return sum + element;
  }
  return sum;
}, 0);

console.log("Pozitif sayıların toplamı3:", positiveSum3);

//!..........................4.çözüm.......................................

 const input4 = [1, -4, 12, 0, -3, 30, 42, -150];

const positiveNumbers4 = input4.filter(element => element > 0);
const positiveSum4 = positiveNumbers4.reduce((sum, element) => sum + element, 0);

console.log("Pozitif sayıların toplamı4:", positiveSum4);//



//!.......................5.çözüm......................................
const input5 = [1, -4, 12, 0, -3, 30, 42, -150];

const positiveNumbers5 = input5.map(element => element > 0 ? element : 0);
const positiveSum5 = positiveNumbers5.reduce((sum, element) => sum + element, 0);

console.log("Pozitif sayıların toplamı5:", positiveSum5);


//!............................................6.çözüm....................
const input6 = [1, -4, 12, 0, -3, 30, 42, -150];

const positiveSum = input6.reduce((a, b) => b > 0 ? a + b : a, 0);

console.log("Pozitif sayıların toplamı6:", positiveSum);





/* -------------------------------------------------------------------------- */
/*                                   14.soru                                  */
/* -------------------------------------------------------------------------- */
console.log("******************************14.soru çözüm***************************")
  const input = "John Ronald Reuel Tolkien";
  yeniİsim = (str) => {
  const arr = str.split(' ');
  const ilkharf = arr.map((part) => part[0].toUpperCase()).join('');
  return ilkharf;
};

const kısaİsim = yeniİsim(input);
console.log("Kısa İsim:", kısaİsim);


/* -------------------------------------------------------------------------- */
/*                                   15.soru                                  */
/* -------------------------------------------------------------------------- */
console.log("******************************15.soru çözüm***************************")
// Bir dizi içerisindeki sayıların karesini alarak her bir sayıyı konsola yazdırın.
let numbers3 = [1, 2, 3, 4, 5];

const sayiKare=numbers3.map((a, i, num)=>(a*a));
console.log(sayiKare);


//! foreachle yapabiliriz..........................
const arr3 = [1, 2, 3, 4, 5];
const squaredArr = [];

arr3.forEach(a=> {
  squaredArr.push(a * a);
});
console.log(squaredArr)

//! for döngüsü ile ....................................
const arr5 = [1, 2, 3, 4, 5];
const squaredArr2 = [];

for (let i = 0; i < arr5.length; i++) {
  squaredArr2.push(arr5[i] * arr5[i]);
}
console.log(squaredArr2)

/* -------------------------------------------------------------------------- */
/*                                  .16.soru                                  */
/* -------------------------------------------------------------------------- */
console.log("******************************16.soru çözüm***************************")
const num10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const toplaCiftSayı = num10.reduce((toplam, sayi) => {
  return sayi % 2 === 0 ? toplam + sayi : toplam;
}, 0);

console.log("Çift sayıların toplamı:", toplaCiftSayı);


//!..farklı çözüm......................

const num11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const toplaCiftSayı2= num11.reduce((toplam, sayi) => {
  if (sayi % 2 === 0) {
    return toplam + sayi;
  }
  return toplam;
}, 0);

console.log("Çift sayıların toplamı:", toplaCiftSayı2);





/* -------------------------------------------------------------------------- */
/*                           ........17.Soru.......                           */
/* -------------------------------------------------------------------------- */
console.log("******************************17.soru çözüm***************************")
const names= ["Alice", "Bob", "Charlie"]

const namesLengths = names.map(name => name.length);

console.log(namesLengths);

//! farklı çözüm foreach ile....
const names2 = ["Alice", "Bob", "Charlie"];
const nameLengths2 = [];

names.forEach(name => {
  const length = name.length;
  nameLengths2.push(length);
});

console.log(nameLengths2);



/* -------------------------------------------------------------------------- */
/*                                ...18.soru...                               */
/* -------------------------------------------------------------------------- */
console.log("******************************18.soru çözüm***************************")
const words = ["apple", "banana", "cherry"]; 
const capitalizedNames = words.map(word => word.toUpperCase());
console.log(capitalizedNames);


//Eğerki ilk harf büyük diğerleri küçük olmasını isteseydik;

const words1 = ["apple", "banana", "cherry"]; 
const capitalizedNames1 = words.map(word => word[0].toUpperCase() + word.slice(1));
console.log(capitalizedNames1);


//!farklı çözüm.................
const words2 = ["apple", "banana", "cherry"];
const capitalizedWords3 = [];

for (let i = 0; i < words.length; i++) {
  const capitalizedWord2 = words2[i].toUpperCase();
  capitalizedWords3.push(capitalizedWord2);
}

console.log(capitalizedWords3);


//! farklı çözüm(foreach).............

const words4 = ["apple", "banana", "cherry"];
const capitalizedWords5 = [];

words.forEach(word => {
  const capitalizedWord4 = word.toUpperCase();
  capitalizedWords5.push(capitalizedWord4);
});

console.log(capitalizedWords5);
