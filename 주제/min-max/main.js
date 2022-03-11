// 경계 다루기 (min-max)

// 1. 최솟값과 최댓값을 다룬다
// 2. 최소값과 최댓값을 포함하는지 여부를 결정(이상-초과/ 이하-미만)
// 3. 네이밍에 최소값과 최댓값 표함 여부를 표현


function genRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

genRandomNumber(MIN_NUMBER, MAX_NUMBER)
// 함수를 선언하고 사용할 때에는 함수 이름도 어떤 역할을 가지는지 정확하게 표현 할 필요가 있으며
// 파라미터도 최소, 최댓값을 정확하게 표현해서 함수 내용을 모르더라도 어떤 함수인지 예측가능하게 하는것이 매우 중요



function isAdult(age){
    if(age>=20){
        return true
    }
}

isAdult(MAX_IN_AGE)
// 네이밍을 MAX_IN_AGE로 하여 포함하는 이상을 사용한 것을 표현해준다.