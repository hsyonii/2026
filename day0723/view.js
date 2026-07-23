boardView()
//http://127.0.0.1:5500/day0723/view.html?no=2
function boardView(){
    let url=new URLSearchParams(location.search)//URL상 쿼리스트링 가져오기
    //console.log(url)
    let no = url.get('no') //no 속성값
    //console.log(no)
    let boardList = JSON.parse(localStorage.getItem('localBoardList'))
    if(boardList==null)
        boardList=[]
    for(let i=0; i<=boardList.length-1;i++){
        if(boardList[i].no==no){
            document.querySelector('#title').innerHTML =boardList[i].title
            document.querySelector('#content').innerHTML=boardList[i].content
            return    
        }
    }
}