const N = 5;
const array = [0,2,1,2,0];

var count0 = 0;
var count1 = 0;
var count2 = 0;

for(let i of array){
    i==1 ? count1++ : i==0 ? count0++ : i==2 ? count2++ : ''
}
const zeroArray = new Array(count0).fill(0);
const oneArray = new Array(count1).fill(1);
const twoArray = new Array(count2).fill(2);
const finalArray = zeroArray.concat(oneArray).concat(twoArray);
console.log(finalArray);


