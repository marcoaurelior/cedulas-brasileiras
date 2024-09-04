document.addEventListener('DOMContentLoaded', () => {
  const cedulas = [
    { frente: '../assets/cedulas/1real-1994-frente.jpg', verso: '../cedulas/1real-1994-verso.jpg', ano: 1994, info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 1,00\nPeríodo de Circulação: 1994-1997" },
    { frente: '../assets/cedulas/1real-1994-frente-2.jpg', verso: '../assets/cedulas/1real-1994-verso-2.jpg', ano: 1994, info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 1,00\nPeríodo de Circulação: 1994-1997" },
    { frente: '../assets/cedulas/1real-1997-frente.jpg', verso: '../assets/cedulas/1real-1997-verso.jpg', ano: 1997, info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 1,00\nPeríodo de Circulação: 1997-2003" },
    { frente: '../assets/cedulas/1real-2003-frente.jpg', verso: '../assets/cedulas/1real-2003-verso.jpg', ano: 2003, info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 1,00\nPeríodo de Circulação: 2003-Atualidade" },
    { frente: '../assets/cedulas/2reais-2001-frente.jpg', verso: '../assets/cedulas/2reais-2003-verso.jpg', ano: 2001, info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 2,00\nPeríodo de Circulação: 2001-2003" },
    { frente: '../assets/cedulas/2reais-2013-frente.jpg', verso: '../assets/cedulas/2reais-2013-verso.jpg', ano: 2013, info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 2,00 (2ª família de cédulas do Real)\nPeríodo de Circulação: 29.7.2013 (em circulação)" },
    { frente: '../assets/cedulas/2reais-2017-frente.jpg', verso: '../assets/cedulas/2reais-2017-verso.jpg', ano: 2017, info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 2,00\nPeríodo de Circulação: 2017-Atualidade" },
    { frente: '../assets/cedulas/5reais-2013-frente.jpg', verso: '../assets/cedulas/5reais-2013-verso.jpg', ano: 2013, info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 5,00\nPeríodo de Circulação: 2013-Atualidade" },
    { frente: '../assets/cedulas/5reais-1997-frente.jpg', verso: '../assets/cedulas/5reais-1997-verso.jpg', ano: 1997, info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 5,00\nPeríodo de Circulação: 1997-2003" },
    { frente: '../assets/cedulas/5reais-1994-frente-2.jpg', verso: '../assets/cedulas/5reais-1994-verso-3.jpg', ano: 1994, info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 5,00\nPeríodo de Circulação: 1994-1997" },
    { frente: '../assets/cedulas/5reais-1994-frente3.jpg', verso: '../assets/cedulas/5reais-1994-verso.jpg', ano: 1994, info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 5,00\nPeríodo de Circulação: 1994-1997" },
    { frente: '../assets/cedulas/5reais-1994-frente.jpg', verso: '../assets/cedulas/5reais-1994-verso-2.jpg', ano: 1994, info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 5,00\nPeríodo de Circulação: 1994-1997" },
    { frente: '../assets/cedulas/10reais-1994-frente.jpg', verso: '../assets/cedulas/10reais-1994-verso.jpg', ano: 1994, info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 10,00\nPeríodo de Circulação: 1994-1997" },
    { frente: '../assets/cedulas/10reais-2000-frente.jpg', verso: '../assets/cedulas/10reais-2000-verso.jpg', ano: 2000, info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 10,00\nPeríodo de Circulação: 2000-2012" },
    { frente: '../assets/cedulas/10reais-2000-frente-2.jpg', verso: '../assets/cedulas/10reais-2000-verso-2.jpg', ano: 2000, info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 10,00\nPeríodo de Circulação: 2000-2012" },
    { frente: '../assets/cedulas/10reais-1994-frente-2.jpg', verso: '../assets/cedulas/10reais-1994-verso-2.jpg', ano: 1994, info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 10,00\nPeríodo de Circulação: 1994-1997" },
    { frente: '../assets/cedulas/10reais-1997-frente.jpg', verso: '../assets/cedulas/10reais-1997-verso.jpg', ano: 1997, info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 10,00\nPeríodo de Circulação: 1997-2000" },
    { frente: '../assets/cedulas/10reais-2012-frente.jpg', verso: '../assets/cedulas/10reais-2012-verso.jpg', ano: 2012, info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 10,00\nPeríodo de Circulação: 2012-Atualidade" },
    { frente: '../assets/cedulas/10reais-1994-frente-3.jpg', verso: '../assets/cedulas/10reais-1994-verso-3.jpg', ano: 1994, info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 10,00\nPeríodo de Circulação: 1994-1997" },
    { frente: '../assets/cedulas/20reais-2002-frente.jpg', verso: '../assets/cedulas/20reais-2002-verso.jpg', ano: 2002, info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 20,00\nPeríodo de Circulação: 2002-2012" },
    { frente: '../assets/cedulas/20reais-2012-frente.jpg', verso: '../assets/cedulas/20reais-2012-verso.jpg', ano: 2012, info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 20,00\nPeríodo de Circulação: 2012-Atualidade" },
    { frente: '../assets/cedulas/50reais-1994-frente-3.jpg', verso: '../assets/cedulas/50reais-1994-verso.jpg', ano: 1994, info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 50,00\nPeríodo de Circulação: 1994-1997" },
    { frente: '../assets/cedulas/50reais-2010-frente.jpg', verso: '../assets/cedulas/50reais-2010-verso.jpg', ano: 2010, info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 50,00\nPeríodo de Circulação: 2010-Atualidade" },
    { frente: '../assets/cedulas/50reais-1994-frente.png', verso: '../assets/cedulas/50reais-1994-verso.png', ano: 1994, info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 50,00\nPeríodo de Circulação: 1994-1997" },
    { frente: '../assets/cedulas/50reais-1994-frente-2.jpg', verso: '../assets/cedulas/50reais-1994-verso-2.jpg', ano: 1994, info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 50,00\nPeríodo de Circulação: 1994-1997" },
    { frente: '../assets/cedulas/100reais-1994-frente.jpg', verso: '../assets/cedulas/100reais-1994-verso.jpg', ano: 1994, info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 100,00\nPeríodo de Circulação: 1994-1997" },
    { frente: '../assets/cedulas/100reais-1994-frente-2.jpg', verso: '../assets/cedulas/100reais-1994-verso-2.jpg', ano: 1994, info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 100,00\nPeríodo de Circulação: 1994-1997" },
    { frente: '../assets/cedulas/100reais-2010-frente.jpg', verso: '../assets/cedulas/100reais-2010-verso.jpg', ano: 2010, info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 100,00\nPeríodo de Circulação: 2010-Atualidade" },
    { frente: '../assets/cedulas/200reais-2020-frente.jpg', verso: '../assets/cedulas/200reais-2020-verso.jpg', ano: 2020, info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 200,00\nPeríodo de Circulação: 2020-Atualidade" }
  ];

let cedulasEmbaralhadas = [];
  let cedulaAtual = 0;
  let mostrandoFrente = true;

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

    const cedula = cedulasEmbaralhadas[cedulaAtual];
    document.getElementById('cedula-img').src = mostrandoFrente ? cedula.frente : cedula.verso;
    document.getElementById('cedula-img').style.display = 'block';
    document.getElementById('info-box').style.display = 'none'; // Esconde a caixa de informações
    document.getElementById('next-btn').style.display = 'none'; // Esconde o botão "Próxima" inicialmente

    // Exibe novamente os elementos
    document.getElementById('dica').style.display = 'block';
    document.getElementById('ano-input').style.display = 'block';
    document.getElementById('verificar-btn').style.display = 'block';

    atualizarDica(cedula.ano);
  }

  function atualizarDica(anoCorreto) {
    const dica = document.getElementById('dica');
    const intervalo = 10; // Intervalo de 10 anos

    // Gera um ponto aleatório dentro do intervalo permitido para o início do período
    const anoInicio = Math.max(1900, anoCorreto - intervalo);
    const anoFim = Math.min(2024, anoCorreto + intervalo);

    // Escolhe aleatoriamente o início do período
    const inicioDica = Math.floor(Math.random() * (anoFim - anoInicio - intervalo + 1)) + anoInicio;
    const fimDica = inicioDica + intervalo;

    // Formata a dica
    dica.textContent = `Dica: Entre ${inicioDica} e ${fimDica}`;
  }

  function verificarResposta() {
    const anoEscolhido = parseInt(document.getElementById('ano-input').value.trim(), 10);
    const anoCorreto = cedulasEmbaralhadas[cedulaAtual].ano;

    if (isNaN(anoEscolhido)) {
      alert('Por favor, insira um ano válido.');
      return;
    }

    const mensagem = anoEscolhido === anoCorreto
      ? `Correto! A cédula é de ${anoCorreto}.`
      : `Errado! A cédula é de ${anoCorreto}.`;

    document.getElementById('ano-input').value = '';
    document.getElementById('info-box').style.display = 'block'; // Exibe a caixa de informações
    document.getElementById('info-text').textContent = cedulasEmbaralhadas[cedulaAtual].info;
    document.getElementById('next-btn').style.display = 'block'; // Exibe o botão "Próxima"
    document.getElementById('dica').style.display = 'none'; // Esconde a dica
    document.getElementById('ano-input').style.display = 'none'; // Esconde a caixa de texto
    document.getElementById('verificar-btn').style.display = 'none'; // Esconde o botão "Verificar"

    alert(mensagem);
  }

  function mostrarProximaCedula() {
    cedulaAtual = (cedulaAtual + 1) % cedulasEmbaralhadas.length;
    mostrandoFrente = true; // Reseta para mostrar a frente da próxima cédula
    carregarCedula();
  }

  function alternarImagem() {
    mostrandoFrente = !mostrandoFrente;
    document.getElementById('cedula-img').src = mostrandoFrente ? cedulasEmbaralhadas[cedulaAtual].frente : cedulasEmbaralhadas[cedulaAtual].verso;
  }

  document.getElementById('verificar-btn').addEventListener('click', verificarResposta);
  document.getElementById('next-btn').addEventListener('click', mostrarProximaCedula);
  document.getElementById('cedula-img').addEventListener('click', alternarImagem);

  // Inicializa o jogo
  carregarCedula();
});
