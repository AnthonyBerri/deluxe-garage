const carRequests = [
    {
        id: 1,
        model: "Porsche 911 GT3 RS",
        image: "../../assets/img/porsche.png",
        location: "São Paulo, SP",
        date: "15/06/2025",
        time: "09:00",
        status: "Confirmado"
    },
    {
        id: 2,
        model: "BMW Series 3",
        image: "../../assets/img/Series3.png",
        location: "Rio de Janeiro, RJ",
        date: "20/06/2025",
        time: "14:30",
        status: "Pendente"
    },
    {
        id: 3,
        model: "Ferrari 488",
        image: "../../assets/img/ferrari.png",
        location: "Belo Horizonte, MG",
        date: "25/06/2025",
        time: "10:15",
        status: "Confirmado"
    }
];

function getCarBrand(model) {
    if (model.includes('Porsche')) return 'PORSCHE';
    if (model.includes('BMW')) return 'BMW';
    if (model.includes('Ferrari')) return 'FERRARI';
    if (model.includes('Audi')) return 'AUDI';
    if (model.includes('Lamborghini')) return 'LAMBORGHINI';
    if (model.includes('Mercedes')) return 'MERCEDES';
    return 'CAR'; 
}

function renderCards() {
    const container = document.getElementById('requests-container');
    container.innerHTML = '';

    if (carRequests.length === 0) {
        container.innerHTML = '<div class="no-requests">Nenhum pedido encontrado</div>';
        return;
    }

    carRequests.forEach(request => {
        const card = document.createElement('div');
        card.className = 'request-card';
     
        const brandName = getCarBrand(request.model);
        
        card.innerHTML = `
            <div class="car-image">
                <img src="${request.image}" alt="${request.model}" class="car-img"/>
            </div>
            ...
            <div class="card-content">
                <div class="request-info">
                   <h3>${request.model}</h3>
                   <small>${brandName}</small>
                    <p>${request.location}</p>
                    <div class="status ${request.status.toLowerCase()}">${request.status}</div>
                </div>
                <div class="date-time-headers">
                    <div class="header-item">
                        <h4>Data</h4>
                        <p>${request.date}</p>
                    </div>
                    <div class="header-item">
                        <h4>Hora</h4>
                        <p>${request.time}</p>
                    </div>
                </div>
            </div>
            <div class="card-actions">
                <button class="details-btn" onclick="showDetails(${request.id})">Ver Detalhes</button>
                <button class="cancel-btn" onclick="cancelRequest(${request.id})">Cancelar</button>
            </div>
        `;
        
        container.appendChild(card);
    });
}

function showDetails(id) {
    const request = carRequests.find(req => req.id === id);
    if (!request) return;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal" onclick="closeModal()">&times;</span>
            <h2>Detalhes do Pedido</h2>
            <div class="modal-body">
                <img src="${request.image}" alt="${request.model}" class="modal-image">
                <div class="details-grid">
                    <div class="detail-item">
                        <strong>Modelo:</strong>
                        <span>${request.model}</span>
                    </div>
                    <div class="detail-item">
                        <strong>Local:</strong>
                        <span>${request.location}</span>
                    </div>
                    <div class="detail-item">
                        <strong>Data:</strong>
                        <span>${request.date}</span>
                    </div>
                    <div class="detail-item">
                        <strong>Hora:</strong>
                        <span>${request.time}</span>
                    </div>
                    <div class="detail-item">
                        <strong>Status:</strong>
                        <span class="status ${request.status.toLowerCase()}">${request.status}</span>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="primary-btn">Modificar Pedido</button>
                <button class="secondary-btn" onclick="closeModal()">Fechar</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
}

function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        document.body.removeChild(modal);
    }
}

function cancelRequest(id) {
    if (confirm('Tem certeza que deseja cancelar este pedido? Ele será removido da sua lista.')) {
        const index = carRequests.findIndex(req => req.id === id);
        if (index !== -1) {
            carRequests.splice(index, 1);
            renderCards();
            showNotification('Pedido cancelado com sucesso!');
        }
    }
}

function toggleLogin() {
    const btn = document.querySelector('.login-btn');
    if (btn.textContent === 'Login') {
        btn.textContent = 'Logout';
        showNotification('Login realizado com sucesso!');
    } else {
        btn.textContent = 'Login';
        showNotification('Logout realizado com sucesso!');
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function addNewRequest() {
    const model = prompt('Digite o modelo do carro (ex: Porsche 911, BMW Series 3, Ferrari 488):');
    if (!model) return;
    
    const location = prompt('Digite o local de retirada:');
    if (!location) return;
    
    const date = prompt('Digite a data (DD/MM/AAAA):');
    if (!date) return;
    
    const time = prompt('Digite a hora (HH:MM):');
    if (!time) return;
    
    const newRequest = {
        id: carRequests.length + 1,
        model: model,
        image: getCarImageByModel(model),
        location: location,
        date: date,
        time: time,
        status: 'Pendente'
    };
    
    carRequests.push(newRequest);
    renderCards();
    showNotification('Novo pedido adicionado com sucesso!');
}

function getCarImageByModel(model) {
    const images = {
        'Porsche 911': 'assets/img/porsche.png',
        'BMW Series 3': 'assets/img/Series3.png',
        'Ferrari 488': 'assets/img/ferrari.png',
        'Audi RS6 Avant': 'assets/img/RS6Avant.png',
        'Audi TT': 'assets/img/TT.png',
        'Audi A4': 'assets/img/audi.png',
        'Lamborghini Aventador': 'assets/img/lamborghiniLogo.png'
    };
    
    for (const [key, value] of Object.entries(images)) {
        if (model.toLowerCase().includes(key.toLowerCase().split(' ')[0])) {
            return value;
        }
    }
    
    return 'assets/img/porsche.png'; 
}

document.addEventListener('DOMContentLoaded', () => {
    renderCards();
    document.querySelector('.login-btn').addEventListener('click', toggleLogin);
 
    const mainContent = document.querySelector('.main-content');
    const addButton = document.createElement('button');
    addButton.textContent = 'Adicionar Novo Pedido';
    addButton.className = 'primary-btn';
    addButton.style.marginBottom = '24px';
    addButton.onclick = addNewRequest;
    
    mainContent.insertBefore(addButton, document.querySelector('.requests-container'));
});