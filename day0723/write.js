function boardWrite(){
    //미리 저장되어있는값 있는지 확인, 문자열그대로 변수에 저장
    let boardList = JSON.parse(localStorage.getItem('localBoardList'))
    if(boardList==null)//아무것도 없으면
        boardList=[]
    //html 입력값 저장
    let no=boardList.length+1 //1번부터
    let title = document.querySelector('#titleInput').value
    let content = document.querySelector('#contentInput').value
    let pw = document.querySelector('#pwInput').value
    let object={no,title,content,pw}
    //object를 문자열로 변경하여 localStorage에 저장
    //stringify:객체->문자열, parse:문자열->객체
    boardList.push(object)
    //스토리지.setItem(속성명,속성값)
    localStorage.setItem('localBoardList',JSON.stringify(boardList))
    //작성 성공시 게시물 목록 페이지로 이동
    alert('게시물 작성 성공')
    location.href='list.html'
}
