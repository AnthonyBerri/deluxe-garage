function clearGarageData() {
    localStorage.removeItem('deluxeGarage');
}

function loadGarageData() {
    const garage = JSON.parse(localStorage.getItem('deluxeGarage')) || [];
    return garage;
}

function getAllRequests() {
    const garageData = loadGarageData();
    
    const garageRequests = garageData.map((car, index) => ({
        id: `garage_${index}`,
        image: car.image,
        local: car.local,
        data: car.data,
        nome: car.nome,
        hora: car.hora,
        plano: car.plan
    }));
    
    return garageRequests;
}

function renderCards() {
    const container = document.getElementById('requests-container');
    const allRequests = getAllRequests();
    
    container.innerHTML = '';

    if (allRequests.length === 0) {
        const container = document.getElementById('requests-container');
        container.innerHTML = `
        <div class="empty-garage">
            <h3 class="empty-title">Nenhum pedido encontrado</h3>
        </div>
        `;
        return;
    }

    // updateGarageStats(allRequests);

    allRequests.forEach((request, index) => {
        const card = document.createElement('div');
        card.className = 'request-card';
    
        if (request.isFromGarage) {
            card.classList.add('garage-item');
        }
        
        card.innerHTML = `
            <div class="car-image">
                <img src="${request.image}"/>
            </div>
            <div class="card-content">
                <div class="request-info">
                    <h3>${request.nome} REQUEST</h3>
                    <p>${request.local}</p>
                    ${request.plano ? `<div class="plan-badge">titulo - 1999</div>` : ''}
                </div>
                <div class="date-time-headers">
                    <div class="header-item">
                        <h4>Data</h4>
                        <p>${request.data}</p>
                    </div>
                    <div class="header-item">
                        <h4>Hora</h4>
                        <p>${request.hora}</p>
                    </div>
                </div>
                <div class="card-actions">
                    <button class="cancel-btn" onclick="cancelRequest('${request.id}')">Cancelar Pedido</button>
                    <button class="details-btn" onclick="showDetails('${request.id}')">Ver Detalhes</button>
                </div>
                <div id="details-container" class="details-container">
                </div>
                
            </div>
        `;
        
        container.appendChild(card);
    });

}

showDetails = (id) => {
    const garageData = loadGarageData();
    const request = garageData.find(car => car.id === id);
    console.log('id', id);
    if (request) {
        const detailsContainer = document.getElementById('details-container');
        detailsContainer.innerHTML = `
            <h2>Detalhes do Pedido</h2>
            <img src="${request.image}" alt="${request.nome}">
            <p><strong>Nome:</strong> ${request.nome}</p>
            <p><strong>Local:</strong> ${request.local}</p>
            <p><strong>Data:</strong> ${request.data}</p>
            <p><strong>Hora:</strong> ${request.hora}</p>
            <p><strong>Plano:</strong> ${request.plano}</p>
        `;
        detailsContainer.style.display = 'block';
    }
}

cancelRequest = (id) => {
    const garageData = loadGarageData();
    const requestIndex = garageData.findIndex(car => car.id === id);
    if (requestIndex !== `garage_${id}`) {
        garageData.splice(requestIndex, 1);
        localStorage.setItem('deluxeGarage', JSON.stringify(garageData));
        renderCards();
    } else {
        console.error('Pedido não encontrado:', id);
    }
}

renderCards();