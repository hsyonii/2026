/* DOM: Document(HTML문서), Object(객체), Model(표준)
1. 내장객체: documnet
2. 주요속성:
    -querySelector("css 선택자"): 선택자의 마크업을 객체로 변환 */

// 1)html 전체 DOM 확인
console.log(document)

// 2)
const div = document.querySelector('div') //마크업명
console.log(div)
const box2 = document.querySelector('.box2') //클래스명
console.log(box2)
const box3 = document.querySelector('#box3') //아이디
console.log(box3)
const divList = document.querySelectorAll('div')
console.log(divList)

// 3) 가져온 DOM 마크업 객체에 속성
const divHTML = div.innerHTML //마크업이 감싼 내용 가져옴
console.log(divHTML)
div.innerHTML = 'box1'

// 4)입력받은 값 가져오는 속성
const name = document.querySelector('.name') //name클래스인 DOM가져옴
const value = name.value //name의 값만 저장
//input마크업은 innerHTML X
//value: '입력'받은 값 저장
name.value = "제목 입력"
console.log(value)

// 5) 입력받은 값 함수에 가져오기
function 등록함수(){
    const 입력마크업 = document.querySelector('.title')
    const 값 = 입력마크업.value
    box2.innerHTML = 값
}

// 6) js에서 css 활용하기
const 제목마크업 = document.querySelector('.title2')
제목마크업.style = "color:red; font-size:10px"

