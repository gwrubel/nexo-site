import { LabVisual, SiteInteractions } from "./interactions";

const services = [
  {
    index: "01",
    symbol: "</>",
    title: "Sistemas web",
    description:
      "Aplicações rápidas, seguras e preparadas para crescer com a sua operação.",
    tags: ["SaaS", "Portais", "Dashboards"],
  },
  {
    index: "02",
    symbol: "::",
    title: "Automação & integrações",
    description:
      "Fluxos inteligentes que conectam ferramentas, eliminam tarefas repetitivas e reduzem erros.",
    tags: ["APIs", "Workflows", "Dados"],
  },
  {
    index: "03",
    symbol: "◇",
    title: "Produtos digitais",
    description:
      "Da descoberta ao lançamento: estratégia, experiência e tecnologia no mesmo processo.",
    tags: ["MVP", "UX/UI", "Produto"],
  },
  {
    index: "04",
    symbol: "↗",
    title: "Performance & cloud",
    description:
      "Arquiteturas eficientes para entregar estabilidade, velocidade e escala de verdade.",
    tags: ["Cloud", "Otimização", "DevOps"],
  },
];

const projects = [
  {
    id: "P.01",
    category: "Operações / SaaS",
    title: "Painel de operações",
    description:
      "Visão centralizada de indicadores, tarefas e alertas para decisões mais rápidas.",
    className: "project-blue",
    metric: "Dados em tempo real",
  },
  {
    id: "P.02",
    category: "Automação / Integração",
    title: "Fluxo comercial inteligente",
    description:
      "Integração entre canais, CRM e atendimento para reduzir trabalho manual.",
    className: "project-indigo",
    metric: "Processo conectado",
  },
  {
    id: "P.03",
    category: "Produto / Experiência",
    title: "Portal de relacionamento",
    description:
      "Uma jornada simples para clientes acompanharem solicitações e resultados.",
    className: "project-night",
    metric: "Experiência fluida",
  },
];

const values = [
  {
    icon: "ϟ",
    title: "Performance",
    description: "Soluções rápidas, escaláveis e otimizadas.",
  },
  {
    icon: "✓",
    title: "Confiança",
    description: "Código limpo, seguro e bem estruturado.",
  },
  {
    icon: "◎",
    title: "Foco no cliente",
    description: "Entendimento profundo do que realmente importa.",
  },
  {
    icon: "↗",
    title: "Inovação",
    description: "Tecnologia aplicada para impulsionar o negócio.",
  },
];

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand-lockup ${compact ? "compact" : ""}`}>
      <img
        src={compact ? "/wrubel-mark.png" : "/wrubel-lockup-transparent.png"}
        alt={compact ? "Símbolo Wrubel Labs" : "Wrubel Labs"}
      />
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <SiteInteractions />
      <header className="site-header">
        <a href="#inicio" aria-label="Wrubel Labs — início">
          <Brand />
        </a>
        <nav aria-label="Navegação principal">
          <a href="#inicio">Início</a>
          <a href="#servicos">Serviços</a>
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre</a>
        </nav>
        <a className="nav-contact" href="#contato" data-magnetic>
          Falar comigo <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy" data-reveal>
          <span className="eyebrow">
            <i /> Desenvolvimento de software sob medida
          </span>
          <h1>
            Soluções digitais
            <br />
            que <em>impulsionam</em>
            <br />
            negócios.
          </h1>
          <p>
            Transformo desafios complexos em produtos digitais claros,
            eficientes e preparados para gerar resultado.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#contato" data-magnetic>
              Começar um projeto <span aria-hidden="true">→</span>
            </a>
            <a className="button secondary" href="#projetos" data-magnetic>
              Ver projetos
            </a>
          </div>
        </div>

        <div className="hero-visual" data-reveal>
          <LabVisual />
        </div>

        <div className="hero-foot">
          <span>BUILD</span>
          <i />
          <span>CODE</span>
          <i />
          <span>SOLVE</span>
        </div>
      </section>

      <section className="values-bar" aria-label="Princípios da Wrubel Labs">
        {values.map((value, index) => (
          <div className={`value-item reveal-delay-${index + 1}`} key={value.title} data-reveal>
            <span aria-hidden="true">{value.icon}</span>
            <div>
              <strong>{value.title}</strong>
              <p>{value.description}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="services section-shell" id="servicos">
        <div className="section-intro" data-reveal>
          <div>
            <span className="section-index">01 / Serviços</span>
            <h2>
              Código com propósito.
              <br />
              <em>Sistemas para evoluir.</em>
            </h2>
          </div>
          <p>
            Tecnologia faz sentido quando resolve o problema certo. Cada
            solução nasce do entendimento do negócio e termina em impacto
            mensurável.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article
              className={`service-card reveal-delay-${index + 1}`}
              key={service.index}
              data-reveal
              data-tilt
            >
              <div className="service-top">
                <span className="service-symbol" aria-hidden="true">
                  {service.symbol}
                </span>
                <small>{service.index}</small>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul aria-label={`Especialidades de ${service.title}`}>
                {service.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="projects section-shell" id="projetos">
        <div className="section-intro projects-intro" data-reveal>
          <div>
            <span className="section-index">02 / Projetos</span>
            <h2>
              Ideias em movimento.
              <br />
              <em>Resultados em foco.</em>
            </h2>
          </div>
          <div className="intro-side">
            <p>
              Projetos pensados para simplificar rotinas, conectar informações
              e abrir novas possibilidades.
            </p>
            <small>
              Conceitos demonstrativos — substituo pelos seus cases reais.
            </small>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className={`project-card reveal-delay-${index + 1}`}
              key={project.id}
              data-reveal
            >
              <div className={`project-preview ${project.className}`} data-tilt>
                <div className="preview-bar">
                  <span>{project.id}</span>
                  <span>WRUBEL.LABS</span>
                </div>
                <div className="preview-ui" aria-hidden="true">
                  <div className="ui-sidebar">
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="ui-main">
                    <span className="ui-title" />
                    <div className="ui-data">
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className="ui-chart">
                      <b />
                      <b />
                      <b />
                      <b />
                      <b />
                    </div>
                  </div>
                </div>
                <div className="preview-metric">{project.metric}</div>
              </div>
              <div className="project-content">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="sobre">
        <div className="about-mark" aria-hidden="true" data-reveal data-tilt>
          <Brand compact />
        </div>
        <div className="about-content" data-reveal>
          <span className="section-index">03 / Sobre</span>
          <h2>
            Um laboratório de software para transformar desafios em soluções.
          </h2>
          <div className="about-columns">
            <p className="about-lead">
              Wrubel Labs é o meu espaço para construir produtos digitais com
              método, proximidade e excelência técnica.
            </p>
            <p>
              Uno código, design e visão de negócio para criar sistemas que não
              apenas funcionam — eles simplificam, escalam e entregam valor. Do
              primeiro diagnóstico à evolução contínua, cada decisão tem um
              motivo e cada entrega tem um objetivo.
            </p>
          </div>
          <div className="process-grid" data-reveal>
            <div>
              <span>01</span>
              <strong>Entender</strong>
              <p>Contexto, operação e objetivo.</p>
            </div>
            <div>
              <span>02</span>
              <strong>Desenhar</strong>
              <p>Fluxos, arquitetura e experiência.</p>
            </div>
            <div>
              <span>03</span>
              <strong>Construir</strong>
              <p>Código sólido e entrega incremental.</p>
            </div>
            <div>
              <span>04</span>
              <strong>Evoluir</strong>
              <p>Métricas, aprendizado e escala.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stack" aria-label="Tecnologias">
        <div className="stack-track">
          <span>TYPESCRIPT</span><i>✦</i><span>REACT</span><i>✦</i>
          <span>NODE.JS</span><i>✦</i><span>CLOUD</span><i>✦</i>
          <span>POSTGRESQL</span><i>✦</i><span>APIS</span><i>✦</i>
          <span aria-hidden="true">TYPESCRIPT</span><i aria-hidden="true">✦</i>
          <span aria-hidden="true">REACT</span><i aria-hidden="true">✦</i>
          <span aria-hidden="true">NODE.JS</span><i aria-hidden="true">✦</i>
          <span aria-hidden="true">CLOUD</span><i aria-hidden="true">✦</i>
          <span aria-hidden="true">POSTGRESQL</span><i aria-hidden="true">✦</i>
          <span aria-hidden="true">APIS</span><i aria-hidden="true">✦</i>
        </div>
      </section>

      <section className="contact section-shell" id="contato">
        <div className="contact-copy" data-reveal>
          <span className="section-index">04 / Contato</span>
          <h2>
            Tem um desafio?
            <br />
            <em>Vamos resolver juntos.</em>
          </h2>
          <p>
            Conte um pouco sobre a sua ideia. Eu retorno para entendermos o
            melhor próximo passo.
          </p>
          <a
            className="button primary contact-button"
            href="mailto:contato@wrubel.dev"
            data-magnetic
          >
            contato@wrubel.dev <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="contact-visual" aria-hidden="true" data-reveal data-tilt>
          <div className="contact-rings" />
          <Brand compact />
          <span>READY TO BUILD</span>
        </div>
      </section>

      <footer>
        <a href="#inicio" aria-label="Voltar ao início">
          <Brand />
        </a>
        <p>Build · Code · Solve</p>
        <div className="footer-links">
          <a href="#servicos">Serviços</a>
          <a href="#projetos">Projetos</a>
          <a href="#inicio">Topo ↑</a>
        </div>
        <small>© 2026 Wrubel Labs. Tecnologia com propósito.</small>
      </footer>
    </main>
  );
}
