
//سوال
//برنامه ای بنویسید که یک عدد دریافت کرده و جدول ضرب را تا آن عدد چاپ کند؟

let num = 6;

for (let i = 1; i <= num; i++) {
    let row = "";
    for (let k = 1; k <= num; k++) {
        row += (i * k) + " ";
    }
    console.log(row);
}