const poltronas = document.querySelectorAll('.poltrona');
const calcularBtn = document.querySelector('#calcular');
const total = document.querySelector('#total');
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
        } else {
            // Marca como selecionada e exibe opções de preço
            poltrona.classList.add('selecionada');

            // Cria os botões 'Meia' e 'Inteira'
            const btnMeia = document.createElement('button');
            btnMeia.textContent = 'Meia';
            const btnInteira = document.createElement('button');
            btnInteira.textContent = 'Inteira';

            // Exibe uma mensagem solicitando ao usuário selecionar o preço
            const mensagem = document.createElement('p');
            mensagem.textContent = `Selecione o preço para a poltrona ${poltrona.getAttribute('box')}:`;

            // Adiciona os botões e a mensagem no HTML
            const container = document.createElement('div');
            container.appendChild(mensagem);
            container.appendChild(btnMeia);
            container.appendChild(btnInteira);
            document.body.appendChild(container);

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
                document.body.removeChild(container);
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
                document.body.removeChild(container);
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



if (selecionarIngresso) {
    // Local onde o conteúdo será inserido
    const modalContainer = document.getElementById('modal-container');

    // Gera o HTML
    let html = `
        <div class="modal">
            <p>Selecione o preço para a poltrona ${poltrona.getAttribute('box')}:</p>
            <button class="meia">Meia</button>
            <button class="inteira">Inteira</button>
        </div>
    `;

    // Insere o HTML dentro do contêiner
    modalContainer.innerHTML = html;

    // Exibe o contêiner (caso esteja oculto por CSS)
    modalContainer.style.display = 'block';

    // Adicionar lógica para fechar o modal, se necessário
    const meiaButton = document.querySelector('.meia');
    const inteiraButton = document.querySelector('.inteira');
    meiaButton.addEventListener('click', () => {
        console.log('Selecionado: Meia');
        modalContainer.style.display = 'none'; // Oculta o modal após a seleção
    });
    inteiraButton.addEventListener('click', () => {
        console.log('Selecionado: Inteira');
        modalContainer.style.display = 'none'; // Oculta o modal após a seleção
    });
}

