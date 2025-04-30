let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let container = document.querySelector(".container");
let items = document.querySelectorAll(".list .item");
let indicators = document.querySelector(".indicators");
let dots = document.querySelectorAll(".indicators ul li");


let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

// Adicionando os eventos de clique para os indicadores
nextButton.onclick = () => {
    console.log("next clicked");
    let itemOld = container.querySelector('.list .item.active');
    if (itemOld) {
        itemOld.classList.remove("active");
        let nextItem = itemOld.nextElementSibling;
        if (nextItem && nextItem.classList.contains('item')) {
            nextItem.classList.add("active");
        } else {
            // Se for o último, volta pro primeiro
            container.querySelector('.list .item:first-child').classList.add("active");
        }
    }
};

prevButton.onclick = function () {
    console.log("prev clicked");
    let itemOld = container.querySelector('.list .item.active');
    if (itemOld) {
        itemOld.classList.remove("active");
        // Ativa o item anterior
        let prevItem = itemOld.previousElementSibling;
        if (prevItem && prevItem.classList.contains('item')) {
            prevItem.classList.add("active");
        } else {
            // Se for o primeiro, volta pro último
            container.querySelector('.list .item:last-child').classList.add("active");
        }
    }
};

 // JavaScript to toggle the sidebar
 const menuBtn = document.querySelector('.menu-btn');
 const sidebar = document.querySelector('.sidebar');

 menuBtn.addEventListener('click', () => {
     sidebar.classList.toggle('show');
 });
