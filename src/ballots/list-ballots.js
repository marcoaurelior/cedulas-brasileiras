document.addEventListener('DOMContentLoaded', () => {
    const cedulas = [
        {
            value: 1,
            frente: '../assets/cedulas/1real-1994-frente.jpg',
            verso: '../assets/cedulas/1real-1994-verso.jpg',
            ano: 1994,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 1,00\nPeríodo de Circulação: 1994-1997"
        },
        {
            value: 1,
            frente: '../assets/cedulas/1real-1994-frente-2.jpg',
            verso: '../assets/cedulas/1real-1994-verso-2.jpg',
            ano: 1994,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 1,00\nPeríodo de Circulação: 1994-1997"
        },
        {
            value: 1,
            frente: '../assets/cedulas/1real-1997-frente.jpg',
            verso: '../assets/cedulas/1real-1997-verso.jpg',
            ano: 1997,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 1,00\nPeríodo de Circulação: 1997-2003"
        },
        {
            value: 1,
            frente: '../assets/cedulas/1real-2003-frente.jpg',
            verso: '../assets/cedulas/1real-2003-verso.jpg',
            ano: 2003,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 1,00\nPeríodo de Circulação: 2003-Atualidade"
        },
        {
            value: 2,
            frente: '../assets/cedulas/2reais-2001-frente.jpg',
            verso: '../assets/cedulas/2reais-2003-verso.jpg',
            ano: 2001,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 2,00\nPeríodo de Circulação: 2001-2003"
        },
        {
            value: 2,
            frente: '../assets/cedulas/2reais-2013-frente.jpg',
            verso: '../assets/cedulas/2reais-2013-verso.jpg',
            ano: 2013,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 2,00 (2ª família de cédulas do Real)\nPeríodo de Circulação: 29.7.2013 (em circulação)"
        },
        {
            value: 2,
            frente: '../assets/cedulas/2reais-2017-frente.jpg',
            verso: '../assets/cedulas/2reais-2017-verso.jpg',
            ano: 2017,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 2,00\nPeríodo de Circulação: 2017-Atualidade"
        },
        {
            value: 5,
            frente: '../assets/cedulas/5reais-2013-frente.jpg',
            verso: '../assets/cedulas/5reais-2013-verso.jpg',
            ano: 2013,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 5,00\nPeríodo de Circulação: 2013-Atualidade"
        },
        {
            value: 5,
            frente: '../assets/cedulas/5reais-1997-frente.jpg',
            verso: '../assets/cedulas/5reais-1997-verso.jpg',
            ano: 1997,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 5,00\nPeríodo de Circulação: 1997-2003"
        },
        {
            value: 5,
            frente: '../assets/cedulas/5reais-1994-frente-2.jpg',
            verso: '../assets/cedulas/5reais-1994-verso-3.jpg',
            ano: 1994,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 5,00\nPeríodo de Circulação: 1994-1997"
        },
        {
            value: 5,
            frente: '../assets/cedulas/5reais-1994-frente3.jpg',
            verso: '../assets/cedulas/5reais-1994-verso.jpg',
            ano: 1994,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 5,00\nPeríodo de Circulação: 1994-1997"
        },
        {
            value: 5,
            frente: '../assets/cedulas/5reais-1994-frente.jpg',
            verso: '../assets/cedulas/5reais-1994-verso-2.jpg',
            ano: 1994,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 5,00\nPeríodo de Circulação: 1994-1997"
        },
        {
            value: 10,
            frente: '../assets/cedulas/10reais-1994-frente.jpg',
            verso: '../assets/cedulas/10reais-1994-verso.jpg',
            ano: 1994,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 10,00\nPeríodo de Circulação: 1994-1997"
        },
        {
            value: 10,
            frente: '../assets/cedulas/10reais-2000-frente.jpg',
            verso: '../assets/cedulas/10reais-2000-verso.jpg',
            ano: 2000,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 10,00\nPeríodo de Circulação: 2000-2012"
        },
        {
            value: 10,
            frente: '../assets/cedulas/10reais-2000-frente-2.jpg',
            verso: '../assets/cedulas/10reais-2000-verso-2.jpg',
            ano: 2000,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 10,00\nPeríodo de Circulação: 2000-2012"
        },
        {
            value: 10,
            frente: '../assets/cedulas/10reais-1994-frente-2.jpg',
            verso: '../assets/cedulas/10reais-1994-verso-2.jpg',
            ano: 1994,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 10,00\nPeríodo de Circulação: 1994-1997"
        },
        {
            value: 10,
            frente: '../assets/cedulas/10reais-1997-frente.jpg',
            verso: '../assets/cedulas/10reais-1997-verso.jpg',
            ano: 1997,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 10,00\nPeríodo de Circulação: 1997-2000"
        },
        {
            value: 10,
            frente: '../assets/cedulas/10reais-2012-frente.jpg',
            verso: '../assets/cedulas/10reais-2012-verso.jpg',
            ano: 2012,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 10,00\nPeríodo de Circulação: 2012-Atualidade"
        },
        {
            value: 10,
            frente: '../assets/cedulas/10reais-1994-frente-3.jpg',
            verso: '../assets/cedulas/10reais-1994-verso-3.jpg',
            ano: 1994,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 10,00\nPeríodo de Circulação: 1994-1997"
        },
        {
            value: 20,
            frente: '../assets/cedulas/20reais-2002-frente.jpg',
            verso: '../assets/cedulas/20reais-2002-verso.jpg',
            ano: 2002,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 20,00\nPeríodo de Circulação: 2002-2012"
        },
        {
            value: 20,
            frente: '../assets/cedulas/20reais-2012-frente.jpg',
            verso: '../assets/cedulas/20reais-2012-verso.jpg',
            ano: 2012,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 20,00\nPeríodo de Circulação: 2012-Atualidade"
        },
        {
            value: 50,
            frente: '../assets/cedulas/50reais-1994-frente-3.jpg',
            verso: '../assets/cedulas/50reais-1994-verso.jpg',
            ano: 1994,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 50,00\nPeríodo de Circulação: 1994-1997"
        },
        {
            value: 50,
            frente: '../assets/cedulas/50reais-2010-frente.jpg',
            verso: '../assets/cedulas/50reais-2010-verso.jpg',
            ano: 2010,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 50,00\nPeríodo de Circulação: 2010-Atualidade"
        },
        {
            value: 100,
            frente: '../assets/cedulas/100reais-2010-frente.jpg',
            verso: '../assets/cedulas/100reais-2010-verso.jpg',
            ano: 2010,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 100,00\nPeríodo de Circulação: 2010-Atualidade"
        },
        {
            value: 100,
            frente: '../assets/cedulas/100reais-1994-frente.jpg',
            verso: '../assets/cedulas/100reais-1994-verso.jpg',
            ano: 1994,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 100,00\nPeríodo de Circulação: 1994-1997"
        },
        {
            value: 100,
            frente: '../assets/cedulas/100reais-2010-frente.jpg',
            verso: '../assets/cedulas/100reais-2010-verso.jpg',
            ano: 2010,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 100,00\nPeríodo de Circulação: 2010-Atualidade"
        },
        {
            value: 200,
            frente: '../assets/cedulas/200reais-2020-frente.jpg',
            verso: '../assets/cedulas/200reais-2020-verso.jpg',
            ano: 2020,
            info: "Fabricante: Casa da Moeda do Brasil\nValor: R$ 200,00\nPeríodo de Circulação: 2020-Atualidade"
        }
    ];

    const container = document.getElementById('cedulas-container');
    const valueInput = document.getElementById('value-input');

    function renderCedulas(filteredCedulas) {
        container.innerHTML = ''; // Limpa o container antes de renderizar

        filteredCedulas.forEach(cedula => {
            const cedulaElement = document.createElement('div');
            cedulaElement.className = 'cedula';
            const formattedInfo = cedula.info.replace(/\n/g, '<br>');

            cedulaElement.innerHTML = `
        <img src="${cedula.frente}" alt="Frente da cédula" class="cedula-img frente">
        <img src="${cedula.verso}" alt="Verso da cédula" class="cedula-img verso" style="display: none;">
        <div class="cedula-info">${formattedInfo}</div>
      `;

            cedulaElement.addEventListener('click', () => {
                const frente = cedulaElement.querySelector('.frente');
                const verso = cedulaElement.querySelector('.verso');

                if (verso.style.display === 'none') {
                    verso.style.display = 'block';
                    frente.style.display = 'none';
                } else {
                    verso.style.display = 'none';
                    frente.style.display = 'block';
                }
            });

            container.appendChild(cedulaElement);
        });
    }

    function filterCedulas() {
        const value = parseInt(valueInput.value, 10);
        const filteredCedulas = isNaN(value) ? cedulas : cedulas.filter(c => c.value === value);
        renderCedulas(filteredCedulas);
    }

    valueInput.addEventListener('input', filterCedulas);

    renderCedulas(cedulas); // Renderiza todas as cédulas inicialmente
});