
// add의 매개변수를 ...배열 -> 이렇게 해서 숫자 몇개를 더하던지 상관없이 더할 수 있다!
function add(...numbers){
    let result = numbers.reduce((prev, cur)=>{
        prev += cur
        return prev
    })
    return result
}

console.log(add(1,2,3,4,5))

console.log('-----------------------------------------');


function User(name, age, ...skills){
    this.name = name;
    this.age = age;
    this.skills = skills;
}

let user1 = new User('woojin', 30, 'html', 'css')
let user2 = new User('gildong', 10, 'react', 'nodejs')
let user3 = new User('chulsu', 20)


let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];

let result = [...arr1, ...arr2]
