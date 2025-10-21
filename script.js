// =================================================================
// 1. CONFIGURAÇÕES E DADOS DO JOGO
// =================================================================

// --- COLOQUE OS NOMES DAS SUAS IMAGENS DE FUNDO AQUI ---
const backgroundImages = {
  start: 'img/background-start.jpg', // Fundo da tela de início
  quiz: [
    'img/background-quiz-1.jpg', // Fundo durante as perguntas - opção 1
    'img/background-quiz-2.jpg', // Fundo durante as perguntas - opção 2
    'img/background-quiz-3.jpg', // Fundo durante as perguntas - opção 3
  ],
  result: 'img/background-result.jpg', // Fundo da tela de resultado
}
// ---------------------------------------------------------

const perguntas = [
  {
    pergunta: 'Um dragão ameaça uma vila próxima. Qual é a sua primeira ação?',
    respostas: [
      { texto: 'Confronto o dragão diretamente.', pontos: 30 },
      { texto: 'Pesquiso suas fraquezas primeiro.', pontos: 20 },
      { texto: 'Lanço um ataque furtivo.', pontos: 10 },
    ],
    background: 'img/background-quiz-1.jpg',
  },
  {
    pergunta: 'Qual qualidade você mais valoriza em um companheiro de equipe?',
    respostas: [
      { texto: 'Coragem e lealdade.', pontos: 30 },
      { texto: 'Sabedoria e estratégia.', pontos: 20 },
      { texto: 'Agilidade e independência.', pontos: 10 },
    ],
    background: 'img/background-quiz-2.jpg',
  },
  {
    pergunta: 'Você encontra um artefato mágico poderoso. O que você faz?',
    respostas: [
      { texto: 'Uso-o para proteger o reino.', pontos: 30 },
      { texto: 'Estudo seus segredos para obter conhecimento.', pontos: 20 },
      { texto: 'Mantenho-o em segredo para meu próprio uso.', pontos: 10 },
    ],
    background: 'img/background-quiz-3.jpg',
  },
]

const personagens = [
  {
    nome: 'Brennus, o Guerreiro',
    descricao:
      "Conhecido como 'A Muralha de Aethelgard', Brennus é um guerreiro leal e inabalável. Ele acredita que a força e a honra são o caminho para a verdadeira justiça.",
    imagem: 'img/brennus_guerreiro.png',
    minPontos: 70,
  },
  {
    nome: 'Elara, a Maga',
    descricao:
      'Uma estudiosa das artes arcanas, Elara busca conhecimento acima de tudo. Ela usa sua sabedoria para desvendar mistérios e controlar o campo de batalha com feitiços.',
    imagem: 'img/maga.png',
    minPontos: 40,
  },
  {
    nome: 'Kael, o Ladino',
    descricao:
      'Ágil e astuto, Kael prefere as sombras. Ele acredita que os fins justificam os meios e usa sua furtividade para atingir seus objetivos sem ser visto.',
    imagem: 'img/ladino.png',
    minPontos: 0,
  },
]

// =================================================================
// 2. SELEÇÃO DOS ELEMENTOS DO HTML
// =================================================================
const startButton = document.getElementById('start-button')
const playAgainButton = document.getElementById('play-again-button')
const enableAudioBtn = document.getElementById('enable-audio')

const startScreen = document.getElementById('start-screen')
const quizScreen = document.getElementById('quiz-screen')
const resultScreen = document.getElementById('result-screen')

const questionText = document.getElementById('question-text')
const answerButtons = document.getElementById('answer-buttons')
const questionCounter = document.getElementById('question-counter')
const progressFill = document.getElementById('progress-fill')
const progressText = document.getElementById('progress-text')
const reviewList = document.getElementById('review-list')

// =================================================================
// 3. VARIÁVEIS E FUNÇÕES DO JOGO
// =================================================================
let pontuacaoTotal = 0
let perguntaAtualIndex = 0
let respostasEscolhidas = [] // Array para armazenar as respostas escolhidas

function aplicarFundo(tipo) {
  // Remove todas as classes de fundo existentes
  document.body.classList.remove(
    'bg-start',
    'bg-quiz-1',
    'bg-quiz-2',
    'bg-quiz-3',
    'bg-result'
  )

  // Adiciona a classe correspondente ao tipo de fundo
  switch (tipo) {
    case 'start':
      document.body.classList.add('bg-start')
      break
    case 'quiz':
      // Seleciona aleatoriamente uma das 3 imagens de quiz
      const quizNumber = Math.floor(Math.random() * 3) + 1
      document.body.classList.add(`bg-quiz-${quizNumber}`)
      break
    case 'result':
      document.body.classList.add('bg-result')
      break
  }
}

function iniciarQuiz() {
  startScreen.classList.add('hide')
  quizScreen.classList.remove('hide')
  resultScreen.classList.add('hide') // Garante que a tela de resultado está escondida
  perguntaAtualIndex = 0
  pontuacaoTotal = 0
  respostasEscolhidas = [] // Reset das respostas
  aplicarFundo('quiz')
  mostrarPergunta()
}

function mostrarPergunta() {
  resetarEstado()
  const perguntaAtual = perguntas[perguntaAtualIndex]
  questionText.innerText = perguntaAtual.pergunta
  questionCounter.innerText = `Pergunta ${perguntaAtualIndex + 1} de ${
    perguntas.length
  }`

  // Atualiza barra de progresso
  const progressPercentage = ((perguntaAtualIndex + 1) / perguntas.length) * 100
  progressFill.style.width = progressPercentage + '%'
  progressText.innerText = `Pergunta ${perguntaAtualIndex + 1} de ${
    perguntas.length
  }`

  // Aplica o fundo específico da pergunta
  document.body.style.backgroundImage = `url('${perguntaAtual.background}')`
  document.body.style.backgroundSize = 'contain'
  document.body.style.backgroundRepeat = 'no-repeat'
  document.body.style.backgroundPosition = 'center center'
  document.body.style.backgroundColor = '#1a1a1a'

  perguntaAtual.respostas.forEach((resposta) => {
    const button = document.createElement('button')
    button.innerText = resposta.texto
    button.addEventListener('click', () =>
      selecionarResposta(
        resposta.pontos,
        resposta.texto,
        perguntaAtual.pergunta
      )
    )
    answerButtons.appendChild(button)
  })
}

function resetarEstado() {
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild)
  }
}

function selecionarResposta(pontos, textoResposta, textoPergunta) {
  pontuacaoTotal += pontos

  // Armazena a resposta escolhida
  respostasEscolhidas.push({
    pergunta: textoPergunta,
    resposta: textoResposta,
    pontos: pontos,
  })

  perguntaAtualIndex++

  if (perguntaAtualIndex < perguntas.length) {
    mostrarPergunta()
  } else {
    mostrarResultado()
  }
}

function mostrarResultado() {
  quizScreen.classList.add('hide')
  resultScreen.classList.remove('hide')
  aplicarFundo('result')

  let personagemFinal
  if (pontuacaoTotal >= personagens[0].minPontos) {
    personagemFinal = personagens[0]
  } else if (pontuacaoTotal >= personagens[1].minPontos) {
    personagemFinal = personagens[1]
  } else {
    personagemFinal = personagens[2]
  }

  document.getElementById('character-name').innerText = personagemFinal.nome
  document.getElementById('character-image').src = personagemFinal.imagem
  document.getElementById('character-description').innerText =
    personagemFinal.descricao
  document.getElementById('final-score').innerText = pontuacaoTotal

  // Mostrar revisão das respostas
  mostrarRevisaoRespostas()
}

function mostrarRevisaoRespostas() {
  reviewList.innerHTML = ''
  respostasEscolhidas.forEach((item, index) => {
    const reviewItem = document.createElement('div')
    reviewItem.className = 'review-item'
    reviewItem.innerHTML = `
      <div class="review-question">${index + 1}. ${item.pergunta}</div>
      <div class="review-answer">→ ${item.resposta} (${
      item.pontos
    } pontos)</div>
    `
    reviewList.appendChild(reviewItem)
  })
}

// Controle de áudio
const bgMusic = document.getElementById('bg-music')
if (enableAudioBtn && bgMusic) {
  enableAudioBtn.addEventListener('click', () => {
    bgMusic.volume = 0.5
    bgMusic.play()
    enableAudioBtn.style.display = 'none'
  })
}

// =================================================================
// 4. INICIALIZAÇÃO DO JOGO E EVENTOS
// =================================================================

// Define o fundo inicial assim que a página carregar
document.addEventListener('DOMContentLoaded', () => {
  aplicarFundo('start')
  const bgMusic = document.getElementById('bg-music')
  if (bgMusic) {
    bgMusic.volume = 0.5

    // Tenta tocar imediatamente
    const playPromise = bgMusic.play()
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Se falhar, tenta novamente após qualquer interação
        document.addEventListener(
          'click',
          () => {
            bgMusic.play().catch(() => {})
          },
          { once: true }
        )

        document.addEventListener(
          'keydown',
          () => {
            bgMusic.play().catch(() => {})
          },
          { once: true }
        )

        document.addEventListener(
          'touchstart',
          () => {
            bgMusic.play().catch(() => {})
          },
          { once: true }
        )
      })
    }
  }
})

startButton.addEventListener('click', () => {
  const bgMusic = document.getElementById('bg-music')
  if (bgMusic && bgMusic.paused) {
    bgMusic.play().catch(() => {})
  }
  iniciarQuiz()
})

playAgainButton.addEventListener('click', () => {
  const bgMusic = document.getElementById('bg-music')
  if (bgMusic && bgMusic.paused) {
    bgMusic.play().catch(() => {})
  }
  iniciarQuiz()
})
