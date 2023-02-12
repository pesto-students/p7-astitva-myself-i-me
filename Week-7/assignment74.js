const price = [7,1,5,3,6,4];
N = price.length;
let maxProfit = 0;
let profit = 0;
for(let i=0;i<N-1;i++) {
    for(let j=i+1;j<N;j++) {
        profit = price[j] - price[i];
        profit>maxProfit ? maxProfit = profit : '';
    }
}

console.log(maxProfit);