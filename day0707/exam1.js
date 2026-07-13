
// 주석
10 // 숫자 리터럴
"황소연" //문자열리터럴
true // 논리 리터럴/타입
{ }//객체 타입
[ ]// 배열 타입
function fx(){}// 함수 타입
undefined // 정의 x
null// 없다

//콘솔(결과물이 표현되는 구역)에 10 출력
console.log(10)

/*변수
1. let 2.변수명(카멜표기법 사용)
3. 대입연산자 이용

let box1 // 초기값 x
let box2 = 100

box2 //변수값 호출
console.log(box2)// 변수값 콘솔에 출력

// 변수 수정
 box2=200
 console.log(box2)

 //상수

 const box3 = 300 // 기본형태

 console.log(box3)
 // 상수 값 수정 불가능
 box3= 400 //안됨.

 //생각해보기
 let point1=50
 let point2=50
 let point3=100
 let point4 = point1 + point2
//변수의특징 : 저장(재사용), 동일한 자료를 서로다른곳에 저장
let age = 10
let speed = 10
//값은 같지만 다른의미

출력함수
함수: 자주 사용되는 코드를 정의하여 재사용/호출
*/
console.log("안녕하세요")

alert("안녕하세요") //브라우저 알림창 메세지

/*document.querySelector("선택자")
*/
document.querySelector("h3").innerHTML = "황소연"

/*입력함수:사용자로부터 입력 받는 함수
confirm(출력 메세지): 경고 메세지에 출력, ture/false
let 변수 = confirm() : 입력값 저장 */
let answer1 = confirm("밥 먹었나요?")
console.log(answer1)

//prompt
let answer2 = prompt ("점심 메뉴")
console.log(answer2)

