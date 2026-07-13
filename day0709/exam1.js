<<<<<<< HEAD
// 분기/조건문 : 상황에 따라 흐름 분기/제어
//1.if(조건식)
if(10>3)
    console.log("1.  10은 3보다 크다.")
if(10>30)
    console.log("2. 10은 30보다 크다.")

if(10>3)
{
    console.log("3.10은 3보다 크다.")
    console.log("3. [2]") //실행문이 2개이상일 경우 {}로 묶는다.
}

//2.if,else
if(10>3){
    console.log("4.10은 3보다 크다.")
}
else
    console.log("4.10은 3보다 작다.")

//3.if,elseif,else: 다수 조건, 결과 1개
if(10>3)
    console.log("5. 10은 3보다 크다.")
else if(10>2)
    console.log("5. 10은 2보다 크다.")
else if(10>1)
    console.log("6.10은 1보다 크다.")
else
    console.log("거짓")
//vs
if(10>3)//다수조건, 다수결과
    console.log("5. 10은 3보다 크다.")
if(10>2)
    console.log("5. 10은 2보다 크다.")
if(10>1)
    console.log("6.10은 1보다 크다.")
else
    console.log("거짓")

//4. if 중첩
let 성별 = "남"
let 점수 = 90
if(성별 == "여"){
    if(점수>=80)
        console.log('여학생 우수')
    else
        console.log('여학생')
}
else{
    if(점수>= 80)
        console.log('남학생 우수')
    else
        console.log('남학생')
}

/*문제 1: 합격/불합격 판정
두 개의 점수를 입력받아 총점을 계산하세요. 총점이 90점 이상이면 '성공'을, 그렇지 않으면 '실패'를 출력하는 프로그램을 작성하시오. 
let score1 = Number(prompt('점수1: '))
let score2 = Number(prompt('점수2: '))
let score3 = (score1+score2) / 2
if(score3>=90)
    console.log("성공")
else
    console.log("실패")

/*문제 2: 두 수 중 더 큰 수 찾기
서로 다른 두 개의 정수를 입력받아, 더 큰 수를 출력하는 프로그램을 작성하시오.
let num1 = Number(prompt('숫자1: '))
let num2 = Number(prompt('숫자2: '))
if (num1>num2)
    console.log(`${num1}`)
else if (num2>num1)
    console.log(`${num2}`)
else
    console.log(`${num1}=${num2}`)

/*문제 3: 로그인 시스템
사용자로부터 아이디와 비밀번호를 입력받습니다. 아이디가 'admin'이고 비밀번호가 '1234'와 모두 일치하면 '로그인 성공'을, 하나라도 다르다면 '로그인 실패'를 출력하는 프로그램을 작성하시오.
let id = prompt('id: ')
let pw = prompt('password: ')
if ( id == "admin" &&  pw == "1234" )
    console.log("로그인 성공")
else
    console.log("로그인 실패")
*/

/*문제 4: 비밀번호 보안 등급 확인
사용자로부터 비밀번호를 문자열로 입력받아, 길이에 따라 보안 등급을 출력하는 프로그램을 작성하시오.
힌트 : 해당 변수 뒤에 .length를 붙여 비밀번호의 길이를 숫자로 구합니다.
8자 미만: '보안 등급: 약함 (8자 이상으로 설정해주세요.)'
8자 이상 12자 미만: '보안 등급: 보통'
12자 이상: '보안 등급: 강함' 
let pw = prompt('비밀번호: ')
pwLength = pw.length
if(pwLength<8)
    console.log("보안 등급: 약함(8자 이상으로 설정해주세요.")
else if(8<=pwLength && pwLength<12) //!!!!!! 8<=pwLength<12 안됨. 조건연산자 사용 !!!!!!!!
    console.log("보안등급: 보통")
else if (12<=pwLength)
    console.log("보안등급: 강함")


/* 문제 5: 좌석 예약 시스템
3개 좌석의 예약 상태를 나타내는 배열이 있습니다. ('O': 예약 완료, 'X': 예약 가능)
let seatList = [ 'O', 'X', 'O' ];
사용자로부터 예약할 좌석의 인덱스 번호(0, 1, 2)를 입력받아, 해당 좌석이 예약 가능('X')하면 
'예약 성공'을, 이미 예약된 좌석('O')이면 '예약 불가' 를 출력하는 프로그램을 작성하시오. 
let seatList = [ 'O', 'X', 'O']
let seat = Number(prompt("예약할 좌석의 번호(1~3): "))
let seatIndex = seat - 1
if(seatList[seatIndex]=='O')
    console.log(`예약 성공`)
else
    console.log(`예약 불가`)

/*문제 6: 점수에 따른 상품 지급
게임 점수를 정수로 입력받아, 아래 기준에 따라 지급될 상품을 출력하는 프로그램을 작성하시오.
900점 이상: 'A급 경품'            , 700점 이상 900점 미만: 'B급 경품'
500점 이상 700점 미만: 'C급 경품' , 500점 미만: '참가상' 
let score = Number(prompt("게임점수: "))
if (score<500)
    console.log(`참가상`)
else if( 500<=score&& score<700)
    console.log(`C급 경품`)
else if(700<=score && score<900)
    console.log(`B급 경품`)
else if(900<=score)
    console.log(`A급 경품`)

/*문제 7: 사용자 역할에 따른 접근 권한 부여
사용자 역할(role)을 문자열로 입력받습니다. 역할에 따라 다른 접근 권한 메시지를 출력하는 프로그램을 작성하시오.
admin: '모든 기능에 접근할 수 있습니다.'    , editor: '콘텐츠 수정 및 생성 기능에 접근할 수 있습니다.'
viewer: '콘텐츠 조회만 가능합니다.'         , 그 외 역할: '정의되지 않은 역할입니다.' 
let role = prompt("사용자 역할(admin/editor/viewer): ")
if( role == 'admin')
    console.log('모든 기능에 접근할 수 있습니다.')
else if (role == 'editor')
    console.log('콘텐츠 수정 및 생성 기능에 접근할 수 있습니다.')
else if (role == 'viewer')
    console.log('콘텐츠 조회만 가능합니다.')
else
    console.log('정의되지 않은 역할입니다.')

/*문제 8: 나이에 따른 놀이공원 입장료 계산
사용자의 나이를 정수로 입력받아, 아래 기준에 따라 입장료를 출력하는 프로그램을 작성하시오.
8세 미만: '무료'                    , 8세 이상 19세 이하: '5,000원'
20세 이상 65세 미만: '10,000원'     , 65세 이상: '3,000원' 
let age = Number(prompt('나이: '))
if(age<8)
    console.log(`무료`)
else if(8<=age && age<=19)
    console.log(`5000원`)
else if (20<=age && age<=65)
    console.log(`10,000원`)
else if (65<=age)
    console.log(`3000원`)

/*문제 9: 음료 자판기
다음 음료 목록 배열이 주어져 있습니다.
음료 이름 목록 : let drinkNames = ['콜라', '사이다', '커피'];
음료 가격 목록 : let drinkPrices = [1000, 1000, 1500];
사용자로부터 원하는 음료(0, 1, 2)의 번호를 입력받아, 
해당하는 음료 이름과 가격을 '선택하신 음료는 [음료이름]입니다. 가격은 [가격]원입니다.' 형식으로 출력하세요. 
만약 목록에 없는 번호를 입력하면 '없는 상품입니다.'라고 출력하는 프로그램을 작성하시오.*/
let drinkList = ['콜라', '사이다', '커피']
let priceList = [1000, 1000, 1500]
let drinkIndex = Number(prompt(`원하는 음료(0~2): `))
if (3<drinkIndex ||  0> drinkIndex){
    console.log(`없는 상품입니다.`)
}
else
=======
// 분기/조건문 : 상황에 따라 흐름 분기/제어
//1.if(조건식)
if(10>3)
    console.log("1.  10은 3보다 크다.")
if(10>30)
    console.log("2. 10은 30보다 크다.")

if(10>3)
{
    console.log("3.10은 3보다 크다.")
    console.log("3. [2]") //실행문이 2개이상일 경우 {}로 묶는다.
}

//2.if,else
if(10>3){
    console.log("4.10은 3보다 크다.")
}
else
    console.log("4.10은 3보다 작다.")

//3.if,elseif,else: 다수 조건, 결과 1개
if(10>3)
    console.log("5. 10은 3보다 크다.")
else if(10>2)
    console.log("5. 10은 2보다 크다.")
else if(10>1)
    console.log("6.10은 1보다 크다.")
else
    console.log("거짓")
//vs
if(10>3)//다수조건, 다수결과
    console.log("5. 10은 3보다 크다.")
if(10>2)
    console.log("5. 10은 2보다 크다.")
if(10>1)
    console.log("6.10은 1보다 크다.")
else
    console.log("거짓")

//4. if 중첩
let 성별 = "남"
let 점수 = 90
if(성별 == "여"){
    if(점수>=80)
        console.log('여학생 우수')
    else
        console.log('여학생')
}
else{
    if(점수>= 80)
        console.log('남학생 우수')
    else
        console.log('남학생')
}

/*문제 1: 합격/불합격 판정
두 개의 점수를 입력받아 총점을 계산하세요. 총점이 90점 이상이면 '성공'을, 그렇지 않으면 '실패'를 출력하는 프로그램을 작성하시오. 
let score1 = Number(prompt('점수1: '))
let score2 = Number(prompt('점수2: '))
let score3 = (score1+score2) / 2
if(score3>=90)
    console.log("성공")
else
    console.log("실패")

/*문제 2: 두 수 중 더 큰 수 찾기
서로 다른 두 개의 정수를 입력받아, 더 큰 수를 출력하는 프로그램을 작성하시오.
let num1 = Number(prompt('숫자1: '))
let num2 = Number(prompt('숫자2: '))
if (num1>num2)
    console.log(`${num1}`)
else if (num2>num1)
    console.log(`${num2}`)
else
    console.log(`${num1}=${num2}`)

/*문제 3: 로그인 시스템
사용자로부터 아이디와 비밀번호를 입력받습니다. 아이디가 'admin'이고 비밀번호가 '1234'와 모두 일치하면 '로그인 성공'을, 하나라도 다르다면 '로그인 실패'를 출력하는 프로그램을 작성하시오.
let id = prompt('id: ')
let pw = prompt('password: ')
if ( id == "admin" &&  pw == "1234" )
    console.log("로그인 성공")
else
    console.log("로그인 실패")
*/

/*문제 4: 비밀번호 보안 등급 확인
사용자로부터 비밀번호를 문자열로 입력받아, 길이에 따라 보안 등급을 출력하는 프로그램을 작성하시오.
힌트 : 해당 변수 뒤에 .length를 붙여 비밀번호의 길이를 숫자로 구합니다.
8자 미만: '보안 등급: 약함 (8자 이상으로 설정해주세요.)'
8자 이상 12자 미만: '보안 등급: 보통'
12자 이상: '보안 등급: 강함' 
let pw = prompt('비밀번호: ')
pwLength = pw.length
if(pwLength<8)
    console.log("보안 등급: 약함(8자 이상으로 설정해주세요.")
else if(8<=pwLength && pwLength<12) //!!!!!! 8<=pwLength<12 안됨. 조건연산자 사용 !!!!!!!!
    console.log("보안등급: 보통")
else if (12<=pwLength)
    console.log("보안등급: 강함")


/* 문제 5: 좌석 예약 시스템
3개 좌석의 예약 상태를 나타내는 배열이 있습니다. ('O': 예약 완료, 'X': 예약 가능)
let seatList = [ 'O', 'X', 'O' ];
사용자로부터 예약할 좌석의 인덱스 번호(0, 1, 2)를 입력받아, 해당 좌석이 예약 가능('X')하면 
'예약 성공'을, 이미 예약된 좌석('O')이면 '예약 불가' 를 출력하는 프로그램을 작성하시오. 
let seatList = [ 'O', 'X', 'O']
let seat = Number(prompt("예약할 좌석의 번호(1~3): "))
let seatIndex = seat - 1
if(seatList[seatIndex]=='O')
    console.log(`예약 성공`)
else
    console.log(`예약 불가`)

/*문제 6: 점수에 따른 상품 지급
게임 점수를 정수로 입력받아, 아래 기준에 따라 지급될 상품을 출력하는 프로그램을 작성하시오.
900점 이상: 'A급 경품'            , 700점 이상 900점 미만: 'B급 경품'
500점 이상 700점 미만: 'C급 경품' , 500점 미만: '참가상' 
let score = Number(prompt("게임점수: "))
if (score<500)
    console.log(`참가상`)
else if( 500<=score&& score<700)
    console.log(`C급 경품`)
else if(700<=score && score<900)
    console.log(`B급 경품`)
else if(900<=score)
    console.log(`A급 경품`)

/*문제 7: 사용자 역할에 따른 접근 권한 부여
사용자 역할(role)을 문자열로 입력받습니다. 역할에 따라 다른 접근 권한 메시지를 출력하는 프로그램을 작성하시오.
admin: '모든 기능에 접근할 수 있습니다.'    , editor: '콘텐츠 수정 및 생성 기능에 접근할 수 있습니다.'
viewer: '콘텐츠 조회만 가능합니다.'         , 그 외 역할: '정의되지 않은 역할입니다.' 
let role = prompt("사용자 역할(admin/editor/viewer): ")
if( role == 'admin')
    console.log('모든 기능에 접근할 수 있습니다.')
else if (role == 'editor')
    console.log('콘텐츠 수정 및 생성 기능에 접근할 수 있습니다.')
else if (role == 'viewer')
    console.log('콘텐츠 조회만 가능합니다.')
else
    console.log('정의되지 않은 역할입니다.')

/*문제 8: 나이에 따른 놀이공원 입장료 계산
사용자의 나이를 정수로 입력받아, 아래 기준에 따라 입장료를 출력하는 프로그램을 작성하시오.
8세 미만: '무료'                    , 8세 이상 19세 이하: '5,000원'
20세 이상 65세 미만: '10,000원'     , 65세 이상: '3,000원' 
let age = Number(prompt('나이: '))
if(age<8)
    console.log(`무료`)
else if(8<=age && age<=19)
    console.log(`5000원`)
else if (20<=age && age<=65)
    console.log(`10,000원`)
else if (65<=age)
    console.log(`3000원`)

/*문제 9: 음료 자판기
다음 음료 목록 배열이 주어져 있습니다.
음료 이름 목록 : let drinkNames = ['콜라', '사이다', '커피'];
음료 가격 목록 : let drinkPrices = [1000, 1000, 1500];
사용자로부터 원하는 음료(0, 1, 2)의 번호를 입력받아, 
해당하는 음료 이름과 가격을 '선택하신 음료는 [음료이름]입니다. 가격은 [가격]원입니다.' 형식으로 출력하세요. 
만약 목록에 없는 번호를 입력하면 '없는 상품입니다.'라고 출력하는 프로그램을 작성하시오.*/
let drinkList = ['콜라', '사이다', '커피']
let priceList = [1000, 1000, 1500]
let drinkIndex = Number(prompt(`원하는 음료(0~2): `))
if (3<drinkIndex ||  0> drinkIndex){
    console.log(`없는 상품입니다.`)
}
else
>>>>>>> 105b91f3fac7ebaf42bb1d8c704cfa30fabb4b3f
    console.log(`선택하신 음료는 ${drinkList[drinkIndex]}입니다. 가격은 ${priceList[drinkIndex]}원입니다.`)