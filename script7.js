
//سوال
//برنامه ای بنویسید که زمان را به ثانیه گرفته و مشخص کند چند ساعت، دقیقه و ثانیه است؟

let Second = 5600;

let Hour = Math.floor(Second / 3600);
Second = Second % 3600;

let Minute = Math.floor(Second / 60);
Second = Second % 60;

console.log("Hour :", Hour);
console.log("Minute :", Minute);
console.log("Second :", Second);