const quizForm = document.querySelector(".quiz-form");
const button = document.querySelector("#quiz-btn");
const output =  document.querySelector("#output")

const answers = ["3","90","right angled","Geometry","SSA"]; //array of correct answers

function calculateScore(){
    let score =0;
    let index =0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        // console.log(value);
        if(value === answers[index]){
            score = score+1;
        }
        index = index +1;
    }
    // console.log(score);
    output.innerText ="Your score is " + score;
}



button.addEventListener("click", calculateScore);