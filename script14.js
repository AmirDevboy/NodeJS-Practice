
//سوال
//برنامه ای بنویسید که عددی از ورودی دریافت کرده و سپس یک مربع توخالی به طول و عرض آن عدد با کاراکتر * چاپ کند

let n = 5;

let TopAndBottomRow = "";
let BodyRow = "";

for (let i = 1; i <= n - 2; i++) {
    TopAndBottomRow += "*";
    BodyRow += " ";
}

TopAndBottomRow = "*" + TopAndBottomRow + "*";
BodyRow = "*" + BodyRow + "*";


console.log(TopAndBottomRow);

for (let i = 1; i <= n - 2; i++) {
    console.log(BodyRow);
}

console.log(TopAndBottomRow);

