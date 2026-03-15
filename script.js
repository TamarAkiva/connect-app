let data = []
let usedQuestions = []
let currentType = null
let currentItem = null

// Load data from JSON
async function loadData() {
  const response = await fetch("data.json")
  data = await response.json()
}

// Get filtered items by type and deep mode
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

// Show a random item
function showRandomItem() {
  if (!currentType) return
  const deepMode = document.getElementById("deepMode").checked
  const options = getFiltered(currentType, deepMode)
  const random = options[Math.floor(Math.random() * options.length)]
  usedQuestions.push(random.id)
  currentItem = random
  const card = document.getElementById("card")
  card.classList.remove("fade")
  setTimeout(() => {
    card.innerText = random.text
    card.classList.add("fade")
  }, 150)
}

// Start a mode (questions, challenges, experiences)
function startMode(type) {
  currentType = type
  showRandomItem()
}

// Next button
function nextItem() {
  showRandomItem()
}

// Save button
function saveItem() {
  if (!currentItem) return
  let saved = document.getElementById("savedItems")
  if (!saved) {
    saved = document.createElement("div")
    saved.id = "savedItems"
    saved.className = "saved"
    document.body.appendChild(saved)
  }
  const itemDiv = document.createElement("div")
  itemDiv.innerText = currentItem.text
  saved.appendChild(itemDiv)
}

// Initialize
loadData()