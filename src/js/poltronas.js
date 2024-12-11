const poltronas = document.querySelectorAll('.poltrona');
const calcularBtn = document.querySelector('#calcular');
const total = document.querySelector('#total');
const mensagemContainer = document.getElementById('mensagemContainer');
let poltronasSelecionadas = []; // Array para armazenar as poltronas selecionadas

// Adiciona evento de clique em cada poltrona
poltronas.forEach(poltrona => {
    poltrona.addEventListener('click', () => {
        // Evita interação com poltronas já vendidas
        if (poltrona.classList.contains('vendida')) return;

        // Alterna a seleção da poltrona
        if (poltrona.classList.contains('selecionada')) {
            // Se já estiver selecionada, desmarca e remove do array
            poltrona.classList.remove('selecionada');
            poltronasSelecionadas = poltronasSelecionadas.filter(
                p => p.element !== poltrona
            );

            // Limpa o conteúdo do mensagemContainer
            mensagemContainer.innerHTML = '';
        } else {
            // Marca como selecionada e exibe opções de preço
            poltrona.classList.add('selecionada');

            // Cria os botões 'Meia' e 'Inteira'
            const btnMeia = document.createElement('button');
            btnMeia.textContent = 'Meia';
            btnMeia.classList.add('btn-meia');
            const btnInteira = document.createElement('button');
            btnInteira.textContent = 'Inteira';
            btnInteira.classList.add('btn-inteira');

            // Cria a mensagem
            const mensagem = document.createElement('p');
            mensagem.textContent = `Selecione o preço para a poltrona ${poltrona.getAttribute('box')}:`;

            // Limpa o conteúdo anterior e adiciona os novos elementos no mensagemContainer
            mensagemContainer.innerHTML = '';
            mensagemContainer.appendChild(mensagem);
            mensagemContainer.appendChild(btnMeia);
            mensagemContainer.appendChild(btnInteira);

            // Adiciona eventos de clique nos botões 'Meia' e 'Inteira'
            btnMeia.addEventListener('click', () => {
                // Adiciona a poltrona ao array com preço 'Meia'
                poltronasSelecionadas.push({
                    element: poltrona,
                    isMeia: true
                });

                // Atualiza a classe CSS da poltrona para 'vendida'
                poltrona.classList.add('vendida');
                poltrona.classList.remove('selecionada');
                mensagemContainer.innerHTML = ''; // Limpa o mensagemContainer
            });

            btnInteira.addEventListener('click', () => {
                // Adiciona a poltrona ao array com preço 'Inteira'
                poltronasSelecionadas.push({
                    element: poltrona,
                    isMeia: false
                });

                // Atualiza a classe CSS da poltrona para 'vendida'
                poltrona.classList.add('vendida');
                poltrona.classList.remove('selecionada');
                mensagemContainer.innerHTML = ''; // Limpa o mensagemContainer
            });
        }
    });
});

// Adiciona evento de clique no botão Calcular
calcularBtn.addEventListener('click', () => {
    calcularPreco();
});

function calcularPreco() {
    let precoTotal = 0;

    // Calcula o preço total de todas as poltronas escolhidas
    poltronasSelecionadas.forEach(poltrona => {
        let preco = parseFloat(poltrona.element.getAttribute('data-price'));
        preco = preco * (poltrona.isMeia ? 0.5 : 1);
        precoTotal += preco;
    });

    // Atualiza o preço total no HTML
    total.textContent = `R$ ${precoTotal.toFixed(2)}`;
}