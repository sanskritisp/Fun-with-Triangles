const inputs = document.querySelectorAll(".angleInput");
// console.log(inputs);
const triangleBtn = document.querySelector("#btn");
// console.log(triangleBtn);
const output1 = document.querySelector("#output");
// console.log(output1);
let angle1 ,angle2,angle3;



function sumOfAngles(angle1, angle2, angle3){
    const sum =angle1+ angle2+ angle3;
   return sum;
}

function istriangle(){
angle1 = parseFloat(inputs[0].value);
angle2 =  parseFloat(inputs[1].value);
angle3 =  parseFloat(inputs[2].value);
// console.log(angle1);
// console.log(angle2);
// console.log(angle3);
let sum = sumOfAngles(angle1,angle2,angle3);
// console.log(sum);
if(sum === 180)
output1.innerText = "YES!! These angles form a triangle.";
 else
output1.innerText = "SORRY! You choose the wrong angles.";

    
    

}

triangleBtn.addEventListener("click",istriangle);