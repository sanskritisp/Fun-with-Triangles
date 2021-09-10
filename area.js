const inputs = document.querySelectorAll(".sides");
const button = document.querySelector("#btn");
const output = document.querySelector("#output");

function calculateArea(){
    const ans = BaseHeight(Number(inputs[0].value),(inputs[1].value));
    const area = 0.5 * ans;
   output.innerText = "The area of triangle is " + area + "cm square.";
}

function BaseHeight(a,b){
    let product = a*b;
    return product;}


button.addEventListener("click", calculateArea);