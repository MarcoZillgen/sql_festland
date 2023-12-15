const history = document.getElementById("history")

function addAction(type, message) {
  /**
   * @returns {void}
   * @param {"success" | "danger"} type
   * @param {string} message
  */

  const alert = document.createElement("div")
  alert.classList = `alert alert-${type}`
  alert.setAttribute("role", "alert")
  alert.innerText = message
}

export {
  history,
  addAction
}