/*
* 배열 메서드 체이닝으로 구현 할 것

1. 1000원 이상 상품만 보여주기
2. 오름차순으로 보여주기
3. 원 이라는 Suffix를 붙이기

*/

const prices = ['2000', '500', '6000', '1000', '2500', '10000'];

const over1000Fn = (price) => Number(price) > 1000
const ascendingFn = (a,b) => a-b
const suffixwonFn = (price) => String(price)+'원'


function getPrice(priceList){
    return priceList
    .filter(over1000Fn)
    .sort(ascendingFn)
    .map(suffixwonFn)
}


console.log(getPrice(prices))





