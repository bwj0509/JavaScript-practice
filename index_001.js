let array0 = new Array(1,2,3);
let array1 = new Array('baafe','awb','yagfc', 'Cafgag');
let array2 = new Array({id:'bwj0509',pw:'1234'},{id:'bdj214',pw:'123463'});
let array3 = new Array(2123132132,23, 523, 23, 5, 3, 7, 8,3,1, 1441, 1456, 523626262, 62233);

let LOCAL_LIST = [
    { value:1, name:'서울' },
    { value:2, name:'창원' },
    { value:3, name:'성남' },
    { value:4, name:'울산' },
    { value:5, name:'대구' }
]

let selectElement = document.querySelector('#pref');

let optionString = '<option value="">선택하세요.</option>';

LOCAL_LIST.forEach((item)=>{
    optionString += `<option value="${item.value}">${item.name}</option>`
})

document.querySelector('#pref').innerHTML = optionString;

console.log(LOCAL_LIST[0].name)


selectElement.addEventListener('change',(e)=>{
    console.log(e.target.value)
    document.querySelector('.log').innerHTML = `데이터바인딩 ${e.target.value}이고 도시 이름은 ${LOCAL_LIST[e.target.value - 1].name}입니다. `
})
