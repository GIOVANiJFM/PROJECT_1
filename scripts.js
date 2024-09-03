document.addEventListener('DOMContentLoaded', function() {
   const seeds = [
    { id: 1, nome: "Seed 1", bioma: "Floresta" },
    { id: 2, nome: "Seed 2", bioma: "Deserto" },
    { id: 3, nome: "Seed 3", bioma: "Montanhas" },
    { id: 4, nome: "Seed 4", bioma: "Savanas" },
    { id: 5, nome: "Seed 5", bioma: "Pantanal" }
];

function exibirSeeds() {
    const seedsContainer = document.getElementById('seeds');
    seedsContainer.innerHTML = '';
    seeds.forEach(seed => {
        const seedElement = document.createElement('div');
        seedElement.textContent = `${seed.nome} - ${seed.bioma}`;
        seedsContainer.appendChild(seedElement);
    });
}

document.addEventListener('DOMContentLoaded', exibirSeeds);

});
