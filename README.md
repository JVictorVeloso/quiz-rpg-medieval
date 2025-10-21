# 🏰 Quiz RPG - Descubra seu Herói

Um quiz interativo temático de RPG medieval onde você descobre qual classe de personagem combina mais com sua personalidade!

![Quiz RPG Preview](https://via.placeholder.com/800x400/1a1a1a/c5a265?text=Quiz+RPG+-+Aethelgard)

## 🎮 Sobre o Jogo

Bem-vindo a **Aethelgard**, um reino de magia antiga! Através de 3 perguntas estratégicas, descubra se você é:

- **🛡️ Brennus, o Guerreiro** - A Muralha de Aethelgard
- **🔮 Elara, a Maga** - Estudiosa das artes arcanas
- **🗡️ Kael, o Ladino** - Mestre das sombras

## ✨ Características

### 🎨 **Visual & Design**

- ✅ Fonte medieval temática (MedievalSharp)
- ✅ Backgrounds únicos para cada pergunta
- ✅ Efeitos de partículas (estrelas animadas)
- ✅ Interface translúcida com efeito glass
- ✅ Animações CSS suaves
- ✅ Ícones temáticos nos botões

### 📱 **Responsividade**

- ✅ Totalmente responsivo (Desktop, Tablet, Mobile)
- ✅ Interface adaptativa para touch
- ✅ Otimizado para diferentes resoluções

### 🎵 **Áudio**

- ✅ Trilha sonora de fundo automática
- ✅ Controle inteligente de autoplay
- ✅ Botão para ativar/desativar som

### 🎯 **Funcionalidades**

- ✅ Barra de progresso visual
- ✅ Sistema de pontuação inteligente
- ✅ Revisão completa das respostas escolhidas
- ✅ Múltiplos backgrounds dinâmicos
- ✅ Transições suaves entre telas

## 🚀 Como Usar

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/quiz-rpg.git
   cd quiz-rpg
   ```

2. **Abra o arquivo `index.html`** no seu navegador

3. **Ou hospede em um servidor web** para melhor experiência com áudio

## 📁 Estrutura do Projeto

```
quiz-rpg/
├── index.html          # Página principal
├── script.js           # Lógica do jogo
├── style.css           # Estilos e animações
├── README.md           # Documentação
├── img/                # Imagens do jogo
│   ├── background-start.jpg
│   ├── background-quiz-1.jpg
│   ├── background-quiz-2.jpg
│   ├── background-quiz-3.jpg
│   ├── background-result.jpg
│   ├── brennus_guerreiro.png
│   ├── maga.png
│   └── ladino.png
└── audio/              # Trilha sonora
    └── trilha.mp3
```

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Animações, responsividade e efeitos visuais
- **JavaScript ES6** - Lógica do jogo e interatividade
- **Google Fonts** - Fonte MedievalSharp
- **Web Audio API** - Controle de áudio

## 🎨 Recursos Visuais

### Paleta de Cores

- **Dourado Medieval**: `#c5a265`
- **Marrom Escuro**: `#5c4033`
- **Fundo Escuro**: `#1a1a1a`
- **Texto Claro**: `#ffffff`

### Efeitos Especiais

- Partículas animadas de estrelas
- Blur effects (backdrop-filter)
- Transições fadeInUp
- Hover animations nos botões

## 🔧 Personalização

### Adicionar Novas Perguntas

```javascript
const perguntas = [
  {
    pergunta: 'Sua nova pergunta aqui?',
    respostas: [
      { texto: 'Opção 1', pontos: 30 },
      { texto: 'Opção 2', pontos: 20 },
      { texto: 'Opção 3', pontos: 10 },
    ],
    background: 'img/nova-imagem.jpg',
  },
  // ... mais perguntas
]
```

### Adicionar Novos Personagens

```javascript
const personagens = [
  {
    nome: 'Novo Personagem',
    descricao: 'Descrição do personagem...',
    imagem: 'img/novo-personagem.png',
    minPontos: 50,
  },
  // ... mais personagens
]
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

- Abrir issues para reportar bugs
- Sugerir novas funcionalidades
- Enviar pull requests

## 👨‍💻 Autor

Desenvolvido com ❤️ por [Seu Nome]

---

⭐ Se você gostou do projeto, não esqueça de dar uma estrela no repositório!
