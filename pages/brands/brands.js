const params = new URLSearchParams(window.location.search);
const brandName = params.get('name');

fetch('brand.json') 
    .then(response => response.json())
    .then(brands => {
        const brand = brands.find(m => m.name.toLowerCase() === brandName.toLowerCase());

        const div = document.getElementById('info');

        if(brand) {
            div.innerHTML = `
                 <header-component></header-component>
                <h2>${brand.name}</h2>
                <img src="${brand.logo}" alt="${brand.name}">
            `;
        } else {
            div.innerHTML = `<p>Marca não encontrada</p>`; 
        }
    })
    .catch(error => {
    document.getElementById('info').innerText = 'Erro ao carregar os dados.';
    console.error('Erro:', error);
  });