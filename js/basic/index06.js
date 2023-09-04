import num from './index08';
//import {ram,color} from './index07';
import * as main from './index07';


num('welcome');
// 구조분해 할당을 할 건지, * 사용 할 건지,

//ram('javascript');
//console.log(color.name);
//console.log(color.sample);

console.log(main);
console.log(main.color.name);
console.log(main.default);
main.ram(10);

