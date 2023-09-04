class Book{
    constructor(name,type){
        this.name = name;
        this.type = type;
    }
    getBook(){
        document.write(`<p>${this.name} - ${this.type}</p>`)
    }
}

//본부 데이터 만들기
const myBook = [
    new Book('book1','all'),
    new Book('book2','all'),
    new Book('book3','all')
];

//지역 만들기
class It extends Book{
    constructor(name,type,level){
        super(name,type);
        this.level = level;
    }
    getCall(){
        document.write(`<p>${this.name} - ${this.type} - ${this.level}</p>`)
    }
}

//지역 데이터
const myIt = [
    new It('html','인터넷', 1),
    new It('javascript','개발', 2),
    new It('react','앱', 3)
]

for(let i in myBook){
    myBook[i].getBook();
}

for(let i in myIt){
    myIt[i].getCall();
}