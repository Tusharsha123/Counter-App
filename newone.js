
// Get Buttons
let incBtn = document.getElementById("inc");
let decBtn = document.getElementById("dec");

// button styling 
incBtn.style.padding = "11px";
decBtn.style.padding = "11px";

// getting paragraphs
let paraone= document.getElementById("ipara");
let paratwo= document.getElementById("dpara");

// creating div's
let h1 = document.querySelector("h1");
let div = document.querySelector("div");
let divone = document.createElement("div");
document.body.appendChild(divone);
divone.appendChild(div);

// div styling
divone.style.backgroundColor="#eff3f7";
divone.style.width = "500px";
divone.style.height= "400px";
divone.style.marginTop ="200px";
divone.style.justifyContent = "center";
divone.style.position = "relative";
divone.style.left = "500px";
divone.style.left = "500px";
div.style.width = "300px";
div.style.height = "200px";
div.style.alignItems = "center";
div.style.justifyContent = "center";
div.style.margin = "auto";
div.style.marginTop = "200px";
div.style.backgroundColor = "white";
div.style.textAlign = "center";
div.style.border = "1px solid #d3d4d5";
div.style.position = "relative";
div.style.bottom = "-150px";
div.style.left = "-50px"
h1.style.backgroundColor = "white";

// counter logic
let counter = 0;
let clicksOnIncrement = 0;
let clicksOnDecrement = 0;
h1.innerText = `${counter}`;

// function to increase count
function increase(){
    counter++;
    clicksOnIncrement++;
    h1.innerText = `${counter}`;
    paraone.innerText = `clicks on increment : ${clicksOnIncrement}`;
};

// function to decrease count
function decrease(){
    if (counter>0){
     counter--;
     h1.innerText = `${counter}`;}
     clicksOnDecrement++;
    paratwo.innerText = `clicks on decrement : ${clicksOnDecrement}`;
};

// Attach onclick events
incBtn.onclick = increase;
decBtn.onclick = decrease;













