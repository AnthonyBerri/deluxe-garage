const params = new URLSearchParams(window.location.search);
const carId = params.get('id');
let colorId = 1;
let selectedCar = null;



if (!carId) {
    const div = document.getElementById('iImg');
    if (div) {
        div.innerHTML = "<p>Marca não especificada na URL.</p>";
    }
} else {
    function buttonClick() {
        fetch('./reservas.json') 
            .then(response => response.json())
            .then(cars => {
                const car = cars.find(m => m.id == carId);
                selectedCar = car; // Save the car object globally

                const main = document.getElementById('iImg');
                const button1 = document.getElementById(1);
                const button2 = document.getElementById(2);
                const button3 = document.getElementById(3);

                button1.style.backgroundColor = car.cor1;
                button2.style.backgroundColor = car.cor2;
                button3.style.backgroundColor = car.cor3;
            
                if (main) {
                    if (car) {      
                        switch (colorId) {
                            case 2:
                                main.innerHTML = `
                                    <img src="${car.image2}" alt="${car.name}">  
                                `;    
                                break;
                            case 3:
                                main.innerHTML = `
                                    <img src="${car.image3}" alt="${car.name}">
                                `;
                                break;
                            default:
                                main.innerHTML = `
                                    <img src="${car.image1}" alt="${car.name}">
                                `;
                        }
                    } else {
                        div.innerHTML = `<p>Marca não encontrada</p>`; 
                    }
                }
            })
            .catch(error => {
                const div = document.getElementById('info');
                if (div) {
                    div.innerText = "Erro ao carregar os dados.";
                }
                console.error('Erro:', error);
            });
    }
}
document.getElementById('1').addEventListener('click', () => {
    colorId = 1;
    //console.log('Cor selecionada: 1', colorId);
    buttonClick();
});
document.getElementById('2').addEventListener('click', () => {
    colorId = 2;
    //console.log('Cor selecionada: 2', colorId);
    buttonClick();
});
document.getElementById('3').addEventListener('click', () => {
    colorId = 3;
    //console.log('Cor selecionada: ', colorId);
    buttonClick();
});

buttonClick();

document.getElementById('reserva-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const selectedPlan = document.querySelector('input[name="plano"]:checked');
    const planValue = selectedPlan ? selectedPlan.value : null;
    const local = document.getElementById('iLocal').value;
    const data = document.getElementById('iData').value;
    const hora = document.getElementById('iHora').value;

    const reservationData = {
        carId: carId,
        colorId: colorId,
        local: local,
        data: data,
        hora: hora,
        nome: selectedCar ? selectedCar.name : '', // Pega o nome do objeto selecionado
        plano: planValue,
        image: document.getElementById('iImg').querySelector('img').src
    };

    let garage = JSON.parse(localStorage.getItem('deluxeGarage')) || [];
    garage.push(reservationData);
    localStorage.setItem('deluxeGarage', JSON.stringify(garage));

    window.location.href = '../home/index.html';
});