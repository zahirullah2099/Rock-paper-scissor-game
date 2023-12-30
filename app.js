

let choices = document.querySelectorAll(".choice"); 
choices.forEach((choice)=>{
 choice.addEventListener("click",()=>{
    const choiceId = choice.getAttribute("id");
    console.log("choice clicked", choiceId)
 })
})