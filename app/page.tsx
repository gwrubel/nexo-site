const projects = [
  {
    number: "01",
    title: "Aurora Finance",
    description:
      "Uma experiência financeira mais clara, humana e simples — do primeiro acesso à visão completa da vida financeira.",
    tags: ["Product Design", "UX Research", "Interface"],
    accent: "coral",
    type: "Produto digital",
  },
  {
    number: "02",
    title: "Vértice Studio",
    description:
      "Identidade e presença digital para um estúdio criativo que precisava transformar personalidade em uma marca memorável.",
    tags: ["Branding", "Web Design", "Direção visual"],
    accent: "blue",
    type: "Marca & website",
  },
  {
    number: "03",
    title: "Pulso Analytics",
    description:
      "Dashboard que organiza dados complexos em decisões rápidas, com hierarquia visual e fluxos pensados para o dia a dia.",
    tags: ["Dashboard", "Design System", "Prototipagem"],
    accent: "lime",
    type: "Dados & estratégia",
  },
];

const skills = [
  {
    title: "Estratégia",
    items: ["Descoberta", "Pesquisa", "Arquitetura", "Posicionamento"],
  },
  {
    title: "Design",
    items: ["UI/UX", "Prototipagem", "Design systems", "Identidade visual"],
  },
  {
    title: "Tecnologia",
    items: ["HTML & CSS", "JavaScript", "React", "Interfaces responsivas"],
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir para o início">
          <span className="brand-mark">SN</span>
          <span>Seu Nome</span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre</a>
          <a href="#habilidades">Habilidades</a>
        </nav>
        <a className="header-cta" href="#contato">
          Vamos conversar <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-eyebrow reveal">
          <span className="status-dot" aria-hidden="true" />
          Disponível para novos projetos
        </div>
        <h1>
          Eu transformo <span className="outlined">ideias</span>
          <br />
          em experiências que
          <br />
          <span className="serif">fazem sentido.</span>
        </h1>
        <div className="hero-bottom">
          <p>
            Designer e desenvolvedor(a) focado(a) em criar produtos digitais
            úteis, bonitos e marcantes — da estratégia à última interação.
          </p>
          <a className="circle-link" href="#projetos" aria-label="Ver projetos">
            <span>Ver projetos</span>
            <strong aria-hidden="true">↓</strong>
          </a>
        </div>
        <div className="hero-index" aria-hidden="true">
          PORTFÓLIO / 2026
        </div>
      </section>

      <section className="projects-section" id="projetos">
        <div className="section-heading">
          <div>
            <span className="kicker">01 — Trabalho selecionado</span>
            <h2>Projetos que contam uma história.</h2>
          </div>
          <p>
            Uma seleção de desafios em que estratégia, design e tecnologia
            trabalharam juntos.
          </p>
        </div>

        <div className="demo-note">
          Conteúdo demonstrativo — substitua pelos seus projetos reais.
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className={`project-art ${project.accent}`}>
                <span className="project-number">{project.number}</span>
                <div className="art-window" aria-hidden="true">
                  <div className="art-bar" />
                  <div className="art-content">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <span className="project-type">{project.type}</span>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul aria-label={`Habilidades usadas em ${project.title}`}>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="sobre">
        <div className="about-label">
          <span className="kicker">02 — Sobre mim</span>
          <span className="rotating-stamp" aria-hidden="true">
            IDEIAS · DESIGN · IMPACTO ·
          </span>
        </div>
        <div className="about-copy">
          <h2>
            Curiosidade para entender.
            <br />
            <span>Clareza para criar.</span>
          </h2>
          <p className="about-lead">
            Acredito que os melhores projetos nascem de boas perguntas. Meu
            trabalho conecta objetivos de negócio com necessidades reais das
            pessoas, construindo soluções que parecem simples — porque foram
            muito bem pensadas.
          </p>
          <p>
            Gosto de trabalhar perto das pessoas, testar cedo e transformar
            complexidade em experiências diretas, consistentes e cheias de
            intenção.
          </p>
          <div className="stats">
            <div>
              <strong>+5</strong>
              <span>anos criando</span>
            </div>
            <div>
              <strong>20+</strong>
              <span>projetos entregues</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>curiosidade ativa</span>
            </div>
          </div>
          <small className="stat-note">
            * Números demonstrativos — personalize com sua experiência.
          </small>
        </div>
      </section>

      <section className="skills-section" id="habilidades">
        <div className="section-heading light">
          <div>
            <span className="kicker">03 — O que eu faço</span>
            <h2>Habilidades em movimento.</h2>
          </div>
          <p>
            Visão de ponta a ponta para transformar uma boa ideia em um produto
            pronto para o mundo.
          </p>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-group" key={skill.title}>
              <span className="skill-index">0{index + 1}</span>
              <h3>{skill.title}</h3>
              <ul>
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="tool-marquee" aria-label="Ferramentas e tecnologias">
          <span>FIGMA</span>
          <i aria-hidden="true">✦</i>
          <span>REACT</span>
          <i aria-hidden="true">✦</i>
          <span>JAVASCRIPT</span>
          <i aria-hidden="true">✦</i>
          <span>NOTION</span>
          <i aria-hidden="true">✦</i>
          <span>GITHUB</span>
        </div>
      </section>

      <section className="contact-section" id="contato">
        <span className="kicker">04 — Contato</span>
        <p>Tem uma ideia em mente?</p>
        <h2>Vamos fazer acontecer.</h2>
        <a href="mailto:seuemail@exemplo.com">
          seuemail@exemplo.com <span aria-hidden="true">↗</span>
        </a>
        <div className="contact-footer">
          <span>Disponível para projetos remotos</span>
          <span>São Paulo, Brasil · GMT−3</span>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#inicio">
          <span className="brand-mark">SN</span>
          <span>Seu Nome</span>
        </a>
        <p>Portfólio pessoal · 2026</p>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
    </main>
  );
}
