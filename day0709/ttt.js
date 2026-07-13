let ttt= [' ',' ',' ',' ',' ',' ',' ',' ',' '] //게임판
let turn=1; let end = false;

//turn1
let index = Number(prompt(`사용자1 번호입력(0~8):`))
if (ttt[index] == ' ' )
    ttt[index]='O'
console.log(`[turn ${turn}]\n${ttt[0]} ${ttt[1]} ${ttt[2]}\n${ttt[3]} ${ttt[4]} ${ttt[5]}\n${ttt[6]} ${ttt[7]} ${ttt[8]}`)
turn++

//turn2
let index = Number(prompt('사용자2 번호입력(0~8):'))
if (ttt[index] == ' ' )
    ttt[index]='X'
console.log(`[turn ${turn}]\n${ttt[0]} ${ttt[1]} ${ttt[2]}\n${ttt[3]} ${ttt[4]} ${ttt[5]}\n${ttt[6]} ${ttt[7]} ${ttt[8]}`)
turn++

//turn3
let index = Number(prompt('사용자1 번호입력(0~8):'))
if (ttt[index] == ' ' )
    ttt[index]='O'
console.log(`[turn ${turn}]\n${ttt[0]} ${ttt[1]} ${ttt[2]}\n${ttt[3]} ${ttt[4]} ${ttt[5]}\n${ttt[6]} ${ttt[7]} ${ttt[8]}`)
turn++

//turn4
let index = Number(prompt('사용자2 번호입력(0~8):'))
if (ttt[index] == ' ' )
    ttt[index]='X'
console.log(`[turn ${turn}]\n${ttt[0]} ${ttt[1]} ${ttt[2]}\n${ttt[3]} ${ttt[4]} ${ttt[5]}\n${ttt[6]} ${ttt[7]} ${ttt[8]}`)
turn++

//turn5
let index = Number(prompt('사용자1 번호입력(0~8):'))
if (ttt[index] == ' ' )
    ttt[index]='O'
console.log(`[turn ${turn}]\n${ttt[0]} ${ttt[1]} ${ttt[2]}\n${ttt[3]} ${ttt[4]} ${ttt[5]}\n${ttt[6]} ${ttt[7]} ${ttt[8]}`)
if (( ttt[0]=='O'&&ttt[1]=="O"&&ttt[2]=='O')||(ttt[3]=='O'&&ttt[4]=="O"&&ttt[5]=='O')||(ttt[6]=='O'&&ttt[7]=="O"&&ttt[8]=='O')||
        (ttt[0]=='O'&&ttt[3]=="O"&&ttt[6]=='O')||(ttt[1]=='O'&&ttt[4]=="O"&&ttt[7]=='O')||(ttt[2]=='O'&&ttt[5]=="O"&&ttt[8]=='O')||
        (ttt[0]=='O'&&ttt[4]=="O"&&ttt[8]=='O')||(ttt[2]=='O'&&ttt[4]=="O"&&ttt[6]=='O')||
        ( ttt[0]=='X'&&ttt[1]=="X"&&ttt[2]=='X')||(ttt[3]=='X'&&ttt[4]=="X"&&ttt[5]=='X')||(ttt[6]=='X'&&ttt[7]=="X"&&ttt[8]=='X')||
        (ttt[0]=='X'&&ttt[3]=="X"&&ttt[6]=='X')||(ttt[1]=='X'&&ttt[4]=="X"&&ttt[7]=='X')||(ttt[2]=='X'&&ttt[5]=="X"&&ttt[8]=='X')||
        (ttt[0]=='X'&&ttt[4]=="X"&&ttt[8]=='X')||(ttt[2]=='X'&&ttt[4]=="X"&&ttt[6]=='X')){
        end = true
        console.log('game end. 사용자1 승리!')
        }
    turn++
}


if (turn%2==0 && turn <10 && end == false){
    let index = Number(prompt('사용자2 번호입력(0~9):'))
    if (ttt[index] == ' ' )
        ttt[index]='X'
    else{
        index = Number(prompt('사용자2 번호입력(0~9):'))
        ttt[index]='X'
    }
    console.log(`[turn ${turn}]\n${ttt[0]} ${ttt[1]} ${ttt[2]}\n${ttt[3]} ${ttt[4]} ${ttt[5]}\n${ttt[6]} ${ttt[7]} ${ttt[8]}`)
    if (( ttt[0]=='O'&&ttt[1]=="O"&&ttt[2]=='O')||(ttt[3]=='O'&&ttt[4]=="O"&&ttt[5]=='O')||(ttt[6]=='O'&&ttt[7]=="O"&&ttt[8]=='O')||
        (ttt[0]=='O'&&ttt[3]=="O"&&ttt[6]=='O')||(ttt[1]=='O'&&ttt[4]=="O"&&ttt[7]=='O')||(ttt[2]=='O'&&ttt[5]=="O"&&ttt[8]=='O')||
        (ttt[0]=='O'&&ttt[4]=="O"&&ttt[8]=='O')||(ttt[2]=='O'&&ttt[4]=="O"&&ttt[6]=='O')||
        ( ttt[0]=='X'&&ttt[1]=="X"&&ttt[2]=='X')||(ttt[3]=='X'&&ttt[4]=="X"&&ttt[5]=='X')||(ttt[6]=='X'&&ttt[7]=="X"&&ttt[8]=='X')||
        (ttt[0]=='X'&&ttt[3]=="X"&&ttt[6]=='X')||(ttt[1]=='X'&&ttt[4]=="X"&&ttt[7]=='X')||(ttt[2]=='X'&&ttt[5]=="X"&&ttt[8]=='X')||
        (ttt[0]=='X'&&ttt[4]=="X"&&ttt[8]=='X')||(ttt[2]=='X'&&ttt[4]=="X"&&ttt[6]=='X')){
        end = true
        console.log('game end. 사용자2 승리!')
        }
    turn++
}


if (turn%2==1&&turn <10 && end == false){
    let index = Number(prompt('사용자1 번호입력(0~9):'))
    if (ttt[index] == ' ' )
        ttt[index]='O'
    else{
        index = Number(prompt('사용자1 번호입력(0~9):'))
        ttt[index]='O'
    }
    console.log(`[turn ${turn}]\n${ttt[0]} ${ttt[1]} ${ttt[2]}\n${ttt[3]} ${ttt[4]} ${ttt[5]}\n${ttt[6]} ${ttt[7]} ${ttt[8]}`)
    if (( ttt[0]=='O'&&ttt[1]=="O"&&ttt[2]=='O')||(ttt[3]=='O'&&ttt[4]=="O"&&ttt[5]=='O')||(ttt[6]=='O'&&ttt[7]=="O"&&ttt[8]=='O')||
        (ttt[0]=='O'&&ttt[3]=="O"&&ttt[6]=='O')||(ttt[1]=='O'&&ttt[4]=="O"&&ttt[7]=='O')||(ttt[2]=='O'&&ttt[5]=="O"&&ttt[8]=='O')||
        (ttt[0]=='O'&&ttt[4]=="O"&&ttt[8]=='O')||(ttt[2]=='O'&&ttt[4]=="O"&&ttt[6]=='O')||
        ( ttt[0]=='X'&&ttt[1]=="X"&&ttt[2]=='X')||(ttt[3]=='X'&&ttt[4]=="X"&&ttt[5]=='X')||(ttt[6]=='X'&&ttt[7]=="X"&&ttt[8]=='X')||
        (ttt[0]=='X'&&ttt[3]=="X"&&ttt[6]=='X')||(ttt[1]=='X'&&ttt[4]=="X"&&ttt[7]=='X')||(ttt[2]=='X'&&ttt[5]=="X"&&ttt[8]=='X')||
        (ttt[0]=='X'&&ttt[4]=="X"&&ttt[8]=='X')||(ttt[2]=='X'&&ttt[4]=="X"&&ttt[6]=='X')){
        end = true
        console.log('game end. 사용자2 승리!')
        }
    turn++
}

if (turn%2==0 && turn <10 && end == false){
    let index = Number(prompt('사용자2 번호입력(0~9):'))
    if (ttt[index] == ' ' )
        ttt[index]='X'
    else{
        index = Number(prompt('사용자2 번호입력(0~9):'))
        ttt[index]='X'
    }
    console.log(`[turn ${turn}]\n${ttt[0]} ${ttt[1]} ${ttt[2]}\n${ttt[3]} ${ttt[4]} ${ttt[5]}\n${ttt[6]} ${ttt[7]} ${ttt[8]}`)
    if (( ttt[0]=='O'&&ttt[1]=="O"&&ttt[2]=='O')||(ttt[3]=='O'&&ttt[4]=="O"&&ttt[5]=='O')||(ttt[6]=='O'&&ttt[7]=="O"&&ttt[8]=='O')||
        (ttt[0]=='O'&&ttt[3]=="O"&&ttt[6]=='O')||(ttt[1]=='O'&&ttt[4]=="O"&&ttt[7]=='O')||(ttt[2]=='O'&&ttt[5]=="O"&&ttt[8]=='O')||
        (ttt[0]=='O'&&ttt[4]=="O"&&ttt[8]=='O')||(ttt[2]=='O'&&ttt[4]=="O"&&ttt[6]=='O')||
        ( ttt[0]=='X'&&ttt[1]=="X"&&ttt[2]=='X')||(ttt[3]=='X'&&ttt[4]=="X"&&ttt[5]=='X')||(ttt[6]=='X'&&ttt[7]=="X"&&ttt[8]=='X')||
        (ttt[0]=='X'&&ttt[3]=="X"&&ttt[6]=='X')||(ttt[1]=='X'&&ttt[4]=="X"&&ttt[7]=='X')||(ttt[2]=='X'&&ttt[5]=="X"&&ttt[8]=='X')||
        (ttt[0]=='X'&&ttt[4]=="X"&&ttt[8]=='X')||(ttt[2]=='X'&&ttt[4]=="X"&&ttt[6]=='X')){
        end = true
        console.log('game end. 사용자2 승리!')
        }
    turn++
}


if (turn%2==1&&turn <10 && end == false){
    let index = Number(prompt('사용자1 번호입력(0~9):'))
    if (ttt[index] == ' ' )
        ttt[index]='O'
    else{
        index = Number(prompt('사용자1 번호입력(0~9):'))
        ttt[index]='O'
    }
    console.log(`[turn ${turn}]\n${ttt[0]} ${ttt[1]} ${ttt[2]}\n${ttt[3]} ${ttt[4]} ${ttt[5]}\n${ttt[6]} ${ttt[7]} ${ttt[8]}`)
    if (( ttt[0]=='O'&&ttt[1]=="O"&&ttt[2]=='O')||(ttt[3]=='O'&&ttt[4]=="O"&&ttt[5]=='O')||(ttt[6]=='O'&&ttt[7]=="O"&&ttt[8]=='O')||
        (ttt[0]=='O'&&ttt[3]=="O"&&ttt[6]=='O')||(ttt[1]=='O'&&ttt[4]=="O"&&ttt[7]=='O')||(ttt[2]=='O'&&ttt[5]=="O"&&ttt[8]=='O')||
        (ttt[0]=='O'&&ttt[4]=="O"&&ttt[8]=='O')||(ttt[2]=='O'&&ttt[4]=="O"&&ttt[6]=='O')||
        ( ttt[0]=='X'&&ttt[1]=="X"&&ttt[2]=='X')||(ttt[3]=='X'&&ttt[4]=="X"&&ttt[5]=='X')||(ttt[6]=='X'&&ttt[7]=="X"&&ttt[8]=='X')||
        (ttt[0]=='X'&&ttt[3]=="X"&&ttt[6]=='X')||(ttt[1]=='X'&&ttt[4]=="X"&&ttt[7]=='X')||(ttt[2]=='X'&&ttt[5]=="X"&&ttt[8]=='X')||
        (ttt[0]=='X'&&ttt[4]=="X"&&ttt[8]=='X')||(ttt[2]=='X'&&ttt[4]=="X"&&ttt[6]=='X')){
        end = true
        console.log('game end. 사용자2 승리!')
        }
    else
        console.log('비겼습니다. game end.')
    turn++
}
        

/*
012
345
678 */

/*036 147 258
048 246 */

