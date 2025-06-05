// Dados dos carros
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
        image: "../../assets/img/Series3..png",
        location: "Rio de Janeiro, RJ",
        date: "20/06/2025",
        time: "14:30",
        status: "Pendente"
    },
    {
        id: 3,
        model: "Ferrari 488",
        image: "../../assets/img/ferrari.png",
        location: "Joinville, SC",
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
        
        card.innerHTML = `
            <div class="car-image">
                <img src="${request.image}" alt="${request.model}" />
            </div>
            <div class="card-content">
                <div class="request-info">
                    <h3>${request.model}</h3>
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
                <div class="card-actions">
                    <button class="details-btn" onclick="showDetails(${request.id})">Ver Detalhes</button>
                    <button class="cancel-btn" onclick="showCancelModal(${request.id})">Cancelar</button>
                </div>
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

function showCancelModal(id) {
    const request = carRequests.find(req => req.id === id);
    if (!request) return;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content cancel-modal">
            <span class="close-modal" onclick="closeModal()">&times;</span>
            <h2>Cancelar Pedido</h2>
            <div class="modal-body">
                <div class="cancel-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#c62828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="15" y1="9" x2="9" y2="15"></line>
                        <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                </div>
                <div class="cancel-message">
                    <h3>Tem certeza que deseja cancelar este pedido?</h3>
                    <p>O pedido <strong>${request.model}</strong> será removido da sua lista.</p>
                    <p>Esta ação não pode ser desfeita.</p>
                </div>
            </div>
            <div class="modal-footer">
                <button class="danger-btn" onclick="confirmCancel(${id})">Sim, Cancelar Pedido</button>
                <button class="secondary-btn" onclick="closeModal()">Não, Manter Pedido</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
}

function confirmCancel(id) {
    const index = carRequests.findIndex(req => req.id === id);
    if (index !== -1) {
        carRequests.splice(index, 1);
        renderCards();
        closeModal();
        showNotification('Pedido cancelado com sucesso!');
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
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content add-request-modal">
            <span class="close-modal" onclick="closeModal()">&times;</span>
            <h2>Adicionar Novo Pedido</h2>
            <div class="modal-body">
                <form id="add-request-form">
                    <div class="form-group">
                        <label for="car-model">Modelo do Carro</label>
                        <select id="car-model" required>
                            <option value="">Selecione um modelo</option>
                            <option value="Porsche 911 GT3 RS">Porsche 911 GT3 RS</option>
                            <option value="BMW Series 3">BMW Series 3</option>
                            <option value="Ferrari 488">Ferrari 488</option>
                            <option value="Audi RS6 Avant">Audi RS6 Avant</option>
                            <option value="Audi TT">Audi TT</option>
                            <option value="Lamborghini Aventador">Lamborghini Aventador</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="location">Local de Retirada</label>
                        <input type="text" id="location" placeholder="Ex: São Paulo, SP" required>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="date">Data</label>
                            <input type="date" id="date" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="time">Hora</label>
                            <input type="time" id="time" required>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button class="primary-btn" id="submit-request">Adicionar Pedido</button>
                <button class="secondary-btn" onclick="closeModal()">Cancelar</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    const submitBtn = document.getElementById('submit-request');
    submitBtn.addEventListener('click', function() {
        const model = document.getElementById('car-model').value;
        const location = document.getElementById('location').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        
        if (!model || !location || !date || !time) {
            showFormError('Por favor, preencha todos os campos.');
            return;
        }
        
        const dateObj = new Date(date);
        const formattedDate = `${dateObj.getDate().toString().padStart(2, '0')}/${(dateObj.getMonth() + 1).toString().padStart(2, '0')}/${dateObj.getFullYear()}`;
        
        const newRequest = {
            id: carRequests.length + 1,
            model: model,
            image: getCarImageByModel(model),
            location: location,
            date: formattedDate,
            time: time,
            status: 'Pendente'
        };
        
        carRequests.push(newRequest);
        renderCards();
        closeModal();
        showNotification('Novo pedido adicionado com sucesso!');
    });
}

function showFormError(message) {
    let errorElement = document.querySelector('.form-error');
    
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'form-error';
        const form = document.getElementById('add-request-form');
        form.insertAdjacentElement('beforebegin', errorElement);
    }
    
    errorElement.textContent = message;
    errorElement.style.opacity = '1';
    
    setTimeout(() => {
        errorElement.style.opacity = '0';
    }, 3000);
}

function getCarImageByModel(model) {
    const images = {
        'Porsche 911 GT3 RS': '../../assets/img/porsche.png',
        'BMW Series 3': '../../assets/img/Series3.png',
        'Ferrari 488': '../../assets/img/ferrari.png',
        'Audi RS6 Avant': '../../assets/img/RS6Avant.png',
        'Audi TT': '../../assets/img/TT.png',
        'Lamborghini Aventador': '../../assets/img/lamborghiniLogo.png'
    };

    return images[model] || 'assets/img/porsche.png';
}
document.addEventListener('DOMContentLoaded', () => {
    renderCards();

    document.querySelector('.login-btn').addEventListener('click', toggleLogin);
    document.querySelector('.add-btn').addEventListener('click', addNewRequest);
});