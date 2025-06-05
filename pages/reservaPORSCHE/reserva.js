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
        
        showSuccessMessage(local, data, hora, selectedPlan, selectedColor);
    });
    
    function showSuccessMessage(local, data, hora, selectedPlan, selectedColor) {
        const modal = document.getElementById('successModal');
        const bookingDetails = document.getElementById('bookingDetails');
        
        const planType = selectedPlan.getAttribute('data-plan');
        const plan = plansData[planType];
        const colorNames = {
            white: 'Branco Pérola',
            black: 'Preto Fosco',
            red: 'Vermelho Racing'
        };
        
        bookingDetails.innerHTML = `
            <h4>📋 Detalhes da Reserva:</h4>
            <p><strong>🚗 Veículo:</strong> Porsche 911 - ${colorNames[selectedColor]}</p>
            <p><strong>📍 Local:</strong> ${local}</p>
            <p><strong>📅 Data:</strong> ${data}</p>
            <p><strong>🕐 Horário:</strong> ${hora}</p>
            <p><strong>💎 Plano:</strong> ${plan.title}</p>
            <p><strong>💰 Valor:</strong> ${plan.price}</p>
            <hr style="margin: 15px 0;">
            <p><strong>📧 Confirmação enviada para seu e-mail!</strong></p>
            <p style="color: #666; font-size: 14px;">Número da reserva: #${Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
        `;
        
        modal.style.display = 'block';
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
        
        setTimeout(() => {
            toast.remove();
        }, 3000);
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
        
        setTimeout(() => {
            toast.remove();
        }, 3000);
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
        
        if (value.length > 8) {
            value = value.slice(0, 8);
        }
        
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
        
        if (value.length > 4) {
            value = value.slice(0, 4);
        }
        
        if (value.length >= 2) {
            value = value.slice(0, 2) + ':' + value.slice(2);
        }
        
        e.target.value = value;
    });
    
    updateCarDisplay('white');
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes colorGlow {
            0% {
                transform: scale(1);
                filter: brightness(1);
            }
            50% {
                transform: scale(1.05);
                filter: brightness(1.2);
            }
            100% {
                transform: scale(1);
                filter: brightness(1);
            }
        }
        
        .car-name {
            position: relative;
            display: inline-block;
            font-size: 28px !important;
            font-weight: bold !important;
            margin-bottom: 5px !important;
            padding: 10px 20px;
            border-radius: 12px;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            transition: all 0.5s ease;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .car-name::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: inherit;
            border-radius: inherit;
            opacity: 0.1;
            z-index: -1;
        }
        
        .plan-details {
            text-align: left;
        }
        
        .plan-price-big {
            font-size: 24px;
            font-weight: bold;
            color: #376148;
            text-align: center;
            margin-bottom: 20px;
            padding: 10px;
            background-color: #f8f9fa;
            border-radius: 8px;
        }
        
        .features-list {
            list-style: none;
            padding: 0;
        }
        
        .features-list li {
            padding: 8px 0;
            border-bottom: 1px solid #eee;
        }
        
        .features-list li:last-child {
            border-bottom: none;
        }
        
        .plan-note {
            background-color: #e3f2fd;
            padding: 15px;
            border-radius: 8px;
            margin-top: 15px;
            border-left: 4px solid #376148;
        }
    `;
    document.head.appendChild(style);
});