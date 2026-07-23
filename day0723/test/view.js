//http://127.0.0.1:5500/day0723/test/view.html?no=2
boardView()

function boardView(){
    //url에서 no 값 가져오기 모르겠음 //!
    let url = new URLSearchParams( location.search )
    let no = url.get("no")
    let boardList = JSON.parse(localStorage.getItem('localBoardList'))
    let title=''
    let content =''
    for(let i=0; i<=boardList.length-1; i++){
        if(no == boardList[i].no){
            title = boardList[i].title
            content = boardList[i].content
        }
    }
    //console.log(title)
    document.querySelector('#title').innerHTML = title
    document.querySelector('#content').innerHTML = content
}

//삭제하는거 빼먹고 아까 못봤어요,,,
function boardDelete(){
    let url = new URLSearchParams(location.search)
    let no = url.get('no')
    let boardList = JSON.parse(localStorage.getItem('localBoardList'))
    console.log(boardList)
    for(let i=0; i<=boardList.length-1; i++){
        if(no == boardList[i].no){
            
            boardList.splice(i,1)
            alert('삭제완료')
            location.href='list.html'
            localStorage.setItem('localBoardList',JSON.stringify(boardList))
        }
    }
} 

function listView(){
    location.href='list.html'
}