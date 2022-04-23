//11.Program to celsius to fahrenheit

// const celsius=prompt("enter the celsius")
// const fahrenheit= celsius *1.8 + 32
// console.log(`celsius is equal to fahrenheit is ${fahrenheit} degree fahrenheit`)



//12.Find the length of string

// function charCount(string){
//    let length=0
//     while(string[length]){
//         length++
//     }
//     return length
// }
// console.log(charCount("prashanth"))



//13.Combine multiple into one array

// let a=["apple"]
// let b=["banana"]
// let c=["coco"]

// let combinearr=a.concat(b,c)
// console.log(combinearr)

// let combinearr2=[...a,...b,...c]
// console.log(combinearr2)



//14.Convert decimal to binary  

// let number = prompt("Enter a decimal number: ");

// function convertToBinary(x) {
//   let bin = 0;
//   let rem,
//     i = 1,
//     step = 1;
//   while (x != 0) {
//     rem = x % 2;
//     console.log(
//       `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(
//         x / 2
//       )}`
//     );
//     x = parseInt(x / 2);
//     bin = bin + rem * i;
//     i = i * 10;
//   }
//   console.log(`Binary: ${bin}`);
// }
// convertToBinary(number);

/////////or/////////////

//using toString() in-built method

// const number = parseInt(prompt("Enter a decimal number: "));
// const result = number.toString(2);

// console.log("Binary:" + " " + result);




//15.Program to sort array in Descending order

// let arr=[20,30,40,100,65,85]
// for(let i=1;i<arr.length;i++){
//     for(let j=0;j<i;j++)
//     {
//         if(arr[i]>arr[j])
//         {
//             let temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp
//         }
//     }
// }
// console.log(arr)



