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
  },
  {
    title: 'Sustentabilidade na Vereda',
    slug: 'vereda',
    short_description:'Landing Page responsiva em WordPress',
    description: '<p>O Projeto Sustentabilidade na Vereda é uma iniciativa inovadora que busca melhorar a qualidade de vida das comunidades no Vale do Peruaçu por meio da implementação de tecnologias sociais de baixo custo. Com foco no uso de aquecedores ecológicos e fornos solares, o projeto visa auxiliar no orçamento familiar, promovendo a redução do consumo de gás e da conta de energia elétrica.</p><p>Desenvolvi uma <strong>Landing Page</strong> responsiva em WordPress, que junto a outras peças impressas, tinham como objetivo a divulgação do projeto.<p>Esse é um dos primeiros trabalhos web que fiz. Além de implementar e fazer o deploy de uma aplicação em <strong>WordPress</strong> tive o desafio de "domar" o CSS para criar os elementos diagonais vindos da peça impressa. Esse projeto foi o ponta pé para entender o funcionamento do <strong>z-index</strong> e dos <strong>Pseudo-Elements</strong> elementos do CSS.</p>',
    img: Avatar,
    id: 2,
  },
  {
    title: 'Easy cooking',
    slug: 'easycooking',
    short_description:'lorem ipsum dolor sit amet, consect',
    description:
      '<p>EasyCooking é uma aplicação React que funciona como um livro de receitas digital, permitindo que os usuários explorem uma variedade de receitas de coquetéis e refeições. Ao fornecer uma interface intuitiva e fácil de usar, os usuários podem descobrir novas receitas, seguir instruções passo a passo e até mesmo salvar suas receitas favoritas ou finalizadas para referência futura. Com a ajuda das APIs TheCocktailDB e TheMealDB, a aplicação oferece um amplo e diversificado banco de dados de receitas para tornar a experiência culinária ainda mais emocionante e inspiradora. Para facilitar a descoberta de receitas desenvolvemos uma série de filtos por nacionalidade, ingredientes, nomes de receitas e muito mais.</p>',
    img: Avatar,
    id: 3,
  },
  {
    title: 'TheBox Blog',
    slug: 'thebox',
    short_description:'lorem ipsum dolor sit amet, consect',
    description:
    "<p>Este blog em React adota a abordagem headless, na qual a camada de gerenciamento de conteúdo é separada da camada de apresentação. Diferentemente dos CMS tradicionais, como o WordPress, essa separação permite que o conteúdo seja consumido por diferentes interfaces e dispositivos de forma mais flexível. Dos CMS headless disponíveis optei por usar o Sanity pela facilidade de instalação e configuração.</p><p>Essa experiência de configurar e integrar o Sanity com o React foi uma valiosa oportunidade de aprendizado e prática, permitindo que eu explorasse as capacidades do CMS headless e entendesse como ele pode ser utilizado para criar aplicações web mais dinâmicas e personalizáveis.</p><h2>Dependências</h2><ul><li>O ReactPlayer, usado na seção de vídeos, é uma biblioteca popular e poderosa para reprodução de mídia em aplicações React. Ela oferece uma maneira fácil de incorporar e controlar diferentes tipos de mídia, como vídeos e áudios, em componentes React.</li><li>Para a criação do Carrossel de imagens na página Home usei o Slick Carousel devido a sua facilidade de uso, configuração e API intuitiva.</li><li>Para adicionar o monitoramento do Google Analytics ao blog, utilizei a biblioteca React-GA4. Essa biblioteca simplifica o processo de configuração e rastreamento de eventos e métricas no Google Analytics para aplicativos React.</li></ul>",
    img: Avatar,
    id: 3,
  },
  {
    title: 'Solar System',
    slug: 'solar_system',
    short_description:'Minha primeira aplicação React',
    description:'<p>Esta aplicação React, desenvolvida com componentes de classe, lista todos os planetas do Sistema Solar e também algumas das missões espaciais mais conhecidas. Nela exercitei o uso de props e composição de componentes, conceitos fundamentais no desenvolvimento de aplicações React.</p><p>O design dessa aplicação foi desenvolvido utilizando o conceito de Mobile First.</p><p>Para a criação do Background em vídeo usei a biblioteca ReactPlayer.</p>',
    img: Avatar,
    id: 4,
  },
];

export default Projects; 