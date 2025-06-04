//HTML HEADER
class HeaderComponent extends HTMLElement {
    constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML =`
        <link rel="stylesheet" href="/components/header/header.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
        <header>
            <button class="menu-btn">☰ </button> 
            <p class="logo">DeluxeGarage</p>
            <a href="/pages/login/login.html" class="login">
                <p>Login</p>
            </a>
            
    
            <!-- Sidebar -->
            <div class="sidebar">
                <ul>               
                    <li><a href="/pages/home/index.html">Home</a></li>
                    <li><a href="/pages/home/index.html">Pedidos</a></li>
                    <li><a href="/pages/quemSomos/index.html">Quem Somos?</a></li>

                    <h1>Marcas</h1>

                    <li><a href="#">Audi</a></li>
                    <li><a href="#">BMW</a></li>
                    <li><a href="#">Ferrari</a></li>
                    <li><a href="#">Lamborghini</a></li>
                    <li><a href="#">Mercedes</a></li>
                    <li><a href="#">Porsche</a></li>
                </ul>
            </div> 
        </header>
    `;
    }
    //chama scripts que estão dentro do html acima, para conecta-los ao codigo após serem gerados.
    connectedCallback() {
        const menuBtn = this.shadowRoot.querySelector('.menu-btn');
        const sidebar = this.shadowRoot.querySelector('.sidebar');

        menuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('show');
        });
    }
}

customElements.define('header-component', HeaderComponent);