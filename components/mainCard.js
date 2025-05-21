//HTML HEADER
class MainComponent extends HTMLElement {
    constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML =`
    <link rel="stylesheet" href="../../components/mainCard.css">    
    <main>
        <div>
            <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
        </div> 
    </main>
    `;
    }
}

customElements.define('main-component', MainComponent);