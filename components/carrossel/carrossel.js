class CarrosselComponent extends HTMLElement {
    constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
        <link rel="stylesheet" href="../../components/carrossel/carrossel.css">
        <div class="slider">
            <div class="slides">
                <input type="radio" name="radio-btn" id="radio1">
                <input type="radio" name="radio-btn" id="radio2">
                <input type="radio" name="radio-btn" id="radio3">
                <input type="radio" name="radio-btn" id="radio4">

                <div class="navigation-auto">
                    <div class="auto-btn1"></div>
                    <div class="auto-btn2"></div>
                    <div class="auto-btn3"></div>
                    <div class="auto-btn4"></div>
                </div>
            </div>

            <div class="manual-navigation">
                <label for="radio1" class="manual-btn"></label>
                <label for="radio2" class="manual-btn"></label>
                <label for="radio3" class="manual-btn"></label>
                <label for="radio4" class="manual-btn"></label>
            </div>

        </div>
        `;
        }
        connectedCallback() {
            const carsData = this.getAttribute('data-cars');
            console.log("data-cars recebido:", carsData);

            let cars = [];

            try {
                cars = JSON.parse(carsData);
            } catch (e) {
                console.error("Erro ao parsear os carros:", e);
            }

            this.render(cars);

            let count = 1;
            const setRadio = () => {
                const radio = this.shadowRoot.querySelector(`#radio${count}`);
                if (radio) radio.checked = true;
            };
            setRadio();

            setInterval(() => {
                count++;
                if (count > 4) count = 1;
                setRadio();
            }, 2000);
        }

        render(cars) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../../components/carrossel/carrossel.css">
            <div class="slider">
                
                <div class="slides">
                    <input type="radio" name="radio-btn" id="radio1">
                    <input type="radio" name="radio-btn" id="radio2">
                    <input type="radio" name="radio-btn" id="radio3">
                    <input type="radio" name="radio-btn" id="radio4">

                    
                    ${[0,1,2,3].map(idx => `
                    <div class="slide${idx === 0 ? ' first' : ''}">
                        <a href="${cars[idx] ? cars[idx].link : ''}"><img src="${cars[idx] ? cars[idx].img : ''}" alt="Imagem ${idx + 1}"></a>
                    </div>
                    `).join('')}

                    <div class="navigation-auto">
                        <div class="auto-btn1"></div>
                        <div class="auto-btn2"></div>
                        <div class="auto-btn3"></div>
                        <div class="auto-btn4"></div>
                    </div>
                </div>
                
                <div class="manual-navigation">
                    <label for="radio1" class="manual-btn"></label>
                    <label for="radio2" class="manual-btn"></label>
                    <label for="radio3" class="manual-btn"></label>
                    <label for="radio4" class="manual-btn"></label>
                </div>

            </div>
                    `;
            }


}


customElements.define('carrossel-component', CarrosselComponent);