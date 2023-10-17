//------------------------------------
// 
//               Boolean
// 
//------------------------------------

console.log("%c Intro-Level-1_14", "color: blue; background-color: gold");

console.log(Boolean(100));
console.log(Boolean(3.14));
console.log(Boolean(-15));
console.log(Boolean("hello"));
console.log(Boolean("false"));
console.log(Boolean(1+7+3.14));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(false));

//------------------------------------
// 
//        Comparison Operatoren
// 
//------------------------------------  

console.log("%c Intro-Level-1_15", "color: blue; background-color: gold");

const num = 5;
const anotherNum = 8;

console.log(num == anotherNum);
console.log(num > anotherNum);
console.log(num < anotherNum);
console.log(num >= anotherNum);
console.log(num <= anotherNum);

console.log(num == "5");
console.log(num != 8);
console.log(num != "5"); //false, weil der equal operator Datentypen beim Vergleich nicht berücksichtigt

//------------------------------------
// 
//            DOM_Level_1_1
// 
//------------------------------------  

// document.write("<h1>!!!Ab hier DOM_Level_1_1!!!</h1>");
// document.write("<h1>Hallo World!</h1>");
// document.write("<p>Have a nice day!</p>");

// const myText = "Hallo again";

// document.write(myText + "<br>");
// document.write("<br>");
// let firstName = "Yasin";
// let lastName = "Yildirim";

// document.write("Name: " + firstName + "<br>");
// document.write("Nachname: " + lastName + "<br>");
// document.write("Hi, ich bin " + firstName + " " + lastName);

//------------------------------------
// 
//            DOM_Level_1_2
// 
//------------------------------------

// Methode --> querySelector
// const headline = document.body.querySelector("#info");
// headline.innerHTML = "<h1>Hallo World</h1><h2>How are you?</h2>";

// Methode --> getElementById
// document.getElementById('info').innerHTML = "<h1>Hallo World</h1><h2>How are you?</h2>";

// document.getElementById('container').innerHTML = "<p>start of the element</p>";
// document.write("<p>end of the element</p>");

// ---------------------------------------------------------------------------------
// Variante 2: Methode --> append mit dem += Operator, um in JS ein Element in einem bestehenden Element zu erzeugen:
//                                  
// const body = document.body;
// body.innerHTML += "<div id='container'>placeholder</div>";
// const container = document.body.querySelector("#container");
// container.innerHTML = "<p>start of the element</p>";
// ---------------------------------------------------------------------------------

//------------------------------------
// 
//            DOM_Level_1_3
// 
//------------------------------------

// const gallery = document.querySelector("#gallery");

// gallery.innerHTML = '<figure><img src="https://picsum.photos/600/300?random=1" alt="Random Pic 1" /><figcaption>Fig.1</figcaption></fiure>'

// gallery.innerHTML += '<figure><img src="https://picsum.photos/600/300?random=2" alt="Random Pic 2" /><figcaption>Fig.2</figcaption></figure>'

// gallery.innerHTML += '<figure><img src="https://picsum.photos/600/300?random=3" alt="Random Pic 3" /><figcaption>Fig.3</figcaption></figure>'

//------------------------------------
// 
//            DOM_Level_1_5
// 
//------------------------------------

const showCurrentUrl = document.getElementById('url_text');
const buttonClicked = document.getElementById('url_button').onclick = function() {getCurrentURL()};

function getCurrentURL()
{
    showCurrentUrl.textContent += window.location.href;
} 

