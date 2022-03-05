function User(name, age){

    // this = {}
    this.name = name;
    this.age = age;
    this.sayname = ()=>{
        console.log(`My name is ${this.name}`);
    }

    // return this;

}

let user1 = new User('woojin',26);
let user2 = new User('hanna', 26);

user1.sayname();
user2.sayname();
