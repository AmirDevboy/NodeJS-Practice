
//سوال
//روز و ماه تاریخ جاری را دریافت کرده و مشخص کنید که چند رو از سال گذشته است؟
//با در نظر گرفتن تعداد روزهای دقیق هر ماه

let Mah = 5;
let Rooz = 13;

let MonthDays = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];

let PassedDays = 0;

Mah--;

for (let i = 0; i < Mah; i++) {
    PassedDays += MonthDays[i];
}
PassedDays += Rooz;

console.log("Passed Days Count :", PassedDays);