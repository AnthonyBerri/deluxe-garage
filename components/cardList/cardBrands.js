//HTML HEADER
class CardBrands extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML =`
        <link rel="stylesheet" href="../../components/cardList/cardList.css">    
        <div class="cardsGrid"></div>
    `;
    }

    static get observedAttributes() {
        return ['data-cars'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'data-cars' && newValue) {
            try {
                const cars = JSON.parse(newValue);
                this.render(cars);
            } catch (e) {
                console.error("Erro ao parsear os carros:", e);
            }
        }
    }
    
    connectedCallback() {
        const carsData = this.getAttribute('data-cars');
        // console.log("data-cars recebido:", carsData);

        let cars = [];

        try {
            cars = JSON.parse(carsData);
        } catch (e) {
            console.error("Erro ao parsear os carros:", e);
        }

        this.render(cars);
    }

    render(cars) {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../../components/cardList/cardList.css">    
            <div class="cardsGrid">
                ${cars.map(car => `
                    <div class="imageContainer">
                        <a href="${car.link}"><img src="${car.img}" width="600px" height="280px"></a>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

customElements.define('cards-brands', CardBrands);