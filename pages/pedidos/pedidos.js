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
                    <button class="details-btn" onclick="showDetails('${request.id}')">Ver Detalhes</button>
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });

}

renderCards();