let a  = 123;
console.log(a);
console.log(typeof a);
// int to string
let b = String(a);
console.log(b);
console.log(typeof b);

//boolean to string
let c = false
console.log(c);
console.log(typeof c);

let d = String(c)
console.log(d);
console.log(typeof d);

//String to number(Option 1)

let e = "123";
console.log(e);
console.log(typeof e);

let f = Number(e);
console.log(f);
console.log(typeof f);
// string to num(Parseint)
let e1 = "tap123";//123tap, tap123, " 123tap ","1 2 3"
console.log(e1);
console.log(typeof e1);

let f1 = parseInt(e1);
console.log(f1);
console.log(typeof f1);
parseInt("123tap");   // 123   (reads digits at start, stops at 't')
parseInt("tap123");   // NaN   (no digits at the start)
parseInt(" 123tap "); // 123   (ignores spaces at beginning, then reads digits)
parseInt("1 2 3");    // 1     (stops at first space after '1')


// boolean --> number

let g= true;
console.log(g);
console.log(typeof g);

let g1 = Number(g);
console.log(g1);
console.log(typeof g1);

//number to boolean
let a1 = 1;
console.log(a1);
console.log(typeof a1);
console.log(Boolean(a1))

