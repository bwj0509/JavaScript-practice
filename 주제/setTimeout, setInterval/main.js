function showName(name){
    console.log(name);
}


setTimeout(showName,3000,"WOOJIN"); // 3초뒤에 showName실행 매개변수는 WOOJIN
setInterval(showName, 3000, "WOOJIN"); // 3초마다 showName실행 매개변수는 WOOJIN

