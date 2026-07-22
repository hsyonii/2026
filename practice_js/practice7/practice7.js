let 목록 = [
    {날짜:'2025-06-19', 항목:'점심 식사', 금액:'9000'},
    {날짜:'2025-06-19', 항목:'교통비', 금액:'1500'}
]
function 등록버튼(){
    let 날짜 = document.querySelector('.날짜선택').value
    let 항목 = document.querySelector('.항목입력').value
    let 금액 = document.querySelector('.금액입력').value

    let 객체 = {날짜, 항목, 금액}//={날짜:날짜, 항목:항목, 금액:금액} (속성명=속성값 이면)
    목록.push(객체)
    //console.log(목록)

    //버튼 누를때마다 전체출력
    let html=`<tr><td>날짜</td><td>항목</td><td>금액</td></tr>`
    for(let i=0; i<=목록.length-1; i++){
        html += `<tr><td>${목록[i].날짜}</td><td>${목록[i].항목}</td><td>${목록[i].금액}</td></tr>`
    }
    document.querySelector('.목록영역').innerHTML = html
}