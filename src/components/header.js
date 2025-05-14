//HTML HEADER
function globalHeader(){
    return`
        <button class="menu-btn">☰ </button> 
    
        <p class="logo">DeluxeGarage</p>
    
        <div class="login-btn">  <!-- Botão de login estilizado -->
            <a href="../login/login.html" style="color: inherit; font-size: 35px;">
                <i class="bi bi-person-circle"></i>
            </a>
        </div>
    
        <!-- Sidebar -->
        <div class="sidebar">
            <ul>               
                <li><a href="../home/index.html">Home</a></li>
                <li><a href="../home/index.html">Pedidos</a></li>
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
    `;
}

//GET HEADER FROM HTML CODE

const header = document.getElementById("header");

//SET HEADER ON HTML CODE

header.innerHTML = globalHeader();

//SET SIDEBAR

const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});