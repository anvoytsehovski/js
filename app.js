let value;

// Number to string
value = String(12);
value = String(12+8);
value = (40).toString();

// Boolean to String
value = String(true); // true string

// Arrey to String
value = String([1, 2, 3])  // 1,2,3 string

// Object to String
value = String({ name: 'Andrew' }); // object Object string

// implicit conversion
value = 20 + '' + 20; // 2020 string
value = 20 - ''; // number
value = 20 - '2'; // number 22
value = 20 - 'b'; // NuN
value = 20 + '' + undefined; // 20undefined

value = true + 10; //11
value = false + undefined; // NuN

// String to number
value = Number('20'); // 20 number
value = Number(true); // 1
value = Number(null); // 0
value = Number('false'); // NuN
value = Number([1,2,3]); // NuN

value = parseInt('22');  // 22 number
value = parseInt('22px');  // 22 number
value = parseInt('px22');  // NuN

// Boolean
value = Boolean('hello'); //true
value = Boolean(''); // false
value = Boolean(12);  // true
value = Boolean(0);  // false
value = Boolean(undefined); // false
value = Boolean(null); // false
value = Boolean({}); // true
value = Boolean([]); // true

console.log(value);
console.log(typeof value);

