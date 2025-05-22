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
                <img src="../../assets/img/acuraHomePage.png">
            </div>        
        </div> 
    </main>
    `;
    }
}

customElements.define('main-component', MainComponent);