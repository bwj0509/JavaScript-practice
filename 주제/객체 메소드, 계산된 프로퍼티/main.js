let n = "name";
let a = "age";

const user = {
    [n]:'woojin',
    [a]:30,
}
console.log(user)

const user2= {...user};
user2.name = 'hanna';

console.log(user2)
