//HTML HEADER
class MainComponent extends HTMLElement {
    constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML =`
    <link rel="stylesheet" href="../../components/mainCard.css">    
    <main>
        <div class="card">
            <div class="titleSubtitle">
                <h1>WHERE LUXURY MEETS PERFECTION ON</p>
                <p>WHEELS</p>
            </div>
            <div class="imageContainer">
                <img src="../../assets/img/acuraHomePage.png" height="400px">
            </div>
            <div class="cardsContainer">
                <div>
                    <a href="../cadastro/cadastro.html">
                        <img src="../../assets/img/RS6Avant.png">
                    </a>
                </div>
                <div>
                    <img src="../../assets/img/Series3.png">
                </div>
                <div>
                    <img src="../../assets/img/TT.png">
                </div>
            </div>
        </div> 
    </main>
    `;
    }
}

customElements.define('main-component', MainComponent);