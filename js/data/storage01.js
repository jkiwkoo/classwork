localStorage.setItem('book','javascript');

const color = {
    title: 'red',
    sample: 'apple',
    no:['no01','no02']
}

// color 객체 -> 로컬스토리지에 넣기 

//localStorage.setItem('color',color)

const str = JSON.stringify(color);
console.log(str)

localStorage.setItem('color',str);


// get
const obj = localStorage.getItem('book');
console.log(obj);

const obj2 = localStorage.getItem('color')
console.log(obj2);
console.log(obj2.sample);

const obj3 = JSON.parse(obj2);
console.log(obj3);
console.log(obj3.sample);
console.log(obj3.no);
console.log(obj3.title);