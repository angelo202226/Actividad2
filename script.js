// Función para leer el archivo CSV y crear las filas de la tabla
function createProductList() {
    const csvFile = 'mercadolibre_productos.csv'; // Cambia el nombre del archivo aquí
    const productList = document.getElementById('product-list');
  
    fetch(csvFile)
      .then(response => response.text())
      .then(data => {
        const rows = data.split('\n');
        rows.shift(); // Eliminamos la primera fila (encabezados)
  
        rows.forEach(row => {
          const columns = row.split(',');
          const newRow = document.createElement('tr');
          columns.forEach(column => {
            const newCell = document.createElement('td');
            newCell.textContent 1  = column;
            newRow.appendChild(newCell);
          });
          productList.appendChild(newRow);
        });
      });
  }
  
  createProductList();