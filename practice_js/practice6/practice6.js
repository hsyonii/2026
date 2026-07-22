// 실습1
function isAdult(age){
    if (20<=age)
        return true
    else
        return false
}
let adult = isAdult(25)
let notAdult = isAdult(17)
console.log(adult,notAdult)

// 실습2
function sumArray(array){
    let sum = 0
    for(let i=0; i<=array.length-1; i++){
        sum += array[i]
    }
    return sum
}
const numbers=[10,20,30,40,50]
let re2 = sumArray(numbers)
console.log(re2)

// 실습3
function findLongestWord(array){
    let longest 
    for(let i=0; i<=array.length-1; i++){
        for(let j=0; j<=array.length-1; j++){
            if(array[j].length<=array[i].length)
                longest = array[i]
            else
                break
        }
    }
    return longest
}
const words = ['apple', 'banana','kiwi','strawberry']
let re3 = findLongestWord(words)
console.log(re3)

// 실습4
let userScore=0
function gainScore(){
    userScore += 10
}
function loseScore(){
    userScore -= 5
}
gainScore()
gainScore()
gainScore()
loseScore()
console.log(userScore)

// 실습5
function findTop(a){
    let top
    for(let i=0; i<=a.length-1; i++){
        for(let j=0; j<=a.length-1; j++){
            if (a[j].score <= a[i].score){
                top = a[i].score
            }
            else
                break
        }
    }
    return top
}
const students = [
    {name:'박종성', score:99},
    {name:'박성훈', score:85},
    {name:'양정원', score:86},
    {name:'니시무라 니키', score:67}
]
let re5 = findTop(students)
console.log(re5)

// 실습6
const products = [
    {name:'말랑이',price:5000,stock:10},
    {name:'왁뿌볼',price:10000,stock:4},
    {name:'스퀴시',price:4000,stock:7}
]
function renderProducts(list){
    let html6=''
    for(let i=0; i<=list.length-1; i++){
        html6 += `<h4>[${list[i].name}]</h4>
                <p>가격: ${list[i].price}</p>
                <p>재고: ${list[i].stock}</p>`
    }
    document.querySelector("div").innerHTML = html6
}
renderProducts(products)

// 실습7
function calculator(x,y,operator){
    let result
    if(operator == '+'){
        result = x+y
    }
    else{
        result = x-y
        if(result<0){
            result = result*-1
        }
    }
    console.log(result)
}
calculator(3,5,'-')

// 실습8
let toDo=['장보기','운동하기','공부하기']
function renderList(list){
    let html8='' //빈문자열''로 정해줘야 undefined제거됨
    for(let i=0; i<=list.length-1; i++){
        html8+=`<li>${list[i]}</li>`
    }
    document.querySelector("ol").innerHTML=html8
}
renderList(toDo)

// 실습9
function getTicketPrice(age){
    let ticketPrice=''
    if(age<8)
        ticketPrice='무료'
    else if(8<=age && age<=19)
        ticketPrice='5,000원'
    else
        ticketPrice='10,000원'
    return ticketPrice
}
let re9 = getTicketPrice(24)
console.log(re9)