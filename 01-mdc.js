function mdc(a, b) {
    if (b == 0) {
        return a;
    } 
    else {
        return mdc (b, a % b);
    }
}
console.log(mdc(42,60));