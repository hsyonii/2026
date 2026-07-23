let userList=[]
let lastUserNum=userList.length-1

function signUp(){
    let id = document.querySelector('#sign_id').value
    let pw = document.querySelector('#sign_pw').value
    for(let i=0; i<=userList.length-1; i++){
        if(id==userList[i].id){
            alert('중복된 아이디 입니다.')
            return
        }
    } //끝까지 검증 후
    let newUser={num:lastUserNum+1,id,pw} //num: 0 부터
    userList.push(newUser)
    lastUserNum++
    localStorage.setItem('localUserList',JSON.stringify(userList))
}

function logIn(){
    let inputId = document.querySelector('#login_id').value
    let inputPw = document.querySelector('#login_pw').value
    for(let i=0; i<=userList.length-1; i++){
        let userInfo = JSON.parse(localStorage.getItem('localUserList'))
        if(inputId==userInfo[i].id && inputPw==userInfo[i].pw){
            alert('로그인 성공')
            return //성공시 함수 즉시종료
        }
    }//끝까지 일치하는 객체 없으면 로그인 실패
    alert('로그인 실패')
}