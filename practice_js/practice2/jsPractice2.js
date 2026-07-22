/*문제1
let 밑변 = Number(prompt ('밑변: '))
let 높이 = Number(prompt ('높이: '))
let 넓이 = 밑변*높이/2
console.log(`삼각형 넓이: ${넓이}`)

//문제2
let 섭씨 = Number(prompt('섭씨온도: '))
let 화씨 = (섭씨*9/5) +32
console.log(`화씨 온도: ${화씨}`)

//문제3
let birthyear = Number(prompt('태어난 년도(숫자만 입력): '))
let old = 2025 - birthyear
console.log(`태어난 년도: ${old}`)

//문제4
let cm = Number(prompt('키를 입력하세요.'))
let kg = Number(promt('몸무게를 입력하세요.'))
let bmi = kg / (cm* cm)
console.log(`BMI: ${bmi}`)

//문제5
let id = prompt('id: ')
console.log(`id: ${id}`)
let email = prompt('email: ')
console.log(`email: ${email}`)
let cs1 = id=='admin' || email=='admin@test.com'
let cs2 = cs1 == true? '관리자' : '일반사용자'
console.log(`${cs2}`)


//문제6
let score = Number(prompt('점수: '))
console.log(`score: ${score}`)
let gradeBC = score>=80? 'B' : 'C'
let gradeA = score >= 90 ? 'A' : gradeBC
document.querySelector('h2').innerHTML = `성적: ${gradeA}`

//문제7
let age = Number(prompt('나이: '))
console.log(`나이: ${age}`)
let event = 20<=age <=29? '이벤트 대상입니다.' : '이벤트 대상이 아닙니다.'
console.log(`${event}`)


//문제8
let likeCount = 3
console.log(`좋아요: ${likeCount}`)
likeCount++
console.log(`좋아요: ${likeCount}`)

//문제9
let todoList = ['장보기', '과제하기']
console.log(`to do list: ${todoList}`)
let newlist = prompt('새로운 할일: ')
todoList.push(newlist)
console.log(`to do list: ${todoList}`)
*/

//문제10
let waiting = ['김민준', '이서연', '박도윤', '최지우']
let last = waiting[3]
console.log(`마지막 대기자는 ${last}입니다.`)
