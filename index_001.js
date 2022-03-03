let array0 = new Array(1,2,3);
let array1 = new Array('baafe','awb','yagfc', 'Cafgag');
let array2 = new Array({id:'bwj0509',pw:'1234'},{id:'bdj214',pw:'123463'});
let array3 = new Array(2123132132,23, 523, 23, 5, 3, 7, 8,3,1, 1441, 1456, 523626262, 62233);


document.querySelector('#checkbox').addEventListener('change', (event) => {
    const element = document.querySelector('.rect');
    if (event.target.checked === true) {
      element.animate(
        {
          filter: [
            'grayscale(0%)', // 시작 값
            'grayscale(100%)' // 종료 값
          ]
        },
        {
          duration: 1000, // 밀리초 지정
          fill: 'forwards', // 종료 시 속성을 지님
          easing: 'ease' // 가속도 종류
        }
      );
    } else {
      element.animate(
        {
            filter: [
                'grayscale(100%)', // 시작 값
                'grayscale(0%)' // 종료 값
              ]
        },
        {
          duration: 1000, // 밀리초 지정
          fill: 'forwards', // 종료 시 속성을 지님
          easing: 'ease' // 가속도 종류
        }
      );
    }
  });