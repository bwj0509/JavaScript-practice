
function safeParseInt(number, radix){
    return parseInt(number, radix || 10);
}

// parseInt의 두번째 매개변수는 10이 기본값이 아니다. 따라서 우리가 parseInt를 사용할때 2번째 매개변수를 잘 사용하지 않기에
// 오류가 생길 수 있다. 따라서 사용자는 Default case를 고려해서 사용자 함수를 만들어서
// parseInt에 두번째 파라미터가 입력되지 않은경우 기본값을 10으로 지정해주는 safeParseInt를 만들 수 있다.