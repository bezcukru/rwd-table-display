import '../sass/style.scss';

const values = [
    { name: 'Ananas', calories: 50, fat: 0.1, carbs: 13},
    { name: 'Jabłko', calories: 52, fat: 0.2, carbs: 14},
    { name: 'Pomarańcza', calories: 47, fat: 0.1, carbs: 12},
    { name: 'Banan', calories: 88, fat: 0.3, carbs: 23},
]

const valuesContainer = document.querySelector('.app--values');

const desktopViewport = window.matchMedia("screen and (min-width: 500px)");

const drawDesktopValues = () => {
    valuesContainer.innerHTML = '';

    let table = document.createElement('table');

    let thead = document.createElement('thead');
    thead.innerHTML = "<tr><th>Nazwa</th><th>Kalorie</th><th>Tłuszcz</th><th>Węglowodany</th></tr>"
    
    let tbody= document.createElement('tbody');

    values.forEach(value => {
        let row = document.createElement('tr');
        row.innerHTML = `<td>${value.name}</td><td>${value.calories}</td><td>${value.fat}</td><td>${value.carbs}</td>`;
        tbody.appendChild(row);
    })

    table.appendChild(thead);
    table.appendChild(tbody);
    

    valuesContainer.appendChild(table)
}

drawDesktopValues();