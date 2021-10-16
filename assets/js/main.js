const turnOn = document.getElementById('turnOn');
const lampada = document.getElementById('lampada');

function lampQuebre() {
    return lampada.src.indexOf('quebrada') > -1;
}

function lampOn() {
    if (turnOn.innerHTML === 'Ligar') {
        lampada.src = 'assets/img/ligada.jpg';
        turnOn.innerHTML = 'Desligar';
    } else if (turnOn.innerHTML === 'Desligar') {
        lampada.src = 'assets/img/desligada.jpg';
        turnOn.innerHTML = 'Ligar';
    }
}

function drop() {
    if (!lampQuebre()) {
        lampada.src = 'assets/img/ligada.jpg';
        turnOn.innerHTML = 'Desligar';
    }
}

function trap() {
    if (!lampQuebre()) {
        lampada.src = 'assets/img/desligada.jpg';
        turnOn.innerHTML = 'Ligar';
    }
}

const trop = function () {
    lampada.src = 'assets/img/quebrada.jpg';
    turnOn.innerHTML = 'Quebrou';
}

turnOn.addEventListener('click', lampOn);
lampada.addEventListener('mousemove', drop);
lampada.addEventListener('mouseleave', trap);
lampada.addEventListener('dblclick', trop);