// Base de Dados da Linha do Tempo Interativa
const erasData = {
  "90s": {
    title: "1993 - 1999: O Início e a Era dos 16-bits",
    description: "Iniciado com 'FIFA International Soccer' (visão isométrica pioneira). Em 1997, veio o motor 3D e, no clássico FIFA 98: Road to World Cup, o jogo marcou época trazendo eliminatórias completas da Copa, partidas de futebol indoor (futsal) e a icônica trilha sonora 'Song 2' do Blur."
  },
  "00s": {
    title: "2000 - 2008: A Disputa pela Liderança",
    description: "Período em que a franquia disputou espaço acirrado com Winning Eleven/PES. A EA focou na ampliação sem precedentes de licenças de clubes e na criação da mecânica de cobrança de faltas por mira e controle de pressão de passe."
  },
  "09s": {
    title: "2009 - 2016: A Revolução do Ultimate Team",
    description: "O lançamento do modo Ultimate Team (FUT) no FIFA 09 mudou para sempre os eSports e o modelo de negócios da indústria. Em 2011, foi introduzida a 'Defesa Tática', aposentando a pressão automática de um único botão."
  },
  "17s": {
    title: "2017 - 2022: Engine Frostbite e Modo História",
    description: "Transição para o motor gráfico Frostbite (mesmo de Battlefield) e introdução do modo campanha 'A Jornada', focado na vida do jogador fictício Alex Hunter. Mais tarde, surge a tecnologia HyperMotion, capturando dados de partidas reais de 11v11."
  },
  "20s": {
    title: "2023 - Presente: A Era EA Sports FC",
    description: "Fim do contrato com a federação internacional FIFA. Renomeado para EA Sports FC, o jogo integrou atletas do futebol feminino ao mesmo ecossistema do Ultimate Team, aprimorou a tecnologia PlayStyles e manteve o topo dos eSports mundiais."
  }
};

// Seletores do DOM
const buttons = document.querySelectorAll(".era-btn");
const eraDetailsContainer = document.getElementById("eraDetails");

// Função para Atualização Dinâmica
function renderEra(eraKey) {
  const data = erasData[eraKey];
  if (data) {
    eraDetailsContainer.innerHTML = `
      <h3>${data.title}</h3>
      <p>${data.description}</p>
    `;
  }
}

// Event Listeners para os Botoes
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    
    const era = button.getAttribute("data-era");
    renderEra(era);
  });
});

// Inicialização da Era Padrão
renderEra("90s");
