document.addEventListener('DOMContentLoaded', () => {
    const cedulas = [
        {
            frente: 'src/assets/cedulas/1real-1994-frente.jpg',
            verso: 'src/assets/cedulas/1real-1994-verso.jpg',
            ano: 1994,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 1,00\nPeríodo de Circulação: 1994-1997"
        },
        {
            frente: 'src/assets/cedulas/1real-1994-frente-2.jpg',
            verso: 'src/assets/cedulas/1real-1994-verso-2.jpg',
            ano: 1994,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 1,00\nPeríodo de Circulação: 1994-1997"
        },
        {
            frente: 'src/assets/cedulas/1real-1997-frente.jpg',
            verso: 'src/assets/cedulas/1real-1997-verso.jpg',
            ano: 1997,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 1,00\nPeríodo de Circulação: 1997-2003"
        },
        {
            frente: 'src/assets/cedulas/1real-2003-frente.jpg',
            verso: 'src/assets/cedulas/1real-2003-verso.jpg',
            ano: 2003,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 1,00\nPeríodo de Circulação: 2003-Atualidade"
        },
        {
            frente: 'src/assets/cedulas/2reais-2001-frente.jpg',
            verso: 'src/assets/cedulas/2reais-2003-verso.jpg',
            ano: 2001,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 2,00\nPeríodo de Circulação: 2001-2003"
        },
        {
            frente: 'src/assets/cedulas/2reais-2013-frente.jpg',
            verso: 'src/assets/cedulas/2reais-2013-verso.jpg',
            ano: 2013,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 2,00 (2ª família de cédulas do Real)\nPeríodo de Circulação: 29.7.2013 (em circulação)"
        },
        {
            frente: 'src/assets/cedulas/2reais-2017-frente.jpg',
            verso: 'src/assets/cedulas/2reais-2017-verso.jpg',
            ano: 2017,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 2,00\nPeríodo de Circulação: 2017-Atualidade"
        },
        {
            frente: 'src/assets/cedulas/5reais-2013-frente.jpg',
            verso: 'src/assets/cedulas/5reais-2013-verso.jpg',
            ano: 2013,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 5,00\nPeríodo de Circulação: 2013-Atualidade"
        },
        {
            frente: 'src/assets/cedulas/5reais-1997-frente.jpg',
            verso: 'src/assets/cedulas/5reais-1997-verso.jpg',
            ano: 1997,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 5,00\nPeríodo de Circulação: 1997-2003"
        },
        {
            frente: 'src/assets/cedulas/5reais-1994-frente-2.jpg',
            verso: 'src/assets/cedulas/5reais-1994-verso-3.jpg',
            ano: 1994,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 5,00\nPeríodo de Circulação: 1994-1997"
        },
        {
            frente: 'src/assets/cedulas/5reais-1994-frente3.jpg',
            verso: 'src/assets/cedulas/5reais-1994-verso.jpg',
            ano: 1994,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 5,00\nPeríodo de Circulação: 1994-1997"
        },
        {
            frente: 'src/assets/cedulas/5reais-1994-frente.jpg',
            verso: 'src/assets/cedulas/5reais-1994-verso-2.jpg',
            ano: 1994,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 5,00\nPeríodo de Circulação: 1994-1997"
        },
        {
            frente: 'src/assets/cedulas/10reais-1994-frente.jpg',
            verso: 'src/assets/cedulas/10reais-1994-verso.jpg',
            ano: 1994,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 10,00\nPeríodo de Circulação: 1994-1997"
        },
        {
            frente: 'src/assets/cedulas/10reais-2000-frente.jpg',
            verso: 'src/assets/cedulas/10reais-2000-verso.jpg',
            ano: 2000,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 10,00\nPeríodo de Circulação: 2000-2012"
        },
        {
            frente: 'src/assets/cedulas/10reais-2000-frente-2.jpg',
            verso: 'src/assets/cedulas/10reais-2000-verso-2.jpg',
            ano: 2000,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 10,00\nPeríodo de Circulação: 2000-2012"
        },
        {
            frente: 'src/assets/cedulas/10reais-1994-frente-2.jpg',
            verso: 'src/assets/cedulas/10reais-1994-verso-2.jpg',
            ano: 1994,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 10,00\nPeríodo de Circulação: 1994-1997"
        },
        {
            frente: 'src/assets/cedulas/10reais-1997-frente.jpg',
            verso: 'src/assets/cedulas/10reais-1997-verso.jpg',
            ano: 1997,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 10,00\nPeríodo de Circulação: 1997-2000"
        },
        {
            frente: 'src/assets/cedulas/10reais-2012-frente.jpg',
            verso: 'src/assets/cedulas/10reais-2012-verso.jpg',
            ano: 2012,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 10,00\nPeríodo de Circulação: 2012-Atualidade"
        },
        {
            frente: 'src/assets/cedulas/10reais-1994-frente-3.jpg',
            verso: 'src/assets/cedulas/10reais-1994-verso-3.jpg',
            ano: 1994,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 10,00\nPeríodo de Circulação: 1994-1997"
        },
        {
            frente: 'src/assets/cedulas/20reais-2002-frente.jpg',
            verso: 'src/assets/cedulas/20reais-2002-verso.jpg',
            ano: 2002,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 20,00\nPeríodo de Circulação: 2002-2012"
        },
        {
            frente: 'src/assets/cedulas/20reais-2012-frente.jpg',
            verso: 'src/assets/cedulas/20reais-2012-verso.jpg',
            ano: 2012,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 20,00\nPeríodo de Circulação: 2012-Atualidade"
        },
        {
            frente: 'src/assets/cedulas/50reais-1994-frente-3.jpg',
            verso: 'src/assets/cedulas/50reais-1994-verso.jpg',
            ano: 1994,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 50,00\nPeríodo de Circulação: 1994-1997"
        },
        {
            frente: 'src/assets/cedulas/50reais-2010-frente.jpg',
            verso: 'src/assets/cedulas/50reais-2010-verso.jpg',
            ano: 2010,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 50,00\nPeríodo de Circulação: 2010-Atualidade"
        },
        {
            frente: 'src/assets/cedulas/50reais-1994-frente.png',
            verso: 'src/assets/cedulas/50reais-1994-verso.png',
            ano: 1994,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 50,00\nPeríodo de Circulação: 1994-1997"
        },
        {
            frente: 'src/assets/cedulas/50reais-1994-frente-2.jpg',
            verso: 'src/assets/cedulas/50reais-1994-verso-2.jpg',
            ano: 1994,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 50,00\nPeríodo de Circulação: 1994-1997"
        },
        {
            frente: 'src/assets/cedulas/100reais-1994-frente.jpg',
            verso: 'src/assets/cedulas/100reais-1994-verso.jpg',
            ano: 1994,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 100,00\nPeríodo de Circulação: 1994-1997"
        },
        {
            frente: 'src/assets/cedulas/100reais-1994-frente-2.jpg',
            verso: 'src/assets/cedulas/100reais-1994-verso-2.jpg',
            ano: 1994,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 100,00\nPeríodo de Circulação: 1994-1997"
        },
        {
            frente: 'src/assets/cedulas/100reais-2010-frente.jpg',
            verso: 'src/assets/cedulas/100reais-2010-verso.jpg',
            ano: 2010,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 100,00\nPeríodo de Circulação: 2010-Atualidade"
        },
        {
            frente: 'src/assets/cedulas/200reais-2020-frente.jpg',
            verso: 'src/assets/cedulas/200reais-2020-verso.jpg',
            ano: 2020,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 200,00\nPeríodo de Circulação: 2020-Atualidade"
        },
        {
            frente: 'src/assets/cedulas/500cruzeiros-reais-1993-frente.jpg',
            verso: 'src/assets/cedulas/500cruzeiros-reais-1993-verso.jpg',
            ano: 1993,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 500,00 (Cruzeiros Reais)\nPeríodo de Circulação: 1993"
        },
        {
            frente: 'src/assets/cedulas/50000cruzeiros-reais-1994-frente.jpg',
            verso: 'src/assets/cedulas/50000cruzeiros-reais-1994-verso.jpg',
            ano: 1994,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 50.000,00 (Cruzeiros Reais)\nPeríodo de Circulação: 1994"
        },
        {
            frente: 'src/assets/cedulas/1000cruzeiros-reais-1993-frente.jpg',
            verso: 'src/assets/cedulas/1000cruzeiros-reais-1993-verso.jpg',
            ano: 1993,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 1.000,00 (Cruzeiros Reais)\nPeríodo de Circulação: 1993"
        },
        {
            frente: 'src/assets/cedulas/500cruzeiros-reais-1993-frente.jpg',
            verso: 'src/assets/cedulas/500cruzeiros-reais-1993-verso.jpg',
            ano: 1993,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 500,00 (Cruzeiros Reais)\nPeríodo de Circulação: 1993"
        },
        {
            frente: 'src/assets/cedulas/5000cruzeiros-reais-1993-frente.jpg',
            verso: 'src/assets/cedulas/5000cruzeiros-reais-1993-verso.jpg',
            ano: 1993,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 5.000,00 (Cruzeiros Reais)\nPeríodo de Circulação: 1993"
        },
        {
            frente: 'src/assets/cedulas/50000cruzeiros-reais-1994-frente.jpg',
            verso: 'src/assets/cedulas/50000cruzeiros-reais-1994-verso.jpg',
            ano: 1994,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 50.000,00 (Cruzeiros Reais)\nPeríodo de Circulação: 1994"
        },
        {
            frente: 'src/assets/cedulas/1000cruzeiros-reais-1993-frente.jpg',
            verso: 'src/assets/cedulas/1000cruzeiros-reais-1993-verso.jpg',
            ano: 1993,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 1.000,00 (Cruzeiros Reais)\nPeríodo de Circulação: 1993"
        },
        {
            frente: 'src/assets/cedulas/5000cruzeiros-reais-1993-frente.jpg',
            verso: 'src/assets/cedulas/5000cruzeiros-reais-1993-verso.jpg',
            ano: 1993,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 5.000,00 (Cruzeiros Reais)\nPeríodo de Circulação: 1993"
        }
    ];
    let cedulasEmbaralhadas = [];
    let cedulaAtual = 0;
    let mostrandoFrente = true;
    let pontos = 0; // Variável para armazenar a pontuação
    const custoRodada = 0; // Custo de cada rodada, se a pessoa acertar
    const custoRodadaErro = 50; // Custo de cada rodada, se a pessoa errar
    const custoRodadaCarregar = 50; // Custo ao carregar uma nova cédula
    const custoDica = 30; // Custo de 30 pontos para exibir a dica
    const custoDicaImg = document.getElementById('custo-dica-img');
    const dicaElement = document.getElementById('dica');

// Inicialmente oculta a dica
    dicaElement.style.display = 'none';

    function embaralharCedulas() {
        const array = [...cedulas];
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function carregarCedula() {
        if (cedulasEmbaralhadas.length === 0) {
            cedulasEmbaralhadas = embaralharCedulas();
        }

        // Cobrar pontos ao carregar uma nova cédula
        cobrarRodada(custoRodadaCarregar);

        const cedula = cedulasEmbaralhadas[cedulaAtual];
        document.getElementById('cedula-img').src = mostrandoFrente ? cedula.frente : cedula.verso;
        document.getElementById('cedula-img').style.display = 'block';
        document.getElementById('info-box').style.display = 'none'; // Esconde a caixa de informações
        document.getElementById('next-btn').style.display = 'none'; // Esconde o botão "Próxima" inicialmente

        // Oculta a dica e outros elementos
        document.getElementById('dica').style.display = 'none';
        document.getElementById('ano-input').style.display = 'block';
        document.getElementById('verificar-btn').style.display = 'block';

        // Limpa a mensagem ao carregar uma nova cédula
        document.getElementById('mensagem').textContent = '';
        document.getElementById('mensagem').style.color = '';
        document.getElementById('mensagem').classList.remove('pulando');
    }

    function cobrarPontosDica() {
        if (pontos >= custoDica) {
            pontos -= custoDica;
            atualizarPontuacao();
            return true; // Retorna verdadeiro se os pontos foram cobrados com sucesso
        } else {
            // Mensagem de erro se não tiver pontos suficientes
            document.getElementById('mensagem').textContent = `Você está pobre para usar a dica. Consiga mais dinheiro!`;
            document.getElementById('mensagem').style.color = 'red'; // Ajusta a cor conforme necessário
            return false; // Retorna falso se não for possível cobrar os pontos
        }
    }

    function mostrarDica() {
        if (cobrarPontosDica()) {
            const dica = document.getElementById('dica');
            if (dica.style.display === 'none' || dica.style.display === '') {
                const anoCorreto = cedulasEmbaralhadas[cedulaAtual].ano;
                const intervalo = 20; // Intervalo de 20 anos

                const anoInicio = Math.max(1900, anoCorreto - intervalo);
                const anoFim = Math.min(2024, anoCorreto + intervalo);

                const inicioDica = Math.floor(Math.random() * (anoFim - anoInicio - intervalo + 1)) + anoInicio;
                const fimDica = inicioDica + intervalo;

                dica.textContent = `Dica: Entre ${inicioDica} e ${fimDica}`;
                dica.style.display = 'block';
            } else {
                dica.style.display = 'none';
            }
        }
    }

    function atualizarPontuacao() {
        document.getElementById('pontos').textContent = pontos;
    }

    function verificarResposta() {
        const anoEscolhido = parseInt(document.getElementById('ano-input').value.trim(), 10);
        const anoCorreto = cedulasEmbaralhadas[cedulaAtual].ano;

        if (isNaN(anoEscolhido)) {
            document.getElementById('mensagem').textContent = 'Por favor, insira um ano válido.';
            document.getElementById('mensagem').style.color = 'red'; // Ajusta a cor conforme a mensagem
            return;
        }

        // Calcula a diferença absoluta entre o ano escolhido e o ano correto
        const diferenca = Math.abs(anoEscolhido - anoCorreto);

        // Calcula a pontuação com base na proximidade
        let pontosAdicionais = 0;
        let mensagem = '';

        if (diferenca === 0) {
            pontosAdicionais = 150; // Pontuação máxima para resposta exata
            mensagem = `Parabéns! Você acertou! 🎉 Ganhou 150 pontos por isso!`;
        } else if (diferenca <= 5) {
            pontosAdicionais = 50; // Pontuação alta para diferença de até 5 anos
            mensagem = `Quase lá! 😅 Você estava muito perto e ganhou 50 pontos por isso!`;
        } else if (diferenca <= 10) {
            pontosAdicionais = 25; // Pontuação moderada para diferença de até 10 anos
            mensagem = `Boa tentativa! 👍 Você estava a uma pequena distância, mas ainda ganhou 25 pontos por isso!`;
        } else {
            pontos -= custoRodadaErro; // Penalidade por erro
            mensagem = `Errado! A cédula é de ${anoCorreto}. Você perdeu ${custoRodadaErro} pontos.`;
        }

        // Atualiza a pontuação com base na proximidade
        if (pontosAdicionais > 0) {
            pontos += pontosAdicionais;
            // Subtrai o custo da rodada se a resposta estiver correta
            pontos -= custoRodada;
        }

        pontos = Math.max(0, pontos); // Garante que a pontuação não fique abaixo de zero

        atualizarPontuacao();

        document.getElementById('ano-input').value = '';
        document.getElementById('info-box').style.display = 'block'; // Exibe a caixa de informações
        document.getElementById('info-text').textContent = cedulasEmbaralhadas[cedulaAtual].info;
        document.getElementById('next-btn').style.display = 'block'; // Exibe o botão "Próxima"
        document.getElementById('ano-input').style.display = 'none'; // Esconde a caixa de texto
        document.getElementById('verificar-btn').style.display = 'none'; // Esconde o botão "Verificar"

        // Atualiza a mensagem
        const mensagemElement = document.getElementById('mensagem');
        mensagemElement.textContent = mensagem;
        mensagemElement.style.color = pontosAdicionais > 0 ? 'green' : 'red'; // Ajusta a cor conforme a mensagem
        mensagemElement.classList.add('pulando');

        // Remove a classe após a animação ter terminado
        setTimeout(() => {
            mensagemElement.classList.remove('pulando');
        }, 500); // Tempo de duração da animação
    }

    function mostrarProximaCedula() {
        const pontosNecessarios = 50; // Pontos necessários para avançar para a próxima fase
        const mensagemElement = document.getElementById('mensagem');

        if (pontos < pontosNecessarios) {
            const pontosFaltando = pontosNecessarios - pontos;
            mensagemElement.textContent = `Sua pontuação está abaixo de ${pontosNecessarios}. Você precisa de mais ${pontosFaltando} pontos para avançar para a próxima fase.`;
            mensagemElement.style.color = 'red'; // Ajusta a cor conforme necessário
            mensagemElement.classList.add('pulando');

            // Remove a classe após a animação ter terminado
            setTimeout(() => {
                mensagemElement.classList.remove('pulando');
            }, 500); // Tempo de duração da animação

            return;
        }

        cedulaAtual = (cedulaAtual + 1) % cedulasEmbaralhadas.length;
        mostrandoFrente = true; // Reseta para mostrar a frente da próxima cédula
        carregarCedula();
    }

    function alternarImagem() {
        mostrandoFrente = !mostrandoFrente;
        document.getElementById('cedula-img').src = mostrandoFrente ? cedulasEmbaralhadas[cedulaAtual].frente : cedulasEmbaralhadas[cedulaAtual].verso;
    }

    function adicionarPontosPorClique() {
        pontos += 5;
        atualizarPontuacao();
    }

    function cobrarRodada(custo) {
        if (pontos >= custo) {
            pontos -= custo;
        } else {
            pontos = 0; // Se não tiver pontos suficientes, zera a pontuação
        }
        atualizarPontuacao();
    }

// Adiciona os eventos
    document.getElementById('verificar-btn').addEventListener('click', verificarResposta);
    document.getElementById('next-btn').addEventListener('click', mostrarProximaCedula);
    document.getElementById('cedula-img').addEventListener('click', alternarImagem);
    document.getElementById('cedula-img').addEventListener('click', adicionarPontosPorClique);
    custoDicaImg.addEventListener('click', mostrarDica);

// Inicializa o jogo
    carregarCedula();
});