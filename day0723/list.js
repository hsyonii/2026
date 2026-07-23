boardPrint()

function boardPrint(){
    let boardList=JSON.parse(localStorage.getItem('localBoardList'))
    if(boardList==null){
        boardList=[]
    }    
    let html=''
    for(let i=0;i<=boardList.length-1;i++){
        html += `<tr>
                    <td>${boardList[i].no}</td>
                    <td>${boardList[i].content}</td>
                </tr>`
    }
    document.querySelector('#boardList').innerHTML=html
}