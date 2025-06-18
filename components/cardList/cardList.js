//HTML HEADER
class CardList extends HTMLElement {
    constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML =`
    <link rel="stylesheet" href="../../components/cardList/cardList.css">    
    <div class="cardsGrid">
        <div class="imageContainer">
            <a href="../reserva/reserva.html?id=4">
                <img src="../../assets/img/Audi/audiR8.jpeg" width="auto" height="auto">
                <t class="textCard">Audi TT</t>   
            </a>
        </div>
        <div class="imageContainer">
            <a href="../reserva/reserva.html?id=6">
                <img src="../../assets/img/Lamborghini/lamborghiniSestoElemento.jpeg" width="600px" height="280px">
                <t class="textCard">Lamborghini Sesto Elemento</t> 
            </a>
        </div>
        <div class="imageContainer">
            <a href="../reserva/reserva.html?id=3">
                <img src="../../assets/img/BMW/bmwE36.jpeg" width="600px" height="280px">
                <t class="textCard">BMW E36</t> 
            </a>
        </div>
        <div class="imageContainer">
            <a href="../reserva/reserva.html?id=2">
                <img src="../../assets/img/Mercedes/mercedes190E.jpg" width="600px" height="280px">
                <t class="textCard">Mercedes 190E</t> 
            </a>
        </div>
    </div> 
    `;
    }
}

customElements.define('cards-container', CardList);