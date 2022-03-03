let array0 = new Array(1,2,3);
let array1 = new Array('baafe','awb','yagfc', 'Cafgag');
let array2 = new Array({id:'bwj0509',pw:'1234'},{id:'bdj214',pw:'123463'});
let array3 = new Array(2123132132,23, 523, 23, 5, 3, 7, 8,3,1, 1441, 1456, 523626262, 62233);

gijun = document.querySelector('.gijun');

ch1 = document.querySelector('.ch1');
ch2 = document.querySelector('.ch2');

container = document.querySelector('.container');

let divElement = document.createElement('div');
let anchorElement = document.createElement('a');


let makingdiv = document.querySelector('.btn1').addEventListener('click',()=>{
    document.body.appendChild(divElement);
    divElement.appendChild(anchorElement);
    anchorElement.innerHTML = '성공!'
})


console.log()