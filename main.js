// amstrong number or not

let number = prompt("Enter a number:");
let temp = number;
var sum = 0;
while (temp > 0) {
    var rem = temp % 10;
    sum += rem * rem * rem;
    temp = parseInt(temp / 10);
}
console.log(temp);
console.log(sum);
console.log(number);
console.log(rem);
if (sum == number) {
    console.log(+number + ",number is amstrong");
}
else {
    console.log(+number + ",number not is amstrong");
}