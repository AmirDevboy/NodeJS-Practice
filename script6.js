
//سوال
// آرایه ای از اعداد گرفته و از بین آنها min و max را به دست آورید؟

let Numbers = [14, 2, 55, 63, 80, 90, 7, 19, 32, 81, 95, 150];

let Min = Numbers[0];
let Max = Numbers[0];

for (let i = 1; i < Numbers.length; i++) {
    if (Numbers[i] > Max) {
        Max = Numbers[i];
    }
    if (Numbers[i] < Min) {
        Min = Numbers[i];
    }
}

console.log("Max Number is :", Max);
console.log("Min Number is :", Min);