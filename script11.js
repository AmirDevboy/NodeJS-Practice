
//سوال
//تابعی بنویسید که متنی را از ورودی دریافت میکند و کلمات موجود در آرایه را در متن با *** جایگزین میکند؟

let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius vel pharetra vel turpis nunc. Imperdiet nulla malesuada pellentesque elit eget gravida. Id faucibus nisl tincidunt eget nullam non nisi est sit. Et netus et malesuada fames ac turpis. Tellus mauris a diam maecenas sed enim ut sem. In ante metus dictum at tempor commodo. Aliquam sem fringilla ut morbi tincidunt augue interdum. Ornare massa eget egestas purus viverra accumsan in nisl. Sit amet est placerat in. Diam phasellus vestibulum lorem sed risus ultricies. Sed id semper risus in. Urna nunc id cursus metus aliquam. Dolor magna eget est lorem ipsum. Purus gravida quis blandit turpis cursus in hac. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod. Arcu ac tortor dignissim convallis. Cursus turpis massa tincidunt dui ut ornare. Commodo ullamcorper a lacus vestibulum.";

function ReplaceWords(text) {

    let words = ["sed", "In", "Lorem"];
    
    words.forEach(word => {
        text = text.replaceAll(word, "***");
    });
    return text;

}

console.log(ReplaceWords(text));