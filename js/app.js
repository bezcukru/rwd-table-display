import '../sass/style.scss';

const values = [
    { name: 'Ananas', calories: 50, fat: 0.1, carbs: 13},
    { name: 'Jabłko', calories: 52, fat: 0.2, carbs: 14},
    { name: 'Pomarańcza', calories: 47, fat: 0.1, carbs: 12},
    { name: 'Banan', calories: 88, fat: 0.3, carbs: 23},
]

const valuesContainer = document.querySelector('.app--values');

const desktopViewport = window.matchMedia('screen and (min-width: 500px)');

const drawMobileValues = () => {
    valuesContainer.innerHTML = '';

    let list = document.createElement('ul');

    values.forEach(value => {
        let element = document.createElement('li');

        let name = document.createElement('div');
        name.innerHTML = `<strong>Nazwa: </strong>${value.name}`;
        let calories = document.createElement('div');
        calories.innerHTML = `<strong>Kalorie: </strong>${value.calories}`;
        let fat = document.createElement('div');
        fat.innerHTML = `<strong>Tłuszcze: </strong>${value.fat} g`;
        let carbs = document.createElement('div');
        carbs.innerHTML = `<strong>Węglowodany: </strong>${value.carbs} g`;

        element.appendChild(name);
        element.appendChild(calories);
        element.appendChild(fat);
        element.appendChild(carbs);

        list.appendChild(element);
    })

    valuesContainer.appendChild(list);
}

const drawDesktopValues = () => {
    valuesContainer.innerHTML = '';

    let table = document.createElement('table');

    let thead = document.createElement('thead');
    thead.innerHTML = '<tr><th>Nazwa</th><th>Kalorie</th><th>Tłuszcz (g)</th><th>Węglowodany (g)</th></tr>';
    
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

//drawDesktopValues();

drawMobileValues();