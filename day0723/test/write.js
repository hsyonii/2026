function boardWrite(){
    //이미 작성된 게시물 있는지 확인
    let boardList = JSON.parse(localStorage.getItem('localBoardList'))
    if(boardList==null){ boardList=[] }
        
    let no = boardList.length+1 
    let title = document.querySelector('#titleInput').value // !
    let content = document.querySelector('#contentInput').value // !
    let pw = document.querySelector('#pwInput').value // !

    let object = {no,title,content,pw}
    boardList.push(object)  // !
    boardList = JSON.stringify( boardList )
    localStorage.setItem('localBoardList',boardList)
    alert('게시물 작성 완료')

    //게시물 목록으로 넘어가기
    location.href='list.html'
}