/*문제1
let fruitList = ['사과', '바나나']
let newFruit = prompt('과일 이름: ')
if (fruitList.includes(`${newFruit}`))
    console.log('이미존재하는 과일 입니다.')
else{
    fruitList.push(`${newFruit}`)
    console.log(`${fruitList}`)
}

//문제2
let num = prompt ('주민번호: ')
if (num[6] == 1 || num[6] == 3)
    console.log('blue')
else if (num[6] == 2 || num[6] == 4)
    console.log('red')

//문제3
let totalPrice = Number(prompt('총 구매 금액: '))
if (totalPrice<10000)
    console.log(`최종 결제 금액: ${totalPrice}원`)
else if(totalPrice>=10000 && totalPrice<30000)
    console.log(`최종 결제 금액: ${totalPrice*0.99}원`)
else if(totalPrice>=30000 && totalPrice<50000)
    console.log(`최종 결제 금액: ${totalPrice*0.95}원`)
else if(totalPrice>=50000)
    console.log(`최종 결제 금액: ${totalPrice*0.9}원`)

//문제4
let month = Number(prompt('월(month)를 입력하세요.'))
if (3<=month && month<=5)
    console.log('봄')
else if(6<=month && month<=8)
    console.log('여름')
else if(9<=month && month<=11)
    console.log('가을')
else if(12 ==month ||  month==1 || month==2)
    console.log('겨울')
else
    console.log
*/

//문제5
let num1= Number(prompt('정수1: '))
let num2= Number(prompt('정수2: '))
let num3= Number(prompt('정수3: '))
if (num1>num2 && num1>num3)
    console.log(`가장큰수: ${num1}`)
else if(num2>num1 && num2>3 )
    console.log(`가장큰수: ${num2}`)
else
    console.log(`가장큰수: ${num3}`)
//문제6
let year =Number(prompt('연도 입력: '))
if ((year%4==0 && year %100 !=0) || (year%400==0) )
    console.log(`${year}년은 윤년입니다.`)
else
    console.log(`${year}년은 평년입니다.`)

//문제7: 내코드
let num1 = Number(prompt('정수1: '))
let num2 = Number(prompt('정수2: '))
let num3 = Number(prompt('정수3: '))
if (num1>2 && num1>3){
    console.log(`${num1}`)
    if(num2>num3){
        console.log(`${num2}`)
        console.log(`${num3}`)
    }
    else
        console.log(`${num3}`)
        console.log(`${num2}`)

}
else if (num2>1 && num2>3){
    console.log(`${num2}`)
    if(num1>num3){
        console.log(`${num1}`)
        console.log(`${num3}`)
    }
    else
        console.log(`${num3}`)
        console.log(`${num1}`)

}
else{
    console.log(`${num3}`)
    if(num1>num2){
        console.log(`${num1}`)
        console.log(`${num2}`)
    }
    else
        console.log(`${num2}`)
        console.log(`${num1}`)
}

//선생님 코드


//문제 8
let user1 = Number(prompt('(사용자1) 가위,바위,보(0,1,2): '))
let user2 = Number(prompt('(사용자2) 가위,바위,보(0,1,2): '))
if ( (user1!=0 || user2!=0 ) && user1 > user2 && user1!=user2)
    console.log(`사용자1 승리`)
else if ((user1!=0 || user2!=0 ) && user2 > user1 && user1!=user2)
    console.log(`사용자2 승리`)
else if ((user1==0 || user2==0 && user1!=user2 &&user1<user2))
    console.log(`사용자1 승리`)
else if ((user1==0 || user2==0 && user1!=user2 &&user2<user1))
    console.log(`사용자2 승리`)
else if (user1==user2)
    console.log('무승부')


//문제 9
let carArray = ['250어7142', '142가7415', '888호8888']
let locationArray = ['A1','B3','C2']
let carNumber = prompt('차량번호(띄어쓰기X): ')
if (carArray.includes(carNumber)){
    let index = carArray.indexOf(carNumber)
    console.log(`${locationArray[index]}`)
}
else
    console.log('차량이 존재하지 않습니다.')


//문제10
let courseList = ['수학', '영어', '과학','국어']
console.log(`[현재 수강 신청 과목 목록]\n${courseList}`)
let deleteCourse = prompt('제외하고 싶은 과목명: ')
if(courseList.includes(deleteCourse)){
    let index = courseList.indexOf(deleteCourse)
    courseList.splice(index,1)
    console.log(`[현재 수강 신청 과목 목록]\n${courseList}`)
}
else
    console.log('해당 과목은 신청 목록에 없습니다.')
    