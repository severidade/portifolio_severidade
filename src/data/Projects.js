import Avatar from '../img/avatar.png'

const Projects = [
  {
    title: 'L.A.J.E',
    slug: 'laje',
    short_description:'Página com animações e experimentações de transição usando CSS e Javascript',
    introduction_description: 
      '<p><strong>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</strong></p>',
    description:
      '<p>al sit amet fermentum lorem lore</p>',
    img: Avatar,
    id: 1,
    deployLink: 'https://severidade.com.br/laje/',
  },
  {
    title: 'Vereda',
    slug: 'vereda',
    short_description:'Landing Page responsiva em WordPress',
    introduction_description: 
      '<p><strong>O Projeto Sustentabilidade na Vereda é uma iniciativa que busca melhorar a qualidade de vida das comunidades no Vale do Peruaçu por meio da implementação de tecnologias sociais de baixo custo.</strong></p>',
    description: '<p> Com foco no uso de aquecedores ecológicos e fornos solares, o projeto visa auxiliar no orçamento familiar, promovendo a redução do consumo de gás e da conta de energia elétrica.</p><p>Esse é um dos primeiros trabalhos web que fiz. Além de implementar e fazer o deploy de uma aplicação em <strong>WordPress</strong> tive o desafio de "domar" o CSS para criar os elementos diagonais vindos da peça impressa. Esse projeto foi o ponta pé para entender o funcionamento do <strong>z-index</strong> e dos <strong>Pseudo-Elements</strong> elementos do CSS.</p>',
    img: Avatar,
    id: 2,
    deployLink: 'http://severidade.com.br/vereda/',
  },
  {
    title: 'Easy cooking',
    slug: 'easycooking',
    short_description:'Aplicação React que funciona como um livro de receitas digital.',
    introduction_description: 
      '<p><strong>EasyCooking é uma aplicação React que funciona como um livro de receitas digital, permitindo que os usuários explorem uma variedade de receitas de coquetéis e refeições.</strong></p>',
    description:
      '<p> Ao fornecer uma <strong>interface intuitiva</strong> e fácil de usar, os usuários podem <strong>descobrir novas receitas</strong>, seguir instruções passo a passo e até mesmo salvar suas receitas favoritas ou finalizadas para referência futura.</p> <p>Com a ajuda das APIs <strong>TheCocktailDB</strong> e <strong>TheMealDB</strong>, a aplicação oferece um amplo e diversificado banco de dados de receitas para tornar a experiência culinária ainda mais emocionante e inspiradora.</p><p>Para facilitar a <strong>descoberta de receitas desenvolvemos uma série de filtros</strong> por nacionalidade, ingredientes, nomes de receitas e muito mais.</p>',
    img: Avatar,
    id: 3,
    deployLink: 'http://receitas.severidade.com.br/', // Link de implantação
    githubLink: 'https://github.com/severidade/receitas_app', // Link do GitHub
  },
  {
    title: 'TheBox Blog',
    slug: 'thebox',
    short_description:'Aplicação que adota a abordagem headless. Tive a oportunidade configurar e integrar o Sanity CMS com o React',
    introduction_description: 
      '<p><strong>Este blog em React adota a abordagem headless, na qual a camada de gerenciamento de conteúdo é separada da camada de apresentação..</strong></p>',
    description:
    "<p>Diferentemente dos CMS tradicionais, como o WordPress, essa separação permite que o conteúdo seja consumido por diferentes interfaces e dispositivos de forma mais flexível. Dos CMS headless disponíveis optei por usar o Sanity pela facilidade de instalação e configuração.</p><p>Essa experiência de configurar e integrar o Sanity com o React foi uma valiosa oportunidade de aprendizado e prática, permitindo que eu explorasse as capacidades do CMS headless e entendesse como ele pode ser utilizado para criar aplicações web mais dinâmicas e personalizáveis.</p><h2>Dependências</h2><ul><li>O <strong>ReactPlayer</strong>, usado na seção de vídeos, é uma biblioteca popular e poderosa para reprodução de mídia em aplicações React. Ela oferece uma maneira fácil de incorporar e controlar diferentes tipos de mídia, como vídeos e áudios, em componentes React.</li><li>Para a criação do Carrossel de imagens na página Home usei o <strong>Slick Carousel</strong> devido a sua facilidade de uso, configuração e API intuitiva.</li><li>Para adicionar o monitoramento do <strong>Google Analytics</strong> ao blog, utilizei a biblioteca <strong>React-GA4</strong>. Essa biblioteca simplifica o processo de configuração e rastreamento de eventos e métricas no Google Analytics para aplicativos React.</li></ul>",
    img: Avatar,
    id: 4,
    deployLink: 'http://blog.severidade.com.br/',
    githubLink: 'https://github.com/severidade/blog_sanity',
  },
  {
    title: 'Solar System',
    slug: 'solar_system',
    short_description:'Página que lista planetas do Sistema Solar e missões espaciais famosas.',
    introduction_description: 
      '<p><strong>Esta aplicação React, desenvolvida com componentes de classe, lista todos os planetas do Sistema Solar e também algumas das missões espaciais mais conhecidas.</strong></p>',
    description:'<p>Neste trabalho exercitei o uso de <strong>props</strong> e <strong>composição de componentes</strong>, conceitos fundamentais no desenvolvimento de aplicações React.</p><p>O design dessa aplicação foi desenvolvido utilizando o conceito de <strong>Mobile First</strong>.</p><p>Para a criação do Background em vídeo usei a <strong>biblioteca ReactPlayer</strong>.</p>',
    
    img: Avatar,
    id: 5,
    deployLink: 'http://solarsystem.severidade.com.br/',
    githubLink: 'https://github.com/severidade/solar_system',
  },
  {
    title: 'Shopping Cart',
    slug: 'shopping_cart',
    short_description:'Simulação de um comércio eletrônico que utiliza a API do Mercado Livre para consumir dados',
    introduction_description: 
      '<p>Esta página, desenvolvida em HTML, CSS e JavaScript, simula um comércio eletrônico e consome dados da <strong>API do Mercado Livre</strong></p>',
    description:'<p>Todo projeto é coberto por testes unitários com a estrutura de testes <strong>JEST</strong> e usa a ferramenta <strong>LINT</strong> para garantir a qualidade e a clareza do código.</p>',
    img: Avatar,
    id: 6,
    deployLink: 'https://shopping-cart-severidade.vercel.app/',
    githubLink: 'https://github.com/severidade/shopping_cart',
  },
  {
    title: 'Cicloturismo Agência',
    slug: 'cicloturismo',
    short_description:'Apresenta pacotes de cicloturismo de uma agência fictícia.',
    introduction_description: 
      '<p><strong>Esse é um projeto criado com o objetivo de apresentar pacotes de cicloturismo em Minas Gerais para uma agência fictícia.</strong></p>',
    description:'<p>Desenvolvido em <strong>React</strong> esta aplicação apresenta os componentes formatados com <strong>CSS Modules</strong>. Isso permite que a escrita do CSS ocorra de forma independente para cada módulo da aplicação. Com isso a customização dos estilos acontece individualmente sem o risco de que os estilos de um componente afete os outros.</p><p>Esta <strong>interface é responsiva</strong> e foi desenvolvida utilizando a abordagem <strong>Mobile First</strong> pois prioriza as necessidades dos usuários em dispositivos móveis. Ao implementar o conceito de Mobile First, é importante levar em consideração as limitações técnicas dos dispositivos móveis, como a tela pequena, interação com toques e ou recursos limitados - como processadores lentos e conexões de dados limitada.</p>',
    img: Avatar,
    id: 7,
    deployLink: 'https://biciminas.severidade.com.br/',
    githubLink: 'https://github.com/severidade/minas_rotas_react',
  },
  {
    title: 'Card Manager',
    slug: 'supertrunfo',
    short_description:'Aplicação que gerencia e cria cartas para um jogo no estilo SuperTrunfo.',
    introduction_description: 
      '<p><strong>Esta aplicação foi desenvolvida com o objetivo de criar e gerenciar cartas para um jogo no estilo SuperTrunfo.</strong></p>',
    description:'<h2>Importância deste projeto</h2><p>Quando lidamos com informações, existem <strong>quatro operações fundamentais</strong> que são cruciais para o sucesso de uma aplicação: <strong>Criar</strong> (create), <strong>Ler</strong> (read), <strong>Atualizar</strong> (update) e Excluir (delete).O projeto SuperTrufo representa o meu primeiro passo na realização de algumas dessas operações, com <strong>foco principal na criação, leitura e exclusão de informações</strong>.</p><p>A aplicação foi desenvolvida quando estudava na Trybe e foi originalmente criada como um <strong>componentes de classe</strong> que foram posteriormente <strong>transformados em um componentes funcionais</strong>.</p><p>Utilizei o <strong>Material UI</strong> para formatar alguns componentes de formulário.</p><h2>Habilidades</h2><ul><li>Leitura do estado de um componente e uso desse estado para alterar o que é exibido no navegador.</li><li>Inicialização de um componente com um estado pré-definido.</li><li>Atualização do estado de um componente em tempo real.</li><li>Captura de eventos utilizando a sintaxe do React.</li><li>Criação de formulários utilizando a sintaxe JSX.</li></ul>',
    img: Avatar,
    id: 8,
    deployLink: 'https://tryunfo.severidade.com.br/',
    githubLink: 'https://github.com/severidade/tryunfo',
  },
  {
    title: 'Wallet',
    slug: 'wallet',
    short_description:'Carteira digital para controle de gastos que converte valores de outras moedas para o Real.',
    introduction_description: 
      '<p><strong>Esta aplicação foi desenvolvida utilizando React e Redux, consumindo dados da API do awesomeapi para realizar a conversão de moedas.</p>',
    description:'<p>O objetivo principal do projeto é criar uma <strong>carteira de controle de gastos</strong> com a capacidade de converter para real gastos feitos em outras moedas.</p><h2>Habilidades</h2><p>Neste projeto, tive a oportunidade de demonstrar as seguintes habilidades:</p><ul><li>Configurar e conectar o Redux a uma aplicação React</li><li>Criar ações assíncronas na aplicação React que fazem uso de Redux</li></ul>',
    img: Avatar,
    id: 9,
    deployLink: 'http://wallet.severidade.com.br/',
    githubLink: 'https://github.com/severidade/wallet_project',
  },
  {
    title: 'Biodiversity Knowledge',
    slug: 'bhl',
    short_description:'Redesenho da plataforma Biodiversity Heritage Library.',
    introduction_description: 
      '<p>A Biblioteca de Patrimônio da Biodiversidade (BHL) é a maior biblioteca digital de acesso aberto do mundo para literatura e arquivos sobre biodiversidade.</p>',
    description:'<p>Minha contribuição neste projeto consistiu na <strong>recriação da página da BHL</strong>. Nessa abordagem renovada, introduzi <strong>soluções de usabilidade</strong> que foram desenvolvidas por mim, além de ter sido responsável por todo o <strong>desenvolvimento do front-end</strong> utilizando tecnologias como <strong>HTML</strong>, <strong>CSS</strong> e <strong>jQuery</strong>.</p>',
    img: Avatar,
    id: 10,
    deployLink: 'http://bhl.severidade.com.br/',
    githubLink: 'https://github.com/severidade/biodiversity_heritage_library',
  },
];

export default Projects; 