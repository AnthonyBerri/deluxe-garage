document.addEventListener('DOMContentLoaded', function() {
    const plansData = {
        vip: {
            title: "Plano VIP",
            price: "R$ 2.500/dia",
            features: [
                "🏆 Atendimento personalizado 24h",
                "🚗 Entrega e retirada em domicílio",
                "🛡️ Seguro premium total",
                "⛽ Combustível incluso",
                "🧽 Lavagem completa incluída",
                "📱 Suporte via WhatsApp exclusivo",
                "🎯 Quilometragem ilimitada"
            ]
        },
        enterprise: {
            title: "Plano Enterprise",
            price: "R$ 1.800/dia",
            features: [
                "💼 Ideal para empresários",
                "🚗 Entrega no local desejado",
                "🛡️ Seguro contra terceiros",
                "📋 Nota fiscal para empresas",
                "🔧 Assistência 24h",
                "📱 Suporte comercial",
                "📊 Relatório de uso"
            ]
        },
        deluxe: {
            title: "Plano Deluxe",
            price: "R$ 1.200/dia",
            features: [
                "✨ Experiência premium",
                "🚗 Retirada na loja",
                "🛡️ Seguro básico incluído",
                "⛽ Tanque cheio na entrega",
                "🔧 Suporte durante horário comercial",
                "📱 Atendimento via telefone",
                "🎯 Até 200km/dia inclusos"
            ]
        }
    };

    const colorButtons = document.querySelectorAll('.color-btn');
    const carImage = document.querySelector('#carImage');
    const carName = document.querySelector('.car-name');
    
    colorButtons.forEach(button => {
        button.addEventListener('click', function() {
            colorButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const color = this.getAttribute('data-color');
            updateCarDisplay(color);
        });
    });
    
    function updateCarDisplay(color) {
        const colorConfig = {
            white: {
                name: 'Porsche 911 - Branco Pérola',
                textColor: '#3498db',
                shadowColor: 'rgba(52, 152, 219, 0.4)',
                gradient: 'linear-gradient(45deg, #3498db, #2980b9)',
                borderColor: '#2980b9'
            },
            black: {
                name: 'Porsche 911 - Preto Fosco',
                textColor: '#2c2c2c',
                shadowColor: 'rgba(44, 44, 44, 0.5)',
                gradient: 'linear-gradient(45deg, #2c3e50, #34495e)',
                borderColor: '#34495e'
            },
            red: {
                name: 'Porsche 911 - Vermelho Racing',
                textColor: '#c0392b',
                shadowColor: 'rgba(192, 57, 43, 0.4)',
                gradient: 'linear-gradient(45deg, #e74c3c, #c0392b)',
                borderColor: '#c0392b'
            }
        };
        
        const config = colorConfig[color];
        
        carName.textContent = config.name;
        carName.style.color = config.textColor;
        carName.style.textShadow = `2px 2px 4px ${config.shadowColor}`;
        carName.style.background = config.gradient;
        carName.style.webkitBackgroundClip = 'text';
        carName.style.webkitTextFillColor = 'transparent';
        carName.style.backgroundClip = 'text';
        carName.style.fontWeight = 'bold';
        carName.style.transition = 'all 0.5s ease';
        carName.style.border = `2px solid ${config.borderColor}`;
        carName.style.borderRadius = '12px';
        carName.style.padding = '10px 20px';
        
        carImage.style.transform = 'scale(0.95)';
        carImage.style.filter = 'brightness(0.8)';
        
        setTimeout(() => {
            carImage.style.transform = 'scale(1)';
            carImage.style.filter = 'brightness(1)';
        }, 200);
        
        carName.style.animation = 'colorGlow 0.8s ease-in-out';
    }
    
    const planItems = document.querySelectorAll('.plan-item');
    
    planItems.forEach(item => {
        item.addEventListener('click', function() {
            const planType = this.getAttribute('data-plan');
            
            if (this.classList.contains('selected')) {
                showPlanDetails(planType);
            } else {
                planItems.forEach(plan => plan.classList.remove('selected'));
                this.classList.add('selected');
            }
        });
    });
    
    function showPlanDetails(planType) {
        const plan = plansData[planType];
        const modal = document.getElementById('planModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalContent = document.getElementById('modalContent');
        
        modalTitle.textContent = plan.title;
        
        let featuresHTML = `
            <div class="plan-details">
                <div class="plan-price-big">${plan.price}</div>
                <h4>Benefícios inclusos:</h4>
                <ul class="features-list">
        `;
        
        plan.features.forEach(feature => {
            featuresHTML += `<li>${feature}</li>`;
        });
        
        featuresHTML += `
                </ul>
                <div class="plan-note">
                    <strong>💡 Dica:</strong> Clique em "Agendar" para confirmar sua reserva com este plano!
                </div>
            </div>
        `;
        
        modalContent.innerHTML = featuresHTML;
        modal.style.display = 'block';
    }
    
    const cancelBtn = document.querySelector('.btn-cancel');
    cancelBtn.addEventListener('click', function() {
        document.getElementById('cancelModal').style.display = 'block';
    });
    
    const scheduleBtn = document.querySelector('.btn-schedule');
    
    scheduleBtn.addEventListener('click', function() {
        const local = document.getElementById('local').value;
        const data = document.getElementById('data').value;
        const hora = document.getElementById('hora').value;
        const selectedPlan = document.querySelector('.plan-item.selected');
        const selectedColor = document.querySelector('.color-btn.active').getAttribute('data-color');
        
        if (!local || !data || !hora) {
            showErrorMessage('Por favor, preencha todos os campos obrigatórios!');
            return;
        }
        
        if (!selectedPlan) {
            showErrorMessage('Por favor, selecione um plano!');
            return;
        }
        
        saveToGarage(local, data, hora, selectedPlan, selectedColor);
    });
    
    function saveToGarage(local, data, hora, selectedPlan, selectedColor) {
        const planType = selectedPlan.getAttribute('data-plan');
        const plan = plansData[planType];
        
        const colorNames = {
            white: 'Branco Pérola',
            black: 'Preto Fosco',
            red: 'Vermelho Racing'
        };
        
        const order = {
            id: 'POR-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
            car: 'Porsche 911',
            color: selectedColor,
            colorName: colorNames[selectedColor],
            plan: plan,
            planType: planType,
            local: local,
            data: data,
            hora: hora,
            status: 'Na Garagem',
            timestamp: new Date().toISOString(),
            image: '../../assets/img/porsche.png'
        };
        
        let garage = JSON.parse(localStorage.getItem('deluxeGarage')) || [];
        garage.push(order);
        localStorage.setItem('deluxeGarage', JSON.stringify(garage));
        
        showSuccessWithGarage(order);
    }
    
    function showSuccessWithGarage(order) {
        const modal = document.getElementById('successModal');
        const bookingDetails = document.getElementById('bookingDetails');
        
        bookingDetails.innerHTML = `
            <div class="success-content">
                <h4>🏁 Porsche Adicionado à Garagem!</h4>
                <div class="car-summary">
                    <div class="car-info">
                        <p><strong>🚗 Veículo:</strong> ${order.car} - ${order.colorName}</p>
                        <p><strong>📍 Local:</strong> ${order.local}</p>
                        <p><strong>📅 Data:</strong> ${order.data}</p>
                        <p><strong>🕐 Horário:</strong> ${order.hora}</p>
                        <p><strong>💎 Plano:</strong> ${order.plan.title}</p>
                        <p><strong>💰 Valor:</strong> ${order.plan.price}</p>
                    </div>
                </div>
                <div class="garage-status">
                    <div class="status-badge">🏠 Status: Na Garagem Virtual</div>
                    <p class="order-id">ID do Pedido: <strong>${order.id}</strong></p>
                </div>
                <div class="action-buttons-modal">
                    <button class="btn-garage" onclick="goToGarage()">
                        🏁 Ver Minha Garagem
                    </button>
                    <button class="btn-continue" onclick="closeSuccessModal()">
                        ➕ Adicionar Outro Carro
                    </button>
                </div>
            </div>
        `;
        
        modal.style.display = 'block';
    }
    
    window.goToGarage = function() {
        window.location.href = '../pedidos/pedidos.html';
    }
    
    function showErrorMessage(message) {
        const toast = document.createElement('div');
        toast.className = 'error-toast';
        toast.innerHTML = `⚠️ ${message}`;
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: #e80101;
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            z-index: 1001;
            animation: slideInRight 0.3s ease;
        `;
        
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }
    
    window.closePlanModal = function() {
        document.getElementById('planModal').style.display = 'none';
    }
    
    window.closeCancelModal = function() {
        document.getElementById('cancelModal').style.display = 'none';
    }
    
    window.confirmCancel = function() {
        document.getElementById('local').value = '';
        document.getElementById('data').value = '';
        document.getElementById('hora').value = '';
        
        planItems.forEach(plan => plan.classList.remove('selected'));
        colorButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector('.color-btn.white').classList.add('active');
        
        updateCarDisplay('white');
        window.closeCancelModal();
        
        const toast = document.createElement('div');
        toast.className = 'cancel-toast';
        toast.innerHTML = '✅ Reserva cancelada com sucesso!';
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: #376148;
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            z-index: 1001;
            animation: slideInRight 0.3s ease;
        `;
        
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }
    
    window.closeSuccessModal = function() {
        document.getElementById('successModal').style.display = 'none';
    }
    
    window.addEventListener('click', function(event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
    
    const dataInput = document.getElementById('data');
    dataInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 8) value = value.slice(0, 8);
        if (value.length >= 4) {
            value = value.slice(0, 2) + '/' + value.slice(2, 4) + '/' + value.slice(4);
        } else if (value.length >= 2) {
            value = value.slice(0, 2) + '/' + value.slice(2);
        }
        e.target.value = value;
    });
    
    const horaInput = document.getElementById('hora');
    horaInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 4) value = value.slice(0, 4);
        if (value.length >= 2) {
            value = value.slice(0, 2) + ':' + value.slice(2);
        }
        e.target.value = value;
    });
    
    updateCarDisplay('white');
});