import Image from "next/image";
import type { CSSProperties } from "react";
import { SectionLabel } from "@/components/shared/SectionLabel/SectionLabel";
import { ProjectGallery } from "./ProjectGallery";
import styles from "./ProjectsSection.module.css";
import { scrollDistance, type GallerySlide, type Screenshot } from "./shots";

type Project = {
  id: string;
  badge: string;
  category: string;
  title: string;
  challenge: string;
  solution: string;
  highlight: string;
  tags: string[];
  address: string;
  link?: { href: string; label: string };
  screenshot?: Screenshot;
  /** Várias telas (um perfil por aba) no lugar de um print único. */
  gallery?: GallerySlide[];
};

const projects: Project[] = [
  {
    id: "P.01",
    badge: "Cliente",
    category: "Saúde / Sistema desktop",
    title: "Gestão de preços de medicamentos",
    challenge:
      "Os preços ficavam numa planilha preenchida à mão: cada nota que chegava exigia atualizar valores e conferir o teto PF 12 um por um.",
    solution:
      "Um aplicativo que lê as notas fiscais e a tabela CMED sozinho, calcula o preço de venda e avisa quando um produto passa do teto. Funciona mesmo sem internet.",
    highlight: "Automação de processos",
    tags: ["Electron", "React", "SQLite"],
    address: "gestao-de-precos · app desktop",
    screenshot: {
      src: "/projetos/tabela-precos.png",
      alt: "Catálogo do sistema de gestão de preços com filtros, custo, margem, venda e situação frente ao PF 12 de cada medicamento",
      width: 1440,
      height: 810,
    },
  },
  {
    id: "P.02",
    badge: "Cliente",
    category: "Segurança do trabalho / Site institucional",
    title: "Schinemann Assessoria e Consultoria",
    challenge:
      "Quase 40 anos de experiência em segurança do trabalho, incluindo a obra de Itaipu, sem um lugar na internet que mostrasse isso e facilitasse o pedido de orçamento.",
    solution:
      "Um site institucional que apresenta os serviços, conta a trajetória em fotos e leva o visitante direto ao WhatsApp.",
    highlight: "Marca na web · Conexão direta com o cliente",
    tags: ["Site institucional", "Responsivo", "SEO"],
    address: "schinemannassessoriaeconsultoria.com",
    link: { href: "https://schinemannassessoriaeconsultoria.com/", label: "Ver site" },
    screenshot: {
      src: "/projetos/schinemann-full.jpg",
      alt: "Página inicial do site da Schinemann, com serviços de segurança do trabalho, trajetória em Itaipu e chamada para orçamento",
      width: 1440,
      height: 3609,
      scroll: true,
    },
  },
  {
    id: "P.03",
    badge: "TCC · Engenharia de Software",
    category: "Oficinas mecânicas / Plataforma",
    title: "MecList",
    challenge:
      "Na oficina, o orçamento ficava espalhado entre fichas, mensagens e planilhas: o cliente não sabia o que estava sendo feito, e a oficina não tinha histórico do serviço.",
    solution:
      "Uma plataforma que conecta oficina, mecânico e cliente: checklist com fotos na entrada, orçamento aprovado pelo celular e aviso quando o veículo fica pronto.",
    highlight: "Transparência no serviço · Oficina e cliente conectados",
    tags: ["Java", "Spring Boot", "React", "PostgreSQL"],
    address: "meclist · painel da oficina",
    gallery: [
      {
        label: "Oficina",
        platform: "Web · admin",
        address: "meclist · painel da oficina",
        src: "/projetos/meclist-admin.jpg",
        alt: "Dashboard administrativo do MecList com o estado atual da oficina, atividade do período, faturamento, ranking de mecânicos e tempos médios",
        width: 1440,
        height: 2295,
        scroll: true,
      },
      {
        label: "Mecânico",
        platform: "App mobile",
        address: "meclist · app do mecânico",
        device: "phone",
        src: "/projetos/meclist-mecanico.jpg",
        alt: "App do mecânico no MecList com os serviços concluídos e a placa, modelo e quilometragem de cada veículo",
        width: 780,
        height: 3390,
        scroll: true,
      },
      {
        label: "Cliente",
        platform: "App mobile",
        address: "meclist · área do cliente",
        device: "phone",
        src: "/projetos/meclist-cliente.jpg",
        alt: "Área do cliente no MecList com os veículos vinculados e um serviço aguardando a aprovação do orçamento",
        width: 780,
        height: 1689,
      },
    ],
  },
];

function BrowserFrame({ project }: { project: Project }) {
  const { screenshot, link } = project;

  const screen = screenshot ? (
    <Image
      className={screenshot.scroll ? styles.scrollShot : styles.shot}
      src={screenshot.src}
      alt={screenshot.alt}
      width={screenshot.width}
      height={screenshot.height}
      sizes="(max-width: 820px) 100vw, 60vw"
      style={
        screenshot.scroll
          ? ({ "--scroll-distance": scrollDistance(screenshot) } as CSSProperties)
          : undefined
      }
    />
  ) : (
    <div className={styles.soon}>
      <span>{project.title}</span>
      <strong>Dashboard em breve</strong>
      <small>Prints do sistema em preparação</small>
    </div>
  );

  const frame = (
    <>
      <div className={styles.bar} aria-hidden="true">
        <i />
        <i />
        <i />
        <span>{project.address}</span>
      </div>
      <div className={styles.screen}>{screen}</div>
      {screenshot?.scroll && (
        <span className={styles.hint} aria-hidden="true">
          Passe o mouse para rolar ↓
        </span>
      )}
    </>
  );

  return link ? (
    <a
      className={`${styles.frame} ${styles.interactive}`}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${link.label} ${project.title} (abre em nova aba)`}
      data-tilt
    >
      {frame}
    </a>
  ) : (
    <div className={styles.frame} data-tilt>
      {frame}
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section className={styles.projects} id="projetos">
      <div className={styles.intro} data-reveal>
        <div>
          <SectionLabel dark>02 / Projetos</SectionLabel>
          <h2>
            Projetos reais.
            <br />
            <em>Problemas resolvidos.</em>
          </h2>
        </div>
        <div className={styles.introSide}>
          <p>
            Sistemas e sites construídos para resolver problemas concretos de operação e de
            negócio.
          </p>
          <small>Telas dos sistemas em funcionamento · informações de clientes preservadas</small>
        </div>
      </div>

      <div className={styles.list}>
        {projects.map((project) => (
          <article className={styles.case} key={project.id} data-reveal>
            {project.gallery ? (
              <ProjectGallery title={project.title} slides={project.gallery} />
            ) : (
              <BrowserFrame project={project} />
            )}

            <div className={styles.content}>
              <div className={styles.meta}>
                <span className={styles.badge}>{project.badge}</span>
                <span>
                  {project.id} · {project.category}
                </span>
              </div>
              <h3>{project.title}</h3>
              <dl>
                <div>
                  <dt>Desafio</dt>
                  <dd>{project.challenge}</dd>
                </div>
                <div>
                  <dt>Solução</dt>
                  <dd>{project.solution}</dd>
                </div>
              </dl>
              <p className={styles.highlight}>{project.highlight}</p>
              <ul aria-label={`Tecnologias de ${project.title}`}>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              {project.link && (
                <a
                  className={styles.link}
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.link.label} <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
