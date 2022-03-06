class Car {
    constructor(color){
        this.color = color;
        this.wheels = 4;
    }
    drive(){
        console.log('drive...')
    }
    stop(){
        console.log('STOP!!!')
    }
}

class Bmw extends Car{ // Bmw클래스는 Car 클래스를 상속한다!
    constructor(color){
        super(color);
        this.navigation = 1;
    }
    park(){
        console.log('park')
    }
    stop(){
        console.log('BMW의 STOP!!!')
    }
}

const z4 = new Bmw('red','blue')