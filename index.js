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

function multiply(num, num2) {
    return num * num2
}
console.log(multiply(3, 10))


function add(num,num2){
    console.log("--6--")
    if (num !== num2){
        return (num + num2)
    }
    
    return (num + num2) * 3
    
};
console.log(add(2, 4))     //returns 6
console.log(add(10, -5))   //returns 5
console.log(add(3, 7.5))   //returns 10.5
console.log(add(5, 5))     //returns 30 because the sum of 5 + 5 = 10 and 30 is triple that
console.log(add(6, 6))     //returns 36 because the sum of 6 + 6 = 12 and 36 is triple that
