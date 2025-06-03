//HTML HEADER
class CardList extends HTMLElement {
    constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML =`
    <link rel="stylesheet" href="/components/cardList/cardList.css">    
    <div class="cardsGrid">
        <div class="imageContainer">
            <a href="/pages/login/login.html">
                <img src="/assets/img/TT.png" width="auto" height="auto">
                <t class="textCard">Audi TT</t>   
            </a>
        </div>
        <div class="imageContainer">
            <img src="/assets/img/RS6Avant.png" width="600px" height="280px">
            <t class="textCard">Audi RS6Avant</t> 
        </div>
        <div class="imageContainer">
            <img src="/assets/img/RS6Avant.png" width="600px" height="280px">
            <t class="textCard">Audi RS6Avant</t> 
        </div>
        <div class="imageContainer">
            <img src="/assets/img/TT.png" width="600px" height="280px">
            <t class="textCard">Audi TT</t> 
        </div>
    </div> 
    `;
    }
}

customElements.define('cards-container', CardList);