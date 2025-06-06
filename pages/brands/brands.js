const params = new URLSearchParams(window.location.search);
const brandName = params.get('name');

if (!brandName) {
    const div = document.getElementById('info');
    if (div) {
        div.innerHTML = "<p>Marca não especificada na URL.</p>";
    }
} else {
    fetch('/pages/brands/brand.json') 
        .then(response => response.json())
        .then(brands => {
            const brand = brands.find(m => m.name.toLowerCase() === brandName.toLowerCase());

            const main = document.getElementById('info');

            if (main) {
                if (brand) {
                    main.innerHTML = `
                        <div class="card">
                            <img src="${brand.logo}" alt="${brand.name}" class="brand-logo">
                            <carrossel-component></carrossel-component>
                            <cards-container></cards-container>
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