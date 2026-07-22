const categoryList=[ {'ccode':1}, {'cname':음료}, {'ccode':2}, {'cname':과자} ]
const productList=[
    {'pcode':'1', 'pname':'코카콜라', 'pprice':'1,000', 'pimg':'https://placehold.co/100x100', 'pdate':'2026-01-26', 'ccode':1},
    {'pcode':'2', 'pname':'사이다', 'pprice':'1,000', 'pimg':'https://placehold.co/100x100', 'pdate':'2026-01-26', 'ccode':1}
]

//전체조회
function productPrint(){
    document.querySelector('#main table tbody')
    for(let i=0; i<=productList.length-1; i++){
        let product = productList[i]
        let cnmae =''
        for(let j=0; j<=categoryList.length-1; j++){
            if(categoryList[j].ccode==product.ccode){
                cname=categoryList[j].cname
                break
            }
        }
        html += `<tr>
                    <td> <img src=${product.pimg}> </td>
                    <td> ${product.pcode} </td> <td> ${product.pname} </td> <td>${product.pprice}</td> <td> ${product.pdate} </td> 
                    <td> 
                        <button class="deleteBtn">삭제</button> 
                        <button class="updateBtn">수정</button> 
                    </td>
                </tr>`
    }
    let html = '안녕하세요'
    tbody.innerHTML = html
}

//상품 등록(추가)
let finalPcode=2 //마지막으로 사용된 제품코드
function productAdd(){
    let category= document.querySelector('.category').value
    let name = document.querySelector('.name').value
    let price = document.querySelector('.price').value
    let image = document.querySelector('.image').files[0] //.files : 첨부파일의 [0]번째 자료 가져오기
    const newProduct = {ccode: category, pname : name, pprice : price, pimg:image, pcode:finalPcode++}
    products.push(newProduct)
}