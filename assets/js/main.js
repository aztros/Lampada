// vanilla js
// pega o botão com o id turnOn
const turnOn = document.querySelector('#turnOn');
// pega a div com a classe lampadas
const lampadas = document.querySelector('.lampadas');
// ao clicar ou tocar no botão troca a classe da div com a classe lampadas
turnOn.addEventListener('click', () => {
    // se não tiver a classe ops troca a classe
    if (!turnOn.classList.contains('ops')) {
        // troca a classe da div com a classe lampadas para on
        lampadas.classList.toggle('on');
        //  troca a classe do botão
        turnOn.classList.toggle('ligado');
        turnOn.classList.toggle('desligado');
    }

});
// ao clicar na lâmpada aparece uma lampada quebrada no lugar das outras
lampadas.addEventListener('click', () => {
    //troca a imagem da lampada desligada e lampada ligada para lampada quebrada 
    //  caso a imagem da lampada quebrada assets/img/quebrada.jpg já exista, fazer nada
    if (lampadas.querySelector('.lampada').src === 'assets/img/quebrada.jpg') {
        // não faz nada
    } else {
        // troca a imagem da lampada desligada e lampada ligada para lampada quebrada
        lampadas.querySelector('.lampada.ligada').src = 'assets/img/quebrada.jpg';
        lampadas.querySelector('.lampada.desligada').src = 'assets/img/quebrada.jpg';
        turnOn.classList.remove('ligado');
        turnOn.classList.remove('desligado');
        // adiciona a classe ops ao botão se ele ainda não tem essa classe
        if (!turnOn.classList.contains('ops')) {
            turnOn.classList.add('ops');
        }
    }

});