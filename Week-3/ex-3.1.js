function memoize(fn) {
    const cache = new Map();
    return function(...args) {
        const key = args.toString();
        if(cache.has(key)){
            return cache.get(key);
        }
        cache.set(key, fn(...args));
        return cache.get(key);
    }
}

function factorial(n) {
    if(n==0) {
        return 1
    }
    return factorial(n-1)*n
}

function fib(n) {
    if(n<2) {
        return n;
    }
    return fib(n-1)+fib(n-2)
}

function time(fn) {
    console.time();
    fn()
    console.timeEnd()
}

const factM = memoize(fib)

time(()=> factM(100))
time(()=> factM(101))
// time(()=> factM(1100))
// time(()=> factM(1101))

