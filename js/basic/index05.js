const fruit = ['apple','orange','banana'];
console.log(fruit);
console.log(fruit[0],fruit[1],fruit[2]);
console.log(...fruit);


const fruit1 = ['apple','orange','banana','melon'];
console.log(fruit1);
console.log(fruit1[0],fruit1[1],fruit1[2]);
console.log(...fruit1);

// obj(...fruit);
// function obj(a,b,c){
// return console.log(a,b,c)
// }

function obj(a,b,c){
    return {a,b,c};
}
console.log(obj(...fruit));
