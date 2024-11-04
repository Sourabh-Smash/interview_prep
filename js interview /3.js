// ? currying in JS 
const fn = (a, b, c) => a * b * c;

const afn = (a) => (b) => (c) => console.log(a * b * c);

afn(2);
afn(2)(3);
afn(2)(3)(4);
