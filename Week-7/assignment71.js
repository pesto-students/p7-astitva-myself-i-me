array = [1, 2, 3, 4, -10]
var start = 0;
var end = 1;
var maxSum = 0;
var sum =0;

function Add(a, b) {
    return a + b;
  }

while(start<end) {
    let tempSum = array.slice(start,end).reduce(Add)
    console.log(tempSum);
    if(tempSum>maxSum){
        maxSum = tempSum;
        start++;
        console.log('if',start,end,tempSum,maxSum);
    }
    else{
        end++;
        console.log('else',start,end,tempSum,maxSum);

    }
}
// console.log(maxSum);