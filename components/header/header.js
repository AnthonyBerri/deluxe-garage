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
            <div class="login-btn">
                <a href="#" class="login" id="login-modal-btn">
                    Login
                </a>
            </div>

            <div id="login-modal" class="modal">
                <div class="modal-content">
                    <h2>Login</h2>
                    <p>________________________________</p>
                    <span class="close-btn">&times;</span> <!-- Botão de fechar movido para dentro -->
                    <form class="form-login">
                        <label for="username">Usuário</label>
                        <input type="text" id="username" name="username" required>
                        <label for="password">Senha</label>
                        <input type="password" id="password" name="password" required>
                        <div class="modal-footer">
                            <div class="modal-enter">
                                <button type="submit">Entrar</button>
                            </div>
                            <p>Não tem uma conta? <a href="/cadastro/cadastro.html">Cadastre-se</a></p>
                        </div>    
                    </form>
                </div>
            </div>

            <!-- Sidebar -->
            <div class="sidebar">
                <ul>               
                    <li><a href="/pages/home/index.html">Home</a></li>
                    <li><a href="/pages/home/index.html">Pedidos</a></li>
                    <li><a href="#">Quem Somos?</a></li>

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
   connectedCallback() {
    const menuBtn = this.shadowRoot.querySelector('.menu-btn');
    const sidebar = this.shadowRoot.querySelector('.sidebar');
    const loginModalBtn = this.shadowRoot.querySelector('#login-modal-btn');
    const loginModal = this.shadowRoot.querySelector('#login-modal');
    const closeBtn = this.shadowRoot.querySelector('.close-btn');

    if (sessionStorage.getItem('showLoginModal') === 'true') {
        loginModal.style.display = 'block';
        sessionStorage.removeItem('showLoginModal');
    }

    menuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('show');
    });

    loginModalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });
}
}

customElements.define('header-component', HeaderComponent);