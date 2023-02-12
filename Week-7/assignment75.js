const array = [5, 10, 3, 2, 50, 82];
const B = 78;
N= array.length;
let flag;
for(var i=0;i<N-1;i++){
    for(var j = i+1;j<N;j++){
        if(Math.abs(array[i]-array[j])===B){
            flag = 'done';
            console.log(1);
            break
        }
    }
    if(flag=='done'){
        break;
    }
}
console.log(i,j);
if(i==N-1 && j==N){
    console.log(0);
}
