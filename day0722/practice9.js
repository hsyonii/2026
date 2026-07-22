let partList=[
    {pcode:0, pname:'개발팀'},
    {pcode:1, pname:'디자인팀'},
    {pcode:2, pname:'기획팀'}
]

let memberList=[
    {mcode:1, mname:'김민준',mposition:'신입 개발자',pimg:'https://placehold.co/100x100',pcode:0},
    {mcode:2, mname:'이서연',mposition:'수석 디자이너',pimg:'https://placehold.co/100x100',pcode:1},
    {mcode:3, mname:'박도윤',mposition:'팀장',pimg:'https://placehold.co/100x100',pcode:2},
    {mcode:4, mname:'유재석',mposition:'대리',pimg:'https://placehold.co/100x100',pcode:0}
]

let vacationList=[
    {mcode:1,vstart:'2025-08-04',vend:'2025-08-04',vreason:'병원진료'},
    {mcode:2,vstart:'2025-07-21',vend:'2025-07-25',vreason:'여름휴가'}
]

showVaction()

//휴가신청 출력
function showVaction(){
    let name=''
    let html=''
    for(let i=0; i<=vacationList.length-1; i++){
        for(let j=0; j<=memberList.length-1; j++){
            if(vacationList[i].mcode==memberList[j].mcode){
                name=memberList[j].mname
            }
        }
        html+=`<div class="vacation-card">
                <div class="user-name">${name}</div>
                <div class="date">${vacationList[i].vstart}~${vacationList[i].vend}</div>
                <div class="reason">${vacationList[i].vreason}</div>
                <button onclick="vacationDelete(${vacationList[i].mcode})" type="button" class="btn-cancel">신청취소</button>
            </div>`
    }
    document.querySelector('.vacation_sub').innerHTML=html
}

//휴가신청
function vacationAdd(){
    //휴가사원 이름 가져오기
    let member = document.querySelector('.member_select').value
    let mcode =null
    //휴가사원의 사원코드 찾아오기
    for(let i=0; i<=memberList.length-1; i++){
        if(member == memberList[i].mname){
            mcode = memberList[i].mname
            break
        }
    }
    //휴가시작-끝 날짜 가져오기
    let vstart = document.querySelector('.vacation_start').value
    let vend = document.querySelector('.vacation_end').value
    //휴가사유 가져오기
    let vreason = document.querySelector('.vacation_reason').value
    //vationList 에 추가
    let vacationSub={mcode,vstart,vend,vreason}
    vacationList.push(vacationSub)
    
    //출력
    showVaction()
}


//
function vacationDelete(mcode){
    //휴가사원의 사원코드 찾아오기
    for(let i=0; i<=vacationList.length-1; i++){
        if(mcode == vacationList[i].mcode){
            vacationList.splice( i , 1 );
            alert('신청취소됨.');
        }
    }
    //출력
    showVaction()
}