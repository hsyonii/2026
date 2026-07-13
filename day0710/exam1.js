//반복문
//1.for(시작값; 조건식; 증감식;){}
for (let i = 0; i < 3; i++ ){ //i가 0부터 1씩더해 3미만일동안~
    console.log(`안녕하세요${i}`)
}

//1~5 합계 구하기
let total=0
for (let i=1; i<=6; i++){
    total = total+i
}
console.log(total)

//구구단
for (let x=2; x<=9; x++){
    console.log(`[${x}단]`)
    for(let y=1; y<=9; y++){
        let dan = x*y
        console.log(`${x}*${y}= ${dan}`)
    }
}

//배열의 데이터를 하나씩 출력
let fruitList = ['사과','포도','딸기']
for(let index = 0; index<=fruitList.length-1; index++)
{
    console.log(fruitList[index])
}

/*3개의 이름을 입력받아 배열에 저장
//배열에 저장된 이름을 HTML로 출력
let nameList=[]
for(let i=0; i<=2;i++){
    nameList[i] = prompt(`이름${i+1}: `)
}
document.querySelector("h5").innerHTML = `${nameList}`

문제 1: 1부터 10까지 출력하기
for 반복문을 사용하여 1부터 10까지의 숫자를 콘솔에 순서대로 
출력하는 프로그램을 작성하시오.
for (let i = 1; i<=10 ; i++){
    console.log(`${i}`)
}

/*문제 2: 배열의 모든 요소 출력하기
다음과 같은 과일 배열이 있습니다. for 반복문을 사용하여 
배열의 모든 요소를 하나씩 콘솔에 출력하시오.
let fruits = ['사과', '바나나', '포도', '딸기'];
let fruitList2 = ['사과','바나나','포도','딸기']
for(let index = 0; index<=3; index++)
{
    console.log(fruitList2[index])
}

/*문제 3: 배열 역순으로 출력하기
주어진 배열을 for 반복문을 사용하여 
역순으로 (마지막 요소부터 첫 요소 순서로) 출력하는 프로그램을 작성하시오.
let numbers = [1, 2, 3, 4, 5];  출력 예시: 5 4 3 2 1 
let numbers = [1, 2, 3, 4, 5]
for (i=4; i>=0; i--){
    console.log(numbers[i])
}

/*문제 4: 1부터 50까지의 합계 구하기
for 반복문을 사용하여 1부터 50까지 모든 정수의 합을 구하여 콘솔에 출력하시오.
let total2=0
for (i=1; i<=50; i++){
    total2 = total2 + i
}
console.log(total2)

/*문제 5: 짝수만 출력하기
for 반복문과 if 조건문을 사용하여, 1부터 20까지의 숫자 중 짝수만 콘솔에 출력하시오.
for(let i=1; i<=20; i++){
    if(i%2==0)
        console.log(i)
}

//반복문 제어
//1.continue
for(let i = 1; i<5 ; i++){
    if(i==3)
        continue //조건문으로 이동
    console.log(i)
}
//2:break
for(let i=1; i<5; i++)
{
    if(i==3)
        break //반복문 종료
    console.log(i)
}

/*for(;;): 무한루프
for(;;){
    let input = prompt()
    if(input=='exit')
        break
}

/*연습문제2
//문제6
let scores= [85, 92,78,65,95]
let total=0
for (let i =0; i<=scores.length-1; i++){
    total = total+scores[i]
}
let average = total/scores.length
console.log(`합계: ${total}  평균: ${average}`)

//문제7
let scores = [77,82,100,54,96]
for(let i =0;i<=scores.length-1;i++){
    if(scores[i]=='100'){
        console.log('만점자를 찾았습니다!')
        break
    }
}

//문제8
let scores = [90,45,72,88,59,100]
for(i=0; i<=scores.length-1; i++){
    if(scores[i]>=60)
        console.log(`${scores[i]}`)
}


//문제9
let btypes=['A','B','O','AB','A','B','A']
let a = 0
for(let i=0; i<=btypes.length-1; i++){
    if (btypes[i]=='A')
        a++
}
console.log(a)
*/

//문제10
let names=['유재석','강호동','신동엽']
let scores=['92','86','72']
for(let i=0; i<=names.length-1;i++){
    let circles=''
    for(let yes=1;yes<=(scores[i]/10);yes++)
        circles+='●'
    for(let no=1; no<(10-(scores[i]/10));no++)
        circles+='○'
    document.querySelector('body').innerHTML += `${names[i]}\n${circles}`
}
