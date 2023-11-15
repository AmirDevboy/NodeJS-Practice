
//سوال
//روز و ماه تاریخ جاری را دریافت کرده و مشخص کنید که چند رو از سال گذشته است؟

let Mah = 5;
let Rooz = 13;

Mah--;

let PassedDays = Mah * 30;

PassedDays += Rooz;

console.log("Passed Days Count :", PassedDays);