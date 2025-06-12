//HTML HEADER
class HeaderComponent extends HTMLElement {
    constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML =`
        <link rel="stylesheet" href="../../components/header/header.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
        <header>
            <button class="menu-btn">☰ </button> 
            <p class="logo">DELUXE GARAGE</p>
            <div class="login-btn">
                <a href="#" class="login" id="login-modal-btn">
                    Login
                </a>
            </div>

            <div id="login-modal" class="modal">
                <div class="modal-content">
                    <h2>Entre na sua conta</h2>
                    <p class="login-modal-p">________________________________</p>
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
                    <p class="or">Ou entre com</p>
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
                    <p>Não tem uma conta? <a href="../cadastro/cadastro.html">Cadastre-se</a></p>
                </div>
            </div>

            <!-- Modal Esqueci minha senha -->
            <div id="forgot-password-modal" class="modal">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1>Recuperar senha</h1>
                    </div>
                    <span class="close-forgot-btn">&times;</span>
                    <form id="forgot-password-form">
                        <div class="forgot-password-label">
                            <label for="forgot-password-email">Informe seu e-mail:</label>
                        </div>
                        <input type="email" id="forgot-password-email" required>
                        <button type="submit">Enviar nova senha</button>
                    </form>
                    <p id="forgot-password-success" style="color:green; display:none;">Nova senha enviada para seu e-mail!</p>
                </div>
            </div>

            <!-- Sidebar -->
            <div class="sidebar">
                <ul>               
                    <li><a href="../home/index.html">Home</a></li>
                    <li><a href="../pedidos/pedidos.html">Pedidos</a></li>
                    <li><a href="../quemSomos/index.html">Quem Somos?</a></li>

                    <h1>Marcas</h1>

                    <li><a href="../brands/brand.html?id=6">Audi</a></li>
                    <li><a href="../brands/brand.html?id=3">BMW</a></li>
                    <li><a href="../brands/brand.html?id=1">Ferrari</a></li>
                    <li><a href="../brands/brand.html?id=4">Lamborghini</a></li>
                    <li><a href="../brands/brand.html?id=2">Mercedes</a></li>
                    <li><a href="../brands/brand.html?id=5">Porsche</a></li>
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
    const forgotPassword = this.shadowRoot.querySelector('.forgot-password');
    const forgotPasswordModal = this.shadowRoot.querySelector('#forgot-password-modal');
    const closeForgotBtn = this.shadowRoot.querySelector('.close-forgot-btn');
    const forgotPasswordForm = this.shadowRoot.querySelector('#forgot-password-form');
    const forgotPasswordSuccess = this.shadowRoot.querySelector('#forgot-password-success');

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

    forgotPassword.addEventListener('click', (e) => {
        e.preventDefault();
        forgotPasswordModal.style.display = 'block';
        forgotPasswordSuccess.style.display = 'none';
        forgotPasswordForm.reset();
    });

    closeForgotBtn.addEventListener('click', () => {
        forgotPasswordModal.style.display = 'none';
    });

    forgotPasswordForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Gera senha aleatória
        const newPassword = Math.random().toString(36).slice(-8);
        const email = this.shadowRoot.querySelector('#forgot-password-email').value;
        // Simula envio
        console.log(`Enviar nova senha ${newPassword} para ${email}`);
        forgotPasswordSuccess.style.display = 'block';
        setTimeout(() => {
            forgotPasswordModal.style.display = 'none';
        }, 2000);
    });

    window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (e.target === forgotPasswordModal) {
            forgotPasswordModal.style.display = 'none';
        }
    });
}
}

customElements.define('header-component', HeaderComponent);