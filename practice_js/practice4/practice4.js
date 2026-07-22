//**문제1**
let numbers = [23,5,67,12,88,34]
let max = numbers[0] //가장큰수 넣을 변수
for(let i =0; i<=numbers.length-1; i++){
        if(max<numbers[i]){
            max = numbers[i]
        }
}
console.log(max)

//문제2
for(let i =0; i<=5; i++){ //1행*5개
    let stars=''
    for(let n=0; n<=5-i; n++){ //별1개*5-i개출력
        stars=stars+'*'
    }
    console.log(stars)
}

//문제3
let names = ['김하준', '이서아', '박솔민', '최도윤']
for (i=0 ; i<=names.length-1 ; i++){
    if ( names[i].indexOf('솔')!= -1) //.indexOf():찾으려는 요소 없으면 -1반환
    {
        console.log(names[i])
        break
    }
}

//문제4
let seats = [['A1','A2','A3'],['B1','B2','B3'],['C1','C2','C3']]
for (let abc = 0; abc<=seats.length-1; abc++)
{
    for (let num=0; num<=seats[abc].length-1; num++)
    {
        console.log(seats[abc][num])
    }
}

//문제5
let numbers2=[1,5,2,3,5,1,4,2]
let numbers3=[]
for (let i =0; i<=numbers2.length-1; i++){
    let num2 = numbers2[i]
    if ( numbers3.indexOf(num2)==-1)
        numbers3.push(num2)
}
console.log(numbers3)

//**문제6**
let bubble = [5,3,4,1,2]
for (let i =0 ; i<=bubble.length-1; i ++){
    for ( let j =i+1 ; j<=bubble.length-1;j++){
        if ( bubble[j]<bubble[i]){
            let temp = bubble[i] //swap
            bubble[i] = bubble[j]//변수 만들어서 값 옮겨담기
            bubble[j] = temp
    } 
}
}
console.log(bubble)

/*문제7
let products = ['볼펜','노트','지우개']
let stocks = [10,5,20]
let product = prompt('상품명: ')
let stock = Number(prompt('수량: '))
let index = products.indexOf(product) //입력받은 상품의 인덱스
if (stock <= stocks[index]){ //구매수량<=재고
    console.log('구매 완료!')
    stocks[index] = stocks[index] - stock
    console.log(`${product} 남은재고: ${stocks[index]}`)
}
else
    console.log('재고가 부족합니다.')
*/

/*문제8
let movies = ['눈동자', '백룸', '와일드씽', '토이스토리5' ]
let ratings = [8,6,5,7]
let stars = ''
for (let i=0; i <=movies.length-1; i++){
    stars += `${movies[i]}: `
    for (let n=1; n<=ratings[i]; n++)
        stars+=('*') //문자열에 추가는 +=
    for (let m=1; m<=10-ratings[i]; m++)
        stars+=('_')
    stars += `<br/>`
}
document.querySelector("p").innerHTML = stars
*/

//문제9
let seats2 = ['빈좌석', '예약석', '예약석',' 빈좌석','예약석','빈좌석']
let html = ''
for (let i = 0; i<=seats2.length-1 ; i++){
    if (seats2[i] == '빈좌석')
            html += `<span style = "color:blue;">빈좌석</span>`
    else if (seats2[i] == '예약석')
            html += `<span style = "color:red;">예약석</span>`
    if (i%2==1)
        html+=`<br/>`
}
document.querySelector('div').innerHTML = html

//문제10
let cars = ['123어1234', '000가0000','987나9876','111호1111']
let minutes = [65,30,140,1000]
//30분까지 1000원
let html2 = ''
for(let i =0; i<=cars.length-1 ; i++){
    let fee = 0 //요금변수
    html2 += `${cars[i]}: `
    if (minutes[i]<=30)
        fee = 1000
    else{
        fee = (1000+500*parseInt((minutes[i]-30)/10))
        if (20000<fee)
            fee = 20000
    }
    html2 += fee
    html2 +=`원 <br/>`
}
document.querySelector('p').innerHTML = html2 //html에 출력할 내용을 하나의 문자열 변수에 담아 출력
