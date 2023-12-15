const cardTitle = document.getElementById("cardTitle")
const cardText = document.getElementById("cardText")
const cardBtn = document.getElementById("cardBtn")

function editCard(title, text, btnText, sqlAction) {
  /**
   * @returns {void}
   * @param {string} title
   * @param {string} text
   * @param {string} btnText
   * @param {() => Object} sqlAction
  */

  cardTitle.innerText = title
  cardText.innerText = text
  cardBtn.innerText = btnText
  cardBtn.onclick = sqlAction
}

export {
  cardTitle,
  cardText,
  cardBtn,
  editCard
}