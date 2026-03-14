let questions = []

fetch("questions.json")

.then(response => response.json())

.then(data => {

questions = data

})

function nextQuestion(){

const random = Math.floor(Math.random()*questions.length)

document.getElementById("card").innerText = questions[random]

}