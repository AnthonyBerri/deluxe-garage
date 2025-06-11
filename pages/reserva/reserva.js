const params = new URLSearchParams(window.location.search);
const carId = params.get('id');
let colorId = 1;



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

                const main = document.getElementById('iImg');

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

document.getElementById('reservar').addEventListener('click', () => {
    const selectedPlan = document.querySelector('input[name="plano"]:checked');
    const planValue = selectedPlan ? selectedPlan.value : null;
    const reservationData = {
        carId: carId,
        colorId: colorId,
        local: document.getElementById('iLocal').value,
        data: document.getElementById('iData').value,
        hora: document.getElementById('iHora').value,
        plano: planValue,
        image: document.getElementById('iImg').querySelector('img').src
    };
    console.log('Carro reservado com sucesso!', reservationData);

    document.getElementById('reserva-form').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = '../home/index.html';
    let garage = JSON.parse(localStorage.getItem('deluxeGarage')) || [];
    garage.push(reservationData);
    localStorage.setItem('deluxeGarage', JSON.stringify(garage));
    });
 
});