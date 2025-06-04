//HTML HEADER
class HeaderComponent extends HTMLElement {
    constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML =`
        <link rel="stylesheet" href="/components/header/header.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
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
                    <h2>Entre na sua conta</h2>
                    <p>________________________________</p>
                    <span class="close-btn">&times;</span>
                    <form class="form-login">
                        <label for="username">Email</label>
                        <input type="text" id="username" name="username" required>
                        <label for="password">Senha</label>
                        <input type="password" id="password" name="password" required>
                        <div class="modal-footer">
                            <div class="modal-enter">
                                <button type="submit">Entrar</button>
                            </div> 
                        </div>                     
                    </form>
                    <div class="social-btn">
                        <button class="google-btn" title="Entrar com Google">
                            <i class="fa-brands fa-google"></i>
                        </button>
                        <button class="facebook-btn" title="Entrar com Facebook">
                            <i class="fa-brands fa-facebook-f"></i>                          
                        </button>
                        <button class="aple-btn" title="Entrar com Aple">
                            <i class="fa-brands fa-apple"></i>                         
                        </button>
                    </div>
                    <p class="forgot-password"><a href="#">Esqueci minha senha</a></p>
                        <p>Não tem uma conta? <a href="/pages/cadastro/cadastro.html">Cadastre-se</a></p>
                </div>
            </div>

            <!-- Sidebar -->
            <div class="sidebar">
                <ul>               
                    <li><a href="/pages/home/index.html">Home</a></li>
                    <li><a href="/pages/pedidos/pedidos.html">Pedidos</a></li>
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