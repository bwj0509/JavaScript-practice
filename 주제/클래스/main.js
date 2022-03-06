const User = function(name, age){
    this.name = name;
    this.age = age;
};
User.prototype.showName = function(){
    console.log(this.name)
} // 생성자 함수를 만들때, showName을 프로토타입으로 뺌!
const mike = new User('Mike', 20);

// 생성자 함수로 생성하는법!



class User2 {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    showName(){
        console.log(this.name);
    }
}

const tom = new User2('Tom',21);

// 클래스로 생성하는법!!





