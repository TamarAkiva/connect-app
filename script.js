let data = []
let usedQuestions = []

async function loadData() {
  const response = await fetch("data.json")
  data = await response.json()
}

function getFiltered(type, deepMode=false) {

  let filtered = data.filter(item => item.type === type)

  if (deepMode) {
    filtered = filtered.filter(item =>
      item.category === "self_reflection" ||
      item.category === "growth" ||
      item.category === "relationships"
    )
  }

  filtered = filtered.filter(item => !usedQuestions.includes(item.id))

  if (filtered.length === 0) {
    usedQuestions = []
    filtered = data.filter(item => item.type === type)
  }

  return filtered
}

function showRandom(type) {

  const deepMode = document.getElementById("deepMode").checked

  const options = getFiltered(type, deepMode)

  const random = options[Math.floor(Math.random() * options.length)]

  usedQuestions.push(random.id)

  const card = document.getElementById("card")

  card.classList.remove("fade")

  setTimeout(() => {
    card.innerText = random.text
    card.classList.add("fade")
  }, 150)

}

loadData()