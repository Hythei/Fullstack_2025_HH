// Käytetään JS scriptiä HTML taulukon luomiseen
// Tämä muodostettiin yhteistyössä Le Chatin kanssa

fetch('/api/json')
    .then(response => response.json())
    .then(data => {
        // taulukon elementit
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');
        
        // Headerit
        if (data.length > 0) {
            const headerRow = document.createElement('tr');
            Object.keys(data[0]).forEach(key => {
                const th = document.createElement('th');
                th.textContent = key;
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);
        }
        
        // rivit
        data.forEach(item => {
            const row = document.createElement('tr');
            Object.values(item).forEach(value => {
                const td = document.createElement('td');
                td.textContent = value;
                row.appendChild(td);
            });
            tbody.appendChild(row);
        });
        
        // kokoonpano
        table.appendChild(thead);
        table.appendChild(tbody);
        document.getElementById('JSON_table').appendChild(table);
    })
    .catch(error => {
        console.error('Error fetching JSON data:', error);
        document.getElementById('JSON_table').textContent = 'Error loading data';
});