//Code your solutions in this file

function fiveToOneHundred() {
    for (let i = 5; i <= 100; i++) {
        console.log(i)
    }
}
fiveToOneHundred()

function multiplesOfThree() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i)
        }
    }
}
multiplesOfThree()
function multiplesOfThreeOrFive() {
    for(let i = 1; i <= 100; i++) {
        if (i % 3 === 0 || i % 5 === 0)
        console.log(i)
    }
}
console.log('Q3 ------')
multiplesOfThreeOrFive()

function untilNum(num){
 for (let i = 1; i <= num; i++){
     console.log(i)
 }
}
untilNum(8)
