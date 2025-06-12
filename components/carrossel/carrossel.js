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

                <div class="slide first">
                    <a src=""><img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" alt="Imagem 1"></a>
                </div>
                <div class="slide">
                    <a src=""><img src="../../assets/img/RS6Avant.png" alt="Imagem 2"></a>
                </div>
                <div class="slide">
                    <a src=""><img src="../../assets/img/Series3.png" alt="Imagem 3"></a>
                </div>
                <div class="slide">
                    <a src=""><img src="../../assets/img/TT.png" alt="Imagem 4"></a>
                </div>

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
}

customElements.define('carrossel-component', CarrosselComponent);