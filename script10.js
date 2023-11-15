
//سوال
//تابعی بنویسید که با گرفتن شماره ورودی مشخص کند که آیا شماره همراه است یا خیر؟

let Mobile = "09151511515";

function IsMobile(Mobile) {
    if (Mobile.length == 11) {
        return true;
    }
    return false;
}

console.log(IsMobile(Mobile));