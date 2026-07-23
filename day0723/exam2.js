/* QuertString: url웹주소 상에 매개변수
- 페이지 이동 간 매개변수 값 전달
- URL ? 매개변수=값 & 매개변수=값
    ex) https://finance.naver.com/item/board_read.naver?code=000660&nid=426142510 */

//1. JS에서 URL정보 객체 호출
//http://127.0.0.1:5500/day0723/exam2.html?name=유재석
let url = new URLSearchParams(location.search) //현주소상 위치query sting 반환
console.log(url)
let name = url.get('name') //query string 에서 원하는 속성값 가져오기
console.log(name)
let pcode = url.get('pcode');
let page = url.get('page')
console.log(pcode,page)

function 링크함수(){
    location.href='exam.html?name=강호동' //링크 이동
}

/* 인터벌: 특정한 주기에 따라 코드 반복실행
/ setInterval(함수명,주기(밀리초))
    - 함수명에 소괄호() X
    - 밀리초(1/1000): 1000 = 1초에 1번 */
function 증가함수(){
    let value = 0
    value += 1
    document.querySelector('#box1').innerHTML=value
}
setInterval(증가함수,1000)

function 시계함수(){
    let today = new Date() //현재 날짜를 변수에 가져온후
    let hour = today.getHours() //변수에서 시/분/초 가져오기
    let minute = today.getMinutes()
    let second = today.getSeconds()
    let time = `${hour}:${minute}:${second}`
    document.querySelector('#box2').innerHTML=time
}
setInterval(시계함수,1000)


let time=0
let timeInter;
function timerStart(){
    timeInter = setInterval(timerStart,1000)
    timerShow()
}

function timerShow(){
    time ++;
    document.querySelector('#box3').innerHTML=time
}

function timerEnd(){
    clearInterval(timeInter)
}
