//HTML HEADER
function globalHeader(){
    return`
        <button class="menu-btn">☰ </button> 
    
        <img src="../img/logo.png" alt="Logo" class="logo">
    
        <div class="login-btn">  <!-- Botão de login estilizado -->
            <a href="../login/login.html" style="color: inherit; font-size: 35px;">
                <i class="bi bi-person-circle"></i>
            </a>
        </div>
    
         <!-- Sidebar -->
        <div class="sidebar">
            <ul>               
                <li><a href="../home/index.html">Home</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Carros</a></li>
                <li><a href="#">Contato</a></li>
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