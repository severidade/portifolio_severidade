import Avatar from '../img/avatar.png'

const Projects = [
  {
    title: 'L.A.J.E',
    slug: 'laje',
    short_description:'lorem ipsum dolor sit amet, consect',
    description:
      '<p>al sit amet fermentum lorem lore</p>',
    img: Avatar,
    id: 1,
    deployLink: 'https://severidade.com.br/laje/',
  },
  {
    title: 'Sustentabilidade na Vereda',
    slug: 'vereda',
    short_description:'Landing Page responsiva em WordPress',
    description: '<p>O Projeto Sustentabilidade na Vereda é uma iniciativa inovadora que busca melhorar a qualidade de vida das comunidades no Vale do Peruaçu por meio da implementação de tecnologias sociais de baixo custo. Com foco no uso de aquecedores ecológicos e fornos solares, o projeto visa auxiliar no orçamento familiar, promovendo a redução do consumo de gás e da conta de energia elétrica.</p><p>Desenvolvi uma <strong>Landing Page</strong> responsiva em WordPress, que junto a outras peças impressas, tinham como objetivo a divulgação do projeto.<p>Esse é um dos primeiros trabalhos web que fiz. Além de implementar e fazer o deploy de uma aplicação em <strong>WordPress</strong> tive o desafio de "domar" o CSS para criar os elementos diagonais vindos da peça impressa. Esse projeto foi o ponta pé para entender o funcionamento do <strong>z-index</strong> e dos <strong>Pseudo-Elements</strong> elementos do CSS.</p>',
    img: Avatar,
    id: 2,
    deployLink: 'http://severidade.com.br/vereda/',
  },
  {
    title: 'Easy cooking',
    slug: 'easycooking',
    short_description:'lorem ipsum dolor sit amet, consect',
    description:
      '<p>EasyCooking é uma aplicação React que funciona como um livro de receitas digital, permitindo que os usuários explorem uma variedade de receitas de coquetéis e refeições. Ao fornecer uma interface intuitiva e fácil de usar, os usuários podem descobrir novas receitas, seguir instruções passo a passo e até mesmo salvar suas receitas favoritas ou finalizadas para referência futura. Com a ajuda das APIs TheCocktailDB e TheMealDB, a aplicação oferece um amplo e diversificado banco de dados de receitas para tornar a experiência culinária ainda mais emocionante e inspiradora. Para facilitar a descoberta de receitas desenvolvemos uma série de filtos por nacionalidade, ingredientes, nomes de receitas e muito mais.</p>',
    img: Avatar,
    id: 3,
    deployLink: 'http://receitas.severidade.com.br/', // Link de implantação
    githubLink: 'https://github.com/severidade/receitas_app', // Link do GitHub
  },
  {
    title: 'TheBox Blog',
    slug: 'thebox',
    short_description:'lorem ipsum dolor sit amet, consect',
    description:
    "<p>Este blog em React adota a abordagem headless, na qual a camada de gerenciamento de conteúdo é separada da camada de apresentação. Diferentemente dos CMS tradicionais, como o WordPress, essa separação permite que o conteúdo seja consumido por diferentes interfaces e dispositivos de forma mais flexível. Dos CMS headless disponíveis optei por usar o Sanity pela facilidade de instalação e configuração.</p><p>Essa experiência de configurar e integrar o Sanity com o React foi uma valiosa oportunidade de aprendizado e prática, permitindo que eu explorasse as capacidades do CMS headless e entendesse como ele pode ser utilizado para criar aplicações web mais dinâmicas e personalizáveis.</p><h2>Dependências</h2><ul><li>O ReactPlayer, usado na seção de vídeos, é uma biblioteca popular e poderosa para reprodução de mídia em aplicações React. Ela oferece uma maneira fácil de incorporar e controlar diferentes tipos de mídia, como vídeos e áudios, em componentes React.</li><li>Para a criação do Carrossel de imagens na página Home usei o Slick Carousel devido a sua facilidade de uso, configuração e API intuitiva.</li><li>Para adicionar o monitoramento do Google Analytics ao blog, utilizei a biblioteca React-GA4. Essa biblioteca simplifica o processo de configuração e rastreamento de eventos e métricas no Google Analytics para aplicativos React.</li></ul>",
    img: Avatar,
    id: 3,
    deployLink: 'http://blog.severidade.com.br/',
    githubLink: 'https://github.com/severidade/blog_sanity',
  },
  {
    title: 'Solar System',
    slug: 'solar_system',
    short_description:'Página que lista planetas do Sistema Solar e missões espaciais famosas.',
    description:'<p>Esta aplicação React, desenvolvida com componentes de classe, lista todos os planetas do Sistema Solar e também algumas das missões espaciais mais conhecidas. Nela exercitei o uso de props e composição de componentes, conceitos fundamentais no desenvolvimento de aplicações React.</p><p>O design dessa aplicação foi desenvolvido utilizando o conceito de Mobile First.</p><p>Para a criação do Background em vídeo usei a biblioteca ReactPlayer.</p>',
    img: Avatar,
    id: 4,
    deployLink: 'http://solarsystem.severidade.com.br/',
    githubLink: 'https://github.com/severidade/solar_system',
  },
  {
    title: 'Shopping Cart',
    slug: 'shopping_cart',
    short_description:'Página simula um comércio eletrônico e utiliza a API do Mercado Livre para consumir dados',
    description:'<p>Esta página, desenvolvida em HTML, CSS e JavaScript, simula um comércio eletrônico e consome dados da <strong>API do Mercado Livre</strong>.</p><p>Todo projeto é coberto por testes unitários com a estrutura de testes <strong>JEST</strong> e usa a ferramenta LINT para garantir a qualidade e a clareza do código.</p>',
    img: Avatar,
    id: 5,
    deployLink: 'https://shopping-cart-severidade.vercel.app/',
    githubLink: 'https://github.com/severidade/shopping_cart',
  },
  {
    title: 'Cicloturismo Agência',
    slug: 'cicloturismo',
    short_description:'Apresenta pacotes de cicloturismo em Minas Gerais de uma agência de turismo fictícia',
    description:'<p>Esse é um projeto criado com o objetivo de apresentar pacotes de cicloturismo em Minas Gerais de uma agência fictícia. O projeto foi desenvolvido usando React e tem como objetivo ser uma plataforma de apresentação desses pacotes.</p><p>Os componentes desta aplicação foram formatados com CSS Modules.Este conceito permite a escrita do CSS de forma independente para cada módulo da aplicação. Com isso a customização dos estilos acontece individualmente sem o risco de que os estilos de um componente afete os outros.</p><p>Esta interface é responsiva e foi desenvolvida utilizando a abordagem Mobile First pois prioriza as necessidades dos usuários em dispositivos móveis. Ao implementar o conceito de Mobile First, é importante levar em consideração as limitações técnicas dos dispositivos móveis, como a tela pequena, interação com toques e ou recursos limitados - como processadores lentos e conexões de dados limitada.</p>',
    img: Avatar,
    id: 6,
    deployLink: 'https://biciminas.severidade.com.br/',
    githubLink: 'https://github.com/severidade/minas_rotas_react',
  },
  {
    title: 'SuperTrunfo Card Manager',
    slug: 'supertrunfo',
    short_description:'Aplicação que gerencia e cria cartas para um jogo no estilo SuperTrunfo.',
    description:'<p>Esta aplicação foi desenvolvida com o objetivo de criar e gerenciar cartas para um jogo no estilo SuperTrunfo, demonstrando a implementação das seguintes habilidades:</p><ul><li>Leitura do estado de um componente e uso desse estado para alterar o que é exibido no navegador.</li><li>Inicialização de um componente com um estado pré-definido.</li><li>Atualização do estado de um componente em tempo real.</li><li>Captura de eventos utilizando a sintaxe do React.</li><li>Criação de formulários utilizando a sintaxe JSX.</li></ul><h3>Importância deste projeto</h3><p>Quando lidamos com informações, existem quatro operações fundamentais que são cruciais para o sucesso de uma aplicação: Criar (create), Ler (read), Atualizar (update) e Excluir (delete). O projeto SuperTrufo representa o meu primeiro passo na realização de algumas dessas operações, com foco principal na criação, leitura e exclusão de informações. A aplicação foi desenvolvida quando estudava na Trybe e foi originalmente criada como um componentes de classe que foram posteriormente transformados em um componentes funcionais.</p><p>Utilizei o Material UI para formatar alguns componentes de formulário.</p>',
    img: Avatar,
    id: 7,
    deployLink: 'https://tryunfo.severidade.com.br/',
    githubLink: 'https://github.com/severidade/tryunfo',
  },
  {
    title: 'Wallet',
    slug: 'wallet',
    short_description:'Esta aplicação consome dados da API do awesomeapi para criar uma carteira de controle de gastos com a capacidade de converter gastos em outras moedas para o Real.',
    description:'<p>Esta aplicação foi desenvolvida utilizando React e Redux, consumindo dados da API do awesomeapi para realizar a conversão de moedas. O objetivo principal do projeto é criar uma carteira de controle de gastos com a capacidade de converter para real gastos feitos em outras moedas.</p><h3>Habilidades Demonstradas</h3><p>Neste projeto, tive a oportunidade de demonstrar as seguintes habilidades:</p><ul><li>Configurar e conectar o Redux a uma aplicação React</li><li>Criar ações assíncronas na aplicação React que fazem uso de Redux</li></ul>',
    img: Avatar,
    id: 8,
    deployLink: 'http://wallet.severidade.com.br/',
    githubLink: 'https://github.com/severidade/wallet_project',
  },
];

export default Projects; 