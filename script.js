function executeSQL() {
    var sqlCode = document.getElementById('sql-input').value;
    if (sqlCode.trim() !== '') {

        var outputDiv = document.getElementById('sql-output');
        outputDiv.innerHTML = "<p><strong>You:</strong><br>" + sqlCode + "</p>" + outputDiv.innerHTML;
        document.getElementById('sql-input').value = '';

    } else {
        
        alert('Please enter SQL code before executing.');
    }
}
