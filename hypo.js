const inputs = document.querySelectorAll(".sides");
const button = document.querySelector("#btn");
const output =  document.querySelector("#output");

function calculateHypotenuse()
{
  const result = calculateSumOfSquares(Number(inputs[0].value), (inputs[1].value));
   const finalResult = Math.sqrt(result);
 output.innerText = "The length of hypotenuse is "+ finalResult + " cm.";
}

function calculateSumOfSquares(a,b){
 let sum = a*a + b*b;
return sum;
}


button.addEventListener("click",calculateHypotenuse);


