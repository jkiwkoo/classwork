class Rect{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    action(){
        return this.width * this.height;
    }
}

const myRect = new Rect(100,200);

console.log(myRect.action());


//지역 만들기
class Numpoly extends Rect{
    constructor(width,height,num){
        super(width,height);
        this.num = num;
    }
    action(){
        return this.width * this.height * this.num;
    }
}

//지역 데이터
const myPoly = new Numpoly(100,300,3);
console.log(myPoly.action());


