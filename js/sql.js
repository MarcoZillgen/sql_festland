const inputSql = document.getElementById("inputSql")
const submitSql = document.getElementById("submitSql")

async function submitSqlAction(sqlCommand = null) {
  /**
   * @returns {Object}
   * @param {string | null} sqlCommand
  */

  if (sqlCommand === null) sqlCommand = inputSql.value

  const response = await fetch("php/sql.php", {
    method: "POST",
    body: JSON.stringify({
      sql: sqlCommand
    })
  })

  return await response.json()
}