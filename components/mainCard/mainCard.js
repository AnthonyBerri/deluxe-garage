//HTML HEADER
class MainComponent extends HTMLElement {
    constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML =`
    <link rel="stylesheet" href="../../components/mainCard/mainCard.css">    
    <main>
        <div class="card">
            <div class="titleSubtitle">
                <h1>WHERE LUXURY MEETS PERFECTION ON <br> WHEELS</p>
                <p></p>
            </div>
            <div class="imageContainer">
                <img src="../../assets/img/acuraHomePage.png" height="400px">
            </div>
            <div class="cardContent">
                <cards-container></cards-container>
            </div>        
        </div> 
    </main>
    `;
    }
}

customElements.define('main-component', MainComponent);