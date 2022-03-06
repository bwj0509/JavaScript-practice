// const car = {
//     wheels : 4,
//     drive(){
//         console.log('drive...');
//     }
// }


const Bmw = function(color){
    this.color = color;
}; // 생성자함수

Bmw.prototype.wheels = 4;
Bmw.prototype.drive = function(){
    console.log('drive...')
}
Bmw.prototype.navigation =1;
Bmw.prototype.stop = function(){
    console.log('STOP!!')
}
// 공통된 속성은 프로토타입을 이용해서 지정할 수 있다.


const x5 = new Bmw('red');
const z4 = new Bmw('blue');


//x5.__proto__=car;