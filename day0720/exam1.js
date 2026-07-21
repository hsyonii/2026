/*
함수
1. 미리 만들어진 함수(라이브러리)  2. 내가 만든 함수
*/

// 1)미리 만들어진 함수
console.log('미리 만들어진 함수')

// 2)내가 만든 함수
// 함수정의
function 함수명( 매개변수1, 매개변수2 ){
    //실행코드
    return 매개변수1+매개변수2 //반환(return)값은 무조건 1개
}
// 함수호출
// 함수명(인자값)
함수명(1,2)

// ex1) 매개변수(인자값)를 결과값으로 반환 - 코드의 재사용
function 믹서기( 과일 ){
    return 과일+'주스'
}
let 컵1 = 믹서기('바나나')
let 컵2 = 믹서기('딸기')
console.log(컵1)
console.log(컵2)

// ex2)
function 더하기(x,y){
    a = x+y
    return a
}
let 결과1 = 더하기(1,2)
let 결과2 = 더하기(3,4)

// 1)매개변수x 반환값x
function func1(){
    console.log('1. 매개변수x 반환값x')
}

// 2)매개변수ㅇ 반환값x  ex)console.log
function func2(x){
    console.log('2. 매개변수ㅇ 반환값x')
    y=x+2
}
func2(10)

// 3)매개변수ㅇ 반환값ㅇ
function func3(x){
    console('3. 매개변수ㅇ 반환값ㅇ')
    y=x+2
    return y
}
let result3 = func3(10)
console.log(result3)

// 4)매개변수x 반환값ㅇ
function func3(){
    console.log('4. 매개변수x 반환값ㅇ')
    return y=3+2
}

// ex)if/for문과 달리 return(반환)통해 지역변수를 문밖으로 꺼낼수 있음
function 지역변수(){
    let 지역변수 = '시흥시'
    return 지역변수
}
let re = 지역변수() 

function funcButton(){
    console.log('JS함수호출')
}

/*예제 1: 기본 함수 선언 및 호출
'함수 호출 성공!'이라는 메시지를 콘솔에 출력하는 sayHello 라는 이름의 함수를 정의하고, 그 함수를 호출하시오.*/
function sayHello(){
    console.log('함수 호출 성공!')
}
sayHello()

/*예제 2: 매개변수를 사용하는 함수
임의의 두 개의 숫자(number)를 매개변수로 받아, 그 합을 콘솔에 출력하는 printSum 함수를 정의하시오. printSum(5, 10)을 호출하여 결과를 확인하시오.*/
function printSum(n,m){
    let sum = n+m
    console.log(sum)
}
printSum(1,2)

/*예제 3: 값을 반환(return)하는 함수
임의의 이름을 문자열(string)로 매개변수를 받아 "환영합니다, [이름]님!" 형식의 문자열을 반환하는 getWelcomeMessage 함수를 정의하시오.
함수를 호출한 결과를 변수에 저장하고, 그 변수를 콘솔에 출력하시오.*/
function getWelcomeMessage(name){
    return string = `환영합니다. ${name}님!`
}
let re3 = getWelcomeMessage('황소연')
console.log(re3)

/*예제 4: 함수를 이용한 카운터
0의 값을 가진 counter라는 전역 변수를 만드시오. 호출될 때마다 counter의 값을 1씩 증가시키는 increaseCount 함수를 정의하시오.
함수를 세 번 호출한 뒤, counter의 값을 콘솔에 출력하여 3이 되었는지 확인하시오.*/  
let counter=0
function increaseCount(){  
    counter++
}
increaseCount()
increaseCount()
increaseCount()
console.log(counter)

/*예제 5: for 반복문을 포함한 함수
임의의 숫자 n을 매개변수로 받아, 1부터 n까지의 숫자를 콘솔에 차례대로 출력하는 printNumbers 함수를 정의하시오.*/
function printNumbers(n){
    for(let i=1; i<=n; i++){
        console.log(i)
    }
}
//test
printNumbers(10)

/*예제 6: prompt와 함수 활용
prompt를 이용해 사용자로부터 이름을 입력받으시오. 입력받은 이름을 매개변수로 받아, 해당 이름이 저장된 userList 전역 배열에 push하는 addUser 함수를 정의하고 호출하시오.
*/
let user = prompt('이름: ')
let userList=[]
function addUser(array,a){
    array.push(a)
    console.log(array)
}
addUser(userList,user)


/*예제 7: 배열을 매개변수로 전달
임의의 이름 들이 담긴 배열을 매개변수로 받아, for 반복문을 사용하여 배열의 모든 요소를 콘솔에 하나씩 출력하는 printFruits 함수를 정의하시오. */
let names = ['심재윤', '박종성', '박성훈', '김선우', '양정원', '니시무라 니키']
function printFrint(array){
    for(let i=0; i<array.length-1; i++){
        console.log(array[i])
    }
}
printFrint(names)

/*예제 8: Boolean 값 반환하기
임의의 숫자 하나를 매개변수로 받아, 그 숫자가 0보다 크면 true를, 그렇지 않으면 false를 반환하는 isPositive 함수를 만들어 보세요. */
function isPositive(n){
    if(0<n)
        return true
    else
        return false
}
let re8 = isPositive(-1)
console.log(re8)

/*예제 9: 전역 변수와 지역 변수
let globalText = '전역'; 변수를 선언하세요. printLocal 함수 안에서는 let localText = '지역'; 변수를 선언하고, 
두 변수를 모두 콘솔에 출력해 보세요. 함수 바깥에서는 globalText만 출력되는 것을 확인하세요.  */
let globalText = '전역변수'
function printLocal(){
    let localText='지역변수'
}
console.log(globalText)
console.log(localText)