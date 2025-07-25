const marvel_heros = ["Thor","Ironman","Spiderman"]
const dc_heros = ["Superman","Flash","Batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);

// Concat joins 2 array and store them in new array
// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

// *In concat we can only join 2 arrays but in spread operator(...arr) we can join many

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

//* flat makes array all element together in array
// => [1,2[3,4]] => [1,2,3,4] 

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("Yash"));
// console.log(Array.from("Yash"));
// console.log(Array.from({name: "yash"})); // ****

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3));



