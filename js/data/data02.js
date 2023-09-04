const color = {
    title: 'red',
    sample: 'apple',
    no:123
}

console.log(color);

// 일반적인 객체 -> JSON,TEXT화

const str = JSON.stringify(color);
console.log(str);
console.log(str.sample); // str 이 json화 되었기 때문에 undifine 나옴

// JSON -> 일반적인 값, 객체 변경 -> javascript 매서드, 작업
const obj = JSON.parse(str);
console.log(obj);
console.log(obj.sample); //다시 일반 객체화 되었기 때문에 sample 의 값이 나옴

