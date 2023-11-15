
//سوال
//تابعی بنویسید که متن نمونه را از ورودی گرفته نام و نام خانوادگی و نمرات دانشجو را در یک آبجکت گذاشته و نمایش میدهد؟

let text = "Amir-Yaghoobian-points.20.18.17.16";

function SplitInfo(text) {
    let info = text.split('-');
    let points = info[2].split('.');

    let person = {
        name: info[0],
        family: info[1],
        points: []
    }

    for (let i = 1; i < points.length; i++) {
        person.points.push(points[i]);
    }

    return person;
}

console.log(SplitInfo(text));
console.log(SplitInfo(text).points);