// 만들어 놓은 객체
const user = {
    name:'woojin',
    age:'25'
};

//내가 작업
// user.showName = ()=>{}; 이렇게 작업하면 안되고
let showName = Symbol('show name');
user[showName] = ()=>{
    console.log(this.name);
}

user[showName]();


// 사용자가 보는 메세지
for(let key in user){
    console.log(`His ${key} is ${user[key]}`);
}