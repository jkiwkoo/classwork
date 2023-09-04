const book = {
    title: 'javascript',
    type: 'it',
    level:2
}

//const {title,level=0} = book; : 위에 없는 것만 할당하셈
const {title,level=0} = book;
console.log(title);
console.log(level);


// 키의 변경

const str = title;
console.log(str);
console.log(title);

const graphic = {
    no: 'paint',
    title2: 'photoshop'
}
const {no:art,title2} = graphic;  //no->art로 변수명을 변경하면 변수명 no 로는 더이상 안나옴

console.log(art);
//console.log(no); 로는 안나옴


