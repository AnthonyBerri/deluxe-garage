//HTML FOOTER
class FooterComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <footer style="background-color: #333; color: white; padding: 20px; text-align: center;">
                <div>
                    <p>&copy; 2025 Deluxe Garage. Todos os direitos reservados.</p>
                    <p>
                        <a href="https://www.instagram.com" target="_blank" style="color: #fff; margin: 0 10px;">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://www.facebook.com" target="_blank" style="color: #fff; margin: 0 10px;">
                            <i class="bi bi-facebook"></i>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" style="color: #fff; margin: 0 10px;">
                            <i class="bi bi-twitter-x"></i>
                        </a>
                    </p>
                </div>
            </footer>
        `;
    }
}

// Registrar o componente
customElements.define('footer-component', FooterComponent);