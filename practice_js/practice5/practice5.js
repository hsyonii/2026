/*문제1
const products={}
let 제품명 = prompt('제품명: ')
let 가격 = Number(prompt('가격: '))
let 제조사 = prompt('제조사: ')
//객체변수명.속성명 = 속성값
products.product = 제품명
products.price = 가격
products.made = 제조사
console.log(products)
*/

/*문제 2
let id = prompt('아이디: ')
let pw = prompt('비밀번호: ')
let name = prompt('이름: ')
const members=[{'아이디':'soyeon', '비밀번호':'1234', '이름':'황소연'},{'아이디':'admin','비밀번호':'0000','이름':'사용자'}]
for(let i = 0; i <= members.length-1 ; i++){
    if(members[i].아이디 == id){
        console.log('이미 존재하는 아이디 입니다.')
        break
    }
} //배열 끝까지 검증 후에 없으면 객체 추가
let newMember = {}
newMember.아이디 = id
newMember.비밀번호 = pw
newMember.이름 = name
members.push(newMember)
console.log(members)
*/

/*문제3
const scores = [
    {name:'A', math:80, science:92},
    {name:'B', math:95, science:88},
    {name:'C',math:76,science:78}
]
let total=0
for (let i=0; i<=scores.length-1; i++){
    total += scores[i].math
}
let average = total/scores.length-1
console.log(average)

//문제4
const products=[
    {id:1, name:'사과'},
    {id:2, name:'바나나'},
    {id:3, name:'포도'},
    {id:4, name:'딸기'}
]
let check = false
for (let i=0; i<=products.length-1; i++){
    if (products[i].id==3){
        console.log(products[i])
        check = true
        break
    }
}
if(check == false)
    console.log('상품을 찾을 수 없습니다.') */

//문제5
console.log('[문제5]')
const users=[
    {id:1,name:'유저1', isActive:true},
    {id:2,name:'유저2',isActive:false},
    {id:3,name:'유저3',isActive:true},
    {id:4,name:'유저4',isActice:false}
]
let activeUsers = []
for(let i=0; i<=users.length-1; i++){
    if (users[i].isActive == true){
        activeUsers.push(users[i].name)
    }
}
console.log(activeUsers)

//문제6
console.log('[문제6]')
const movie=[
    {title:'인셉션', director:'크리스토퍼 놀란'},
    {title:'기생충', director:'봉준호'},
    {title:'매트릭스',director:'워쇼스키 자매'}
]
let movieTitles = []
for(let i=0; i<=movie.length-1; i++){
    movieTitles.push(movie[i].title)
}
console.log(movieTitles)

//문제7
console.log('[문제7]')
const 팀 = [
    {'name':'철수','department':'개발팀'},
    {'name':'영희','department':'기획팀'},
    {'name':'민수','department':'개발팀'},
    {'name':'지혜','department':'기획팀'}
]
console.log(팀)
let 개발팀명단 = []
let 기획팀명단 = []
const 결과 = {}
for (i=0;i<=팀.length-1;i++){
    if(팀[i].department == '개발팀'){
        개발팀명단.push( 팀[i].name )
        console.log(개발팀명단)
    }
    else{
        기획팀명단.push( 팀[i].name )
        console.log(기획팀명단)
    }
}
결과.개발팀 = 개발팀명단
결과.기획팀 = 기획팀명단
console.log(결과)

//문제8
console.log('[문제8]')
const cart = [
    {id:1, quantity:2},//quantity:수량
    {id:3, quantity:1}
]
const productsInfo=[
    {id:1, price:1000},
    {id:2,price:5000}, //장바구니에 없는 상품
    {id:3, price:2500}
]
let total = 0
for (let i =0; i<=cart.length-1; i++){ //cart 순회
    for(let j=0; j<=productsInfo.length-1; j++){//producsInfo 순회
        if (cart[i].id == productsInfo[j].id){
            total  += productsInfo[j].price*cart[i].quantity //금액*수량
        }
    }
}
console.log(`총액: ${total}원`)

//문제9
console.log('[문제9]')
const votes = ['A','B','B','B','C','A','B','A']
const result = {}
let a = 0
let b = 0
let c = 0
for(let i=0; i<=votes.length-1; i++){
    if(votes[i]=='A')
        a++
    else if(votes[i]=='B')
        b++
    else //C
        c++
}
result.A = a
result.B = b
result.C = c
console.log(result)

//문제10
const webtoons = [
    {title:'나 혼자만 레벨업', rating:9.8},
    {title:'유미의 세포들',rating:9.9},
    {title:'전지적 독자 시점',rating:9.7}
]
let html=``
for (let i=0; i<=webtoons.length-1; i++){//webtoons배열 순회
    html += webtoons[i].title
    for(let n=1; n<=webtoons[i].rating; n++){//★개수<=점수 일 동안
        html += `★`
    }
    for (let m=1; m<=11-webtoons[i].rating; m++){
            html += '☆' //10-★개수 만큼 ☆입력
        }
    html += `</br>`//줄바꿈
}
document.querySelector('p').innerHTML = html

//문제11
let response={
  "currentCount": 10,
  "data": [
    {
      "소재지": "인천광역시 부평구 안남로417번길 20, 2층 (청천동)",
      "업소명": "1982삼계정",
      "업태": "한식",
      "연번": 1,
      "전화번호": "032-512-1982",
      "지정메뉴": "녹두삼계탕"
    },
    {
      "소재지": "인천광역시 부평구 부평대로 301 (청천동,남광센트렉스 111호)",
      "업소명": "갈비가",
      "업태": "한식",
      "연번": 2,
      "전화번호": "032-363-3787",
      "지정메뉴": "속초코다리냉면"
    },
    {
      "소재지": "인천광역시 부평구 평천로553,1층(삼산동)",
      "업소명": "경복궁삼계탕",
      "업태": "한식",
      "연번": 3,
      "전화번호": "032-511-1494",
      "지정메뉴": "들깨삼계탕"
    },
    {
      "소재지": "인천광역시 부평구 부평대로63번길10-11(부평동)",
      "업소명": "금강산추어탕",
      "업태": "한식",
      "연번": 4,
      "전화번호": "032-527-8118",
      "지정메뉴": "추어탕"
    },
    {
      "소재지": "인천광역시 부평구 부평대로87번길 4(부평동)",
      "업소명": "뉴욕반점",
      "업태": "중식",
      "연번": 5,
      "전화번호": "032-516-4488",
      "지정메뉴": "삼선짬뽕,찹쌀탕수육"
    },
    {
      "소재지": "인천광역시 부평구 신트리로22번길 15-14 (부평동, 1층 일부)",
      "업소명": "더히든키친",
      "업태": "양식",
      "연번": 6,
      "전화번호": "032-272-7276",
      "지정메뉴": "바질페스토파스타"
    },
    {
      "소재지": "인천광역시 부평구 마장로 402(청천동)",
      "업소명": "덕수갈비",
      "업태": "한식",
      "연번": 7,
      "전화번호": "032-517-4070",
      "지정메뉴": "왕갈비탕"
    },
    {
      "소재지": "인천광역시 부평구 대정로 93, 웰링턴 1층 103호 (부평동)",
      "업소명": "동강해물탕",
      "업태": "한식",
      "연번": 8,
      "전화번호": "032-524-9166",
      "지정메뉴": "해물탕"
    },
    {
      "소재지": "인천광역시 부평구 백범로468번길45(십정동)",
      "업소명": "동암아구해물탕",
      "업태": "한식",
      "연번": 9,
      "전화번호": "032-435-0233",
      "지정메뉴": "해물찜,해물탕"
    },
    {
      "소재지": "인천광역시 부평구 부흥로257-7(부평동)",
      "업소명": "들내음 들깨칼국수",
      "업태": "한식",
      "연번": 10,
      "전화번호": "032-515-4151",
      "지정메뉴": "팥칼국수"
    }
  ],
  "matchCount": 67,
  "page": 1,
  "perPage": 10,
  "totalCount": 67
}
let data = response.data //data만 저장,배열
let html2 = `<tbody><tr><td>소재지</td><td>업소명</td><td>업태</td><td>전화번호</td><td>지정메뉴</td></tr>`
for(let i=0; i<=data.length-1; i++){
    html2 +=`<tr><td>${data[i].소재지}</td>
                <td>${data[i].업소명}</td>
                <td>${data[i].업태}</td>
                <td>${data[i].전화번호}</td>
                <td>${data[i].지정메뉴}</td>
                </tr></tbody>`
}
document.querySelector("table").innerHTML=html2
