function globalCarrossel() {
    return`
        <section class="carrosselz">
            <div class="previousImage">
                <img src="../../assets/img/audi.png" alt="previous" width="100px">
            </div>
            <div class="selectedImage">
                <img src="../../assets/img/ferrari.png" alt="car1" width="100px">
            </div>
            <div class="nextImage">
                <img src="../../assets/img/porsche.png" alt="next" width="100px">
            </div>
        </section>
    `;
}

const carrossel = document.getElementById("carrossel");

carrossel.innerHTML = globalCarrossel();