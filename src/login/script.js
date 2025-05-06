 // JavaScript to toggle the sidebar
 const menuBtn = document.querySelector('.menu-btn');
 const sidebar = document.querySelector('.sidebar');

 menuBtn.addEventListener('click', () => {
     sidebar.classList.toggle('show');
 });