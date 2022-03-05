let arr = ['woojin', 'hanna','tom', 'gildong'];


arr.forEach((item, index)=>{
    console.log(`${index}. ${item}`);
})

console.log('--------------------------------------')

let arr1 = [1,2,3,4,5];

let result = arr1.find((item)=>{
    return item % 2 === 0
})
console.log(result)

console.log('--------------------------------------')

//find사용법

let userList = [
    {name:'Mike', age:30},
    {name:'Woojin', age:26},
    {name:'Tom', age:15}
]

let under20 = userList.find((item, i)=>{
    return item.age <20
})

console.log(under20)


console.log('--------------------------------------')

//filter사용법 : 해당하는 요소를 찾아서 배열로 반환시킨다.

let under20filter = userList.filter((item)=>{
    return item.age<30
})

console.log(under20filter)


console.log('--------------------------------------')


let userList2 = [
    {name:'Mikes', age:30},
    {name:'Woojins', age:26},
    {name:'Toms', age:15}
]

userList.map((v, i)=>{
    console.log(v, i)
})


console.log('--------------------------------------')



let arr_number = [5, 2, 54, 2, 1, 6, 234, 132123];



arr_number.sort((a,b)=>{
    return a-b;
}); // 복잡함... Lodash이용해서 쉽게 하는법을 공부하자!


console.log(arr_number)

console.log('--------------------------------------')

//reduce사용법
let arr_reduce = [1,2,3,4,5];

let reduceresult= arr_reduce.reduce((prev, cur)=>{
    prev += cur
    return prev
})

console.log(reduceresult)