const inputs = document.querySelectorAll(".angleInput");
const triangleBtn = document.querySelector("#btn");
const output1 = document.querySelector("#output");
let angle1 ,angle2,angle3;

function sumOfAngles(angle1, angle2, angle3){
    const sum =angle1+ angle2+ angle3;
   return sum;
}

function istriangle(){
angle1 = parseFloat(inputs[0].value);
angle2 =  parseFloat(inputs[1].value);
angle3 =  parseFloat(inputs[2].value);
let sum = sumOfAngles(angle1,angle2,angle3);
if(sum === 180)
output1.innerText = "YES!! These angles form a triangle 🔺.";
 else
output1.innerText = "SORRY! These angles do not form a triangle 🔺.";
}
triangleBtn.addEventListener("click",istriangle);