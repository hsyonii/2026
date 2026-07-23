boardList()

function boardList(){
    let boardList = JSON.parse(localStorage.getItem('localBoardList'))
    if (boardList == null)
        boardList = []
    let html=''
    for(let i=0; i<=boardList.length-1; i++){
        // 제목에 하이퍼링크 걸기
        html += `<tr>
                    <td>${boardList[i].no}</td>
                    <td><a href="view.html?no=${boardList[i].no}"> ${boardList[i].title}</a> </td>
                </tr>`
    }
    document.querySelector('#boardList').innerHTML=html
}