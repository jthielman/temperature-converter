console.log('Let\'s convert some temps!');

const showOnPage = (divId, stringToShow) => {
    document.getElementById(divId).innerHTML = stringToShow;
}

const convertTemp = () => {
    const input = document.getElementById('numIn').value;
    const celsius = document.getElementById('celsius');
    if (celsius.checked) {
        return Math.round(10 * ((input - 32) * (5/9))) / 10;
    } else {
        return Math.round(10 * (input * (9/5) + 32)) / 10;
    }
}

const showTemp = () => {
    showOnPage('converted', convertTemp());
    tempColors();
}

const hitEnter = (e) => {
    if (e.which === 13) {
        e.preventDefault();
        showTemp();
    }
}

const clearField = () => {
    document.getElementById('numIn').value = '';
}

const tempColors = () => {
    const convertedTemp = document.getElementById('converted');
    const celsius = document.getElementById('celsius');
    if (celsius.checked) {
        if (convertedTemp.innerHTML < 0) {
            convertedTemp.className = 'cold';
        } else if (convertedTemp.innerHTML > 32){
            convertedTemp.className = 'hot';
        } else {
            convertedTemp.className = 'just-right';
        }
    } else {
        if (convertedTemp.innerHTML < 32) {
            convertedTemp.className = 'cold';
        } else if (convertedTemp.innerHTML > 90) {
            convertedTemp.className = 'hot';
        } else {
            convertedTemp.className = 'just-right';
        }
    }
}

const init = () => {
    document.getElementById('big-button').addEventListener('click', showTemp);
    document.getElementById('numIn').addEventListener('keypress', hitEnter);
    document.getElementById('clear').addEventListener('click', clearField);
}

init();
