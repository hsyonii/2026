<<<<<<< HEAD
/*console.log('JS실행')

// 숫자타입
// 1. 정수
console.log(10)
console.log(typeof 10)//해당자료의 타입명 확인

//2.실수
console.log(3.14)
console.log(typeof 3.14)

//3.문자열타입
//',",` 감싼자료
console.log('안녕')
console.log("안녕")
console.log(`안녕`)
//문자열 연결
console.log('안녕','하세요')
console.log('안녕'+'하세요')
console.log(`안녕${3}`) //`${}`:문자열 내 코드포함
console.log('안녕'+3)//문자열 + 숫자 = 문자열
let a = 10
console.log ('안녕'+a)//문자열 + 변수(숫자)=문자열
console.log(`안녕${a}`)

//4.이스케이프(제어)문자, \백슬래시
console.log('\\안녕') //'\'출력
console.log('\n안녕')//'\n' 줄바꿈
console.log('\'안녕') // '\'' '출력
console.log('\t안녕') // '\t' 들여쓰기

//5. 불리안(논리) 타입
console.log(true)
console.log(false)
console.log(10>3) //비교연산값(true,false)

//6.
let name //변수선언
console.log(name)
//let name = null
//console.log(null)

//7.배열[ ]
let 배열변수 = ['봄', '여름', '가을', '겨울', ['1학기','2학기']]
console.log (배열변수)
console.log(배열변수[0]) //배열[n]:n번째 요소 호출
console.log(배열변수[4])

console.log(배열변수[4[1]]) //4번째의 1번째 요소
//or
let 요소1 = 배열변수[4] //4번 요소 변수에 저장
let 요소2 = 요소1[1] //4번의 1번요소 꺼내어 변수에 저장
console.log(요소2)

//배열 수정
배열변수 = ['유재석','강호동']
console.log(배열변수)
배열변수[0]='유재석2' //배열 요소 수정
console.log(배열변수)

//배열변수.push(''): 배열 요소 추가
배열변수.push('서장훈')
console.log(배열변수)

//배열변수.splice(n,m):n번째 요소m개 삭제
배열변수.splice(0,1)
console.log(배열변수)

//배열변수.indexOf(찾을요소이름):요소찾아 인덱스값 변환
let index = 배열변수.indexOf('강호동')
//배열변수.includes(요소):해당요소 존재여부, true/false
let include=배열변수.includes('강호동')
console.log(include)

//8.타입변환: 외부언어,자료혼합될 경우 사용
console.log (3+3.14) //정수+실수=실수
console.log('유재석'+40) //문자+숫자 = 문자
console.log(3+true)//정수+논리 = (숫자)4

//직접 타입변환 하기
console.log(Number("10"))//문자열"10"->숫자10
console.log(Number("10A"))//NaN(NOT A NUMBER), 숫자형으로 변경불가
console.log(parseInt("10"))//문자열"10"->숫자10으로 변환(정수)
console.log(parseFloat)//문자열 "3.14"->숫자 3.14로 변환(실수)
console.log(String(10))// 숫자형 10 -> 문자열 10 으로 변환
console.log( 10 + "" )
// 추후에 JAVA/PYTHON/API(외부자료) 들을 통신한경우
// JSON.parse( 통신결과물 )

/* 9.연산자

1.산술연산자: +,-,*,/,%(나머지값)
2.연결연산자: +
3.비교연산자:>,<,<=,>=,==,!=,===(값/타입같다),!==(같지않다)
4.논리연산자: &&(둘다 충족), &&(하나만 충족), !부정
5.대입연산자: = 대입(넣기)
6.복합대입연산자: +=, -=, *=, /=, %= 오른쪽 값을 왼쪽에 연산후 대입
7.증강연산자: ++1증가 --1감소
8.++변수: 선위증가, 변수++: 후위증가, --변수: 선위감소 변수--
9.상향연산자: 조건? 참:거짓, 조건A? 참A : 조건B?참B: 조건C? 참C : 거짓
ex) 점수 >= 90 ? '합격' : '불합격' */

/*
// [지문1] prompt 함수로 국어 , 영어 , 수학 점수를 각 입력받아서 (각 변수에 저장하고) 총점 과 평균을 계산하여 console탭에 출력하시오.
let 국어점수 = prompt('국어점수:') // 1.입력받아 변수에 저장
let 영어점수 = prompt('영어점수:')
let 수학점수 = Number(prompt('수학점수:'))
let 총점 = 국어점수 + 영어점수 + 수학점수
let 평균 = 총점 /3
//결과출력
console.log (총점)
console.log(평균)
console.log(`총점 : ${총점} 평균 : ${평균}`) //문자열 템플릿

// [지문2] prompt 함수로 반지름를 입력받아서 원넓이[반지름*반지름*3.14] 계산하여 console탭에 출력하시오.
let 반지름 = Number(prompt('반지름: '))
let 원넓이 = 반지름*반지름*3.14)
console.log(`원넓이는 ${원넓이}입니다.`)

// [지문3] prompt 함수로 두 실수를 입력받아서 앞 실수의 값이 뒤실수의 값의 비율% 계산하여 console탭에 출력하시오.
let 실수1 = Number(prompt ('실수1: '))
let 실수2 = Number(prompt ('실수2: '))



// [지문4] prompt 함수로 정수를 입력받아 입력받은 값이 홀수이면 true / 짝수이면 false 로 console탭에 출력하시오.
let 점수 = Number( prompt('정수 입력'))
let 결과 = 정수 % 2 ==1
console.log(`결과 : ${결과}`)

// [지문5] prompt 함수로 정수를 입력받아 입력받은 값이 7의 배수이면 true / 아니면 false 로 console탭에 출력하시오.
let 정수2 = Number(prompt('정수 입력'))
let 결과2 = 정수2 % 7 == 0
console.log(`결과2 : ${결과}`)

// [지문6] prompt 함수로 아이디 와 비밀번호를 입력받아서 (입력받은)아이디가 'admin' 이고 (입력받은)비밀번호가 1234 와 일치하면 true / 아니면 false 출력하시오.
let id = prompt ('아이디:')
let pw = prompt('비밀번호: ')
let login = id =='admin' && pw =='1234'
console.log (`결과 : ${ login }`)

// [지문7] prompt 함수로 정수를 입력받아 입력받은 값이 홀수 이거나 7배수 이면 true / 아니면 false 로 console탭에 출력하시오.
let 정수 = Number (prompt ('정수 입력: '))
let 결과2 = 정수%7==0 || 정수%2==1
console.log(`결과: ${결과}`)

// [지문8] 1차점수 와 2차점수 prompt함수로 각 입력받아서 총점이 150점이상이면 '합격' 아니면 '불합격' HTML의 <h3> 에 출력하시오.
let 점수1=Number(prompt('1차점수: '))
let 점수2=Number(prompt ('2차점수: '))
let 결과 = (점수1+점수2)>=150? '합격' : '불합격'
document.querySelector("h3").innerHTML = `결과: ${결과}`

// [지문9] 두 사람의 이름을 prompt함수로 각 입력받아서 만일 이름이 '유재석' 이면 뒤에 (방장) 이라고 이름 뒤에 붙이고 아니면 생략한다.  HTML의 <ol> 에 결과를 출력하시오.
let 이름1=prompt('(사람1)이름:')
let 이름2=prompt('(사람2)이름: ')
let 결과1 = 이름1 == '유재석'? 이름1+"(방장)" : 이름1
let 결과2 = 이름2 == '유재석'? 이름2+"(방장)" : 이름2
document.querySelector('ol').innerHTML = `<li> ${결과1} </li> <li> ${결과2} </li>`//순서있는 목록
*/

//증감연산자
let age = 40
console.log (age++) //40출력, age=41 후위증가: 출력후에 증가
console.log (++age) //42출력, age=42 선위증가: 증가후 출력
console.log (age--) //42출력, age=41 후위감소
console.log (--age) //40출력, age=40 선위감소

//변수 1증가시키기
age++
age = age +1
=======
/*console.log('JS실행')

// 숫자타입
// 1. 정수
console.log(10)
console.log(typeof 10)//해당자료의 타입명 확인

//2.실수
console.log(3.14)
console.log(typeof 3.14)

//3.문자열타입
//',",` 감싼자료
console.log('안녕')
console.log("안녕")
console.log(`안녕`)
//문자열 연결
console.log('안녕','하세요')
console.log('안녕'+'하세요')
console.log(`안녕${3}`) //`${}`:문자열 내 코드포함
console.log('안녕'+3)//문자열 + 숫자 = 문자열
let a = 10
console.log ('안녕'+a)//문자열 + 변수(숫자)=문자열
console.log(`안녕${a}`)

//4.이스케이프(제어)문자, \백슬래시
console.log('\\안녕') //'\'출력
console.log('\n안녕')//'\n' 줄바꿈
console.log('\'안녕') // '\'' '출력
console.log('\t안녕') // '\t' 들여쓰기

//5. 불리안(논리) 타입
console.log(true)
console.log(false)
console.log(10>3) //비교연산값(true,false)

//6.
let name //변수선언
console.log(name)
//let name = null
//console.log(null)

//7.배열[ ]
let 배열변수 = ['봄', '여름', '가을', '겨울', ['1학기','2학기']]
console.log (배열변수)
console.log(배열변수[0]) //배열[n]:n번째 요소 호출
console.log(배열변수[4])

console.log(배열변수[4[1]]) //4번째의 1번째 요소
//or
let 요소1 = 배열변수[4] //4번 요소 변수에 저장
let 요소2 = 요소1[1] //4번의 1번요소 꺼내어 변수에 저장
console.log(요소2)

//배열 수정
배열변수 = ['유재석','강호동']
console.log(배열변수)
배열변수[0]='유재석2' //배열 요소 수정
console.log(배열변수)

//배열변수.push(''): 배열 요소 추가
배열변수.push('서장훈')
console.log(배열변수)

//배열변수.splice(n,m):n번째 요소m개 삭제
배열변수.splice(0,1)
console.log(배열변수)

//배열변수.indexOf(찾을요소이름):요소찾아 인덱스값 변환
let index = 배열변수.indexOf('강호동')
//배열변수.includes(요소):해당요소 존재여부, true/false
let include=배열변수.includes('강호동')
console.log(include)

//8.타입변환: 외부언어,자료혼합될 경우 사용
console.log (3+3.14) //정수+실수=실수
console.log('유재석'+40) //문자+숫자 = 문자
console.log(3+true)//정수+논리 = (숫자)4

//직접 타입변환 하기
console.log(Number("10"))//문자열"10"->숫자10
console.log(Number("10A"))//NaN(NOT A NUMBER), 숫자형으로 변경불가
console.log(parseInt("10"))//문자열"10"->숫자10으로 변환(정수)
console.log(parseFloat)//문자열 "3.14"->숫자 3.14로 변환(실수)
console.log(String(10))// 숫자형 10 -> 문자열 10 으로 변환
console.log( 10 + "" )
// 추후에 JAVA/PYTHON/API(외부자료) 들을 통신한경우
// JSON.parse( 통신결과물 )

/* 9.연산자

1.산술연산자: +,-,*,/,%(나머지값)
2.연결연산자: +
3.비교연산자:>,<,<=,>=,==,!=,===(값/타입같다),!==(같지않다)
4.논리연산자: &&(둘다 충족), &&(하나만 충족), !부정
5.대입연산자: = 대입(넣기)
6.복합대입연산자: +=, -=, *=, /=, %= 오른쪽 값을 왼쪽에 연산후 대입
7.증강연산자: ++1증가 --1감소
8.++변수: 선위증가, 변수++: 후위증가, --변수: 선위감소 변수--
9.상향연산자: 조건? 참:거짓, 조건A? 참A : 조건B?참B: 조건C? 참C : 거짓
ex) 점수 >= 90 ? '합격' : '불합격' */

/*
// [지문1] prompt 함수로 국어 , 영어 , 수학 점수를 각 입력받아서 (각 변수에 저장하고) 총점 과 평균을 계산하여 console탭에 출력하시오.
let 국어점수 = prompt('국어점수:') // 1.입력받아 변수에 저장
let 영어점수 = prompt('영어점수:')
let 수학점수 = Number(prompt('수학점수:'))
let 총점 = 국어점수 + 영어점수 + 수학점수
let 평균 = 총점 /3
//결과출력
console.log (총점)
console.log(평균)
console.log(`총점 : ${총점} 평균 : ${평균}`) //문자열 템플릿

// [지문2] prompt 함수로 반지름를 입력받아서 원넓이[반지름*반지름*3.14] 계산하여 console탭에 출력하시오.
let 반지름 = Number(prompt('반지름: '))
let 원넓이 = 반지름*반지름*3.14)
console.log(`원넓이는 ${원넓이}입니다.`)

// [지문3] prompt 함수로 두 실수를 입력받아서 앞 실수의 값이 뒤실수의 값의 비율% 계산하여 console탭에 출력하시오.
let 실수1 = Number(prompt ('실수1: '))
let 실수2 = Number(prompt ('실수2: '))



// [지문4] prompt 함수로 정수를 입력받아 입력받은 값이 홀수이면 true / 짝수이면 false 로 console탭에 출력하시오.
let 점수 = Number( prompt('정수 입력'))
let 결과 = 정수 % 2 ==1
console.log(`결과 : ${결과}`)

// [지문5] prompt 함수로 정수를 입력받아 입력받은 값이 7의 배수이면 true / 아니면 false 로 console탭에 출력하시오.
let 정수2 = Number(prompt('정수 입력'))
let 결과2 = 정수2 % 7 == 0
console.log(`결과2 : ${결과}`)

// [지문6] prompt 함수로 아이디 와 비밀번호를 입력받아서 (입력받은)아이디가 'admin' 이고 (입력받은)비밀번호가 1234 와 일치하면 true / 아니면 false 출력하시오.
let id = prompt ('아이디:')
let pw = prompt('비밀번호: ')
let login = id =='admin' && pw =='1234'
console.log (`결과 : ${ login }`)

// [지문7] prompt 함수로 정수를 입력받아 입력받은 값이 홀수 이거나 7배수 이면 true / 아니면 false 로 console탭에 출력하시오.
let 정수 = Number (prompt ('정수 입력: '))
let 결과2 = 정수%7==0 || 정수%2==1
console.log(`결과: ${결과}`)

// [지문8] 1차점수 와 2차점수 prompt함수로 각 입력받아서 총점이 150점이상이면 '합격' 아니면 '불합격' HTML의 <h3> 에 출력하시오.
let 점수1=Number(prompt('1차점수: '))
let 점수2=Number(prompt ('2차점수: '))
let 결과 = (점수1+점수2)>=150? '합격' : '불합격'
document.querySelector("h3").innerHTML = `결과: ${결과}`

// [지문9] 두 사람의 이름을 prompt함수로 각 입력받아서 만일 이름이 '유재석' 이면 뒤에 (방장) 이라고 이름 뒤에 붙이고 아니면 생략한다.  HTML의 <ol> 에 결과를 출력하시오.
let 이름1=prompt('(사람1)이름:')
let 이름2=prompt('(사람2)이름: ')
let 결과1 = 이름1 == '유재석'? 이름1+"(방장)" : 이름1
let 결과2 = 이름2 == '유재석'? 이름2+"(방장)" : 이름2
document.querySelector('ol').innerHTML = `<li> ${결과1} </li> <li> ${결과2} </li>`//순서있는 목록
*/

//증감연산자
let age = 40
console.log (age++) //40출력, age=41 후위증가: 출력후에 증가
console.log (++age) //42출력, age=42 선위증가: 증가후 출력
console.log (age--) //42출력, age=41 후위감소
console.log (--age) //40출력, age=40 선위감소

//변수 1증가시키기
age++
age = age +1
>>>>>>> 105b91f3fac7ebaf42bb1d8c704cfa30fabb4b3f
age +=1