const params = new URLSearchParams(window.location.search);
const brandId = params.get('id');

if (!brandId) {
    const div = document.getElementById('info');
    if (div) {
        div.innerHTML = "<p>Marca não especificada na URL.</p>";
    }
} else {
    fetch('../brands/brand.json') 
        .then(response => response.json())
        .then(brands => {
            const brand = brands.find(m => m.id === brandId);

            const main = document.getElementById('info');

            if (main) {
                if (brand) {
                    main.innerHTML = `
                        <div class="card">
                            <img src="${brand.logo}" alt="${brand.name}" class="brand-logo">
                            <carrossel-component data-cars='${JSON.stringify(brand.cars || [])}'></carrossel-component>
                            <cards-brands data-cars='${JSON.stringify(brand.cars || [])}'   ></cards-brands>
                        </div>
                    `;
                } else {
                    div.innerHTML = `<p>Marca não encontrada</p>`; 
                }
            }
        })
        .catch(error => {
            const div = document.getElementById('info');
            if (div) {
                div.innerText = "Erro ao carregar os dados.";
            }
            console.error('Erro:', error);
        });
}