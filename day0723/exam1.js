/* 웹스토리지
1. 세션 스토리지: 세션 저장소
- 모든 브라우저가 종료되면 자동 삭제
- 서로 다른 브라우저/탭 자료 공유 안함.
    ex) 이벤트 정보
2. 로컬 스토리지: 로컬 저장소
- 모든 브라우저가 종료해도 저장 유지
- 서로 다른 브라우저/탭 자료 공유 됨.( 단 동일한 도메인일 경우)
    ex) 자동 로그인 / 로그인 유지
- 노출에 대한 위험이 있을 경우 암호화 통해 자료 변환 */

// 웹 스토리지 객체 호출
console.log(localStorage)
console.log(sessionStorage)

// 스토리지명.setItem(속성명,속성값): 웹 스토리지 객체 내 자료 추가
sessionStorage.setItem('name', '유재석')
localStorage.setItem('age',40)

// 스토리지명.getItem(속성명): 웹 스토리지 객체 내 자료 호출
let name = sessionStorage.getItem('name')
console.log(name)
let age = localStorage.getItem('age')
console.log(age)

// 스토리지명.removeItem(속성명): 웹 스토리지 객체 내 특정 자료 삭제
sessionStorage.removeItem('name')
// .clear(): 모든 자료 삭제
localStorage.clear()

// 웹 스토리지는 문자열만 지원**타입변환 필요**
// JSON.stringify(객체): 객체->문자 타입변환
sessionStorage.setItem('회원객체', JSON.stringify({'name':'유재석', 'age':40}))
// JSON.parse(문자열): 문자열->객체 타입변환
let 회원객체 = JSON.parse(sessionStorage.getItem('회원객체'))
console.log(회원객체)



