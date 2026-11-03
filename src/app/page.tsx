import Image from "next/image";
import Reveal from "@/components/Reveal";
import SmoothScroll from "@/components/SmoothScroll";
import { CLINIC, SITE_URL } from "@/lib";
import retrato from "@/images/dra-malu-retrato.jpg";
import mesa from "@/images/dra-malu-mesa.jpg";
import espelho from "@/images/dra-malu-espelho.jpg";
import resAnteriores from "@/images/resultado-dentes-anteriores.jpg";
import resLateral from "@/images/resultado-vista-lateral.jpg";
import resArcadas from "@/images/resultado-arcadas.jpg";
import cadeira from "@/images/consultorio-cadeira.jpg";
import atendimento from "@/images/atendimento-paciente.jpg";
import vistaGeral from "@/images/consultorio-vista-geral.jpg";

const services = [
  {
    name: "Consulta e prevenção",
    text: "O ponto de partida. Avaliação completa da boca, limpeza profissional e um plano claro: o que precisa ser feito, o que pode esperar e em que ordem.",
    tags: ["Avaliação", "Limpeza", "Orientação de higiene"],
  },
  {
    name: "Estética do sorriso",
    text: "Clareamento e restaurações em resina para ajustar cor, forma e pequenas falhas, sem deixar o sorriso com cara de artificial.",
    tags: ["Clareamento", "Resina", "Correção de forma"],
  },
  {
    name: "Cirurgia oral",
    text: "Extrações com campo estéril, paramentação completa e acompanhamento de perto no pós-operatório, para você se recuperar com tranquilidade.",
    tags: ["Extrações", "Ambiente estéril", "Pós-operatório"],
  },
  {
    name: "Prótese",
    text: "Moldagem, modelos e provas até o encaixe ficar certo, para devolver a mastigação e a segurança de sorrir.",
    tags: ["Moldagem", "Provas", "Ajuste fino"],
  },
];

const results = [
  { img: resAnteriores, split: "h", title: "Dentes anteriores", alt: "Comparação de dentes anteriores superiores antes (à esquerda) e depois (à direita) do tratamento estético", cap: "Cor mais uniforme e contorno regularizado nos dentes da frente." },
  { img: resLateral, split: "v", title: "Vista lateral", alt: "Comparação em vista lateral: acima o antes, abaixo o depois do tratamento estético", cap: "Harmonia entre os dentes, com a linha da gengiva preservada." },
  { img: resArcadas, split: "v", title: "Arcadas completas", alt: "Comparação de dentes superiores e inferiores antes (acima) e depois (abaixo) do tratamento estético", cap: "Cor e forma mais harmônicas entre a arcada superior e a inferior." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Dentist",
      "@id": `${SITE_URL}/#clinica`,
      name: CLINIC.name,
      url: `${SITE_URL}/`,
      image: `${SITE_URL}${retrato.src}`,
      telephone: CLINIC.phoneE164,
      priceRange: "$$",
      paymentAccepted: "Pix, cartão de débito, cartão de crédito",
      currenciesAccepted: "BRL",
      address: {
        "@type": "PostalAddress",
        streetAddress: CLINIC.street,
        addressLocality: CLINIC.city,
        addressRegion: CLINIC.region,
        addressCountry: "BR",
      },
      areaServed: { "@type": "City", name: "Ribeirão Pires" },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Wednesday", "Friday"], opens: "09:00", closes: "18:00" },
      ],
      sameAs: [CLINIC.instagram],
      employee: { "@id": `${SITE_URL}/#dra-malu` },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Tratamentos",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "MedicalProcedure", name: s.name, description: s.text },
        })),
      },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#dra-malu`,
      name: CLINIC.doctor,
      alternateName: "Dra. Malu Casini Bigi",
      jobTitle: "Cirurgiã-dentista",
      identifier: CLINIC.cro,
      image: `${SITE_URL}${retrato.src}`,
      alumniOf: { "@type": "CollegeOrUniversity", name: "Universidade Nove de Julho" },
      worksFor: { "@id": `${SITE_URL}/#clinica` },
      sameAs: [CLINIC.instagram],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#site`,
      url: `${SITE_URL}/`,
      name: CLINIC.name,
      inLanguage: "pt-BR",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <a className="skip" href="#conteudo">Ir para o conteúdo</a>
      <header className="top">
        <div className="wrap">
          <a className="brand" href="#" aria-label="Dra. Malu Casini Bigi, início">
            Malu Casini Bigi
          </a>
          <nav aria-label="Principal">
            <a href="#sobre">Sobre</a><a href="#atendimento">Atendimento</a><a href="#resultados">Resultados</a><a href="#consultorio">Consultório</a><a href="#visita">Visita</a>
          </nav>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero" aria-label="Apresentação">
          <div className="hero-grid">
            <div className="hero-media">
              <div className="px">
                <Image src={retrato} alt="Dra. Maria Luiza Casini Bigi sorrindo, de blazer preto, em seu consultório" priority placeholder="blur" sizes="(max-width: 860px) 100vw, 460px" />
              </div>
              <span className="badge"><i aria-hidden="true" />{CLINIC.cro}</span>
            </div>
            <h1 className="hero-name">
              <span className="sr">Dra. </span>
              <span className="ln l1"><span>Malu</span></span>
              <span className="ln l2"><span><em>Casini Bigi</em></span></span>
              <span className="sr">, dentista em Ribeirão Pires</span>
            </h1>
            <div className="hero-copy">
              <p className="eyebrow">Cirurgiã-dentista · Ribeirão Pires</p>
              <p className="lead">Atendimento sem pressa, com cada passo explicado antes de acontecer.</p>
              <div className="acts">
                <a className="btn" href={CLINIC.whatsapp} target="_blank" rel="noopener">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.2-.3-.2-.5-.3Z"/></svg>
                  Agendar pelo WhatsApp
                </a>
                <div className="sub">
                  <a className="link" href="#visita">Endereço e horários</a>
                </div>
              </div>
            </div>
          </div>
          <a className="cue" href="#sobre" aria-label="Rolar para a próxima seção" />
        </section>

        <section className="about" id="sobre" aria-labelledby="sobre-titulo">
          <div className="wrap about-grid">
            <div className="about-media rv">
              <div className="am-main">
                <Image src={mesa} alt="A Dra. Malu sorrindo, sentada à mesa do consultório em Ribeirão Pires" placeholder="blur" sizes="(max-width: 860px) 80vw, 420px" />
              </div>
              <div className="am-small">
                <Image src={espelho} alt="A Dra. Malu em frente ao espelho do consultório, de jaleco preto bordado" placeholder="blur" sizes="(max-width: 860px) 42vw, 220px" />
              </div>
              <svg className="am-seal" viewBox="0 0 120 120" aria-hidden="true">
                <defs><path id="seal-circle" d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1-92 0" /></defs>
                <text><textPath href="#seal-circle" textLength="286" lengthAdjust="spacing">Dra. Malu Casini · Cirurgiã-dentista · </textPath></text>
                <circle cx="60" cy="60" r="5" />
              </svg>
            </div>

            <div className="about-copy">
              <p className="kicker rv">Sobre a Dra. Malu</p>
              <h2 id="sobre-titulo" className="rv">Cuidar de um sorriso começa por <em>ouvir.</em></h2>
              <p className="about-lead rv">Sou a Maria Luiza, mas pode me chamar de Malu. Atendo no centro de Ribeirão Pires com uma regra simples: ninguém sai da consulta sem entender o que tem, o que pode ser feito e por quê.</p>

              <div className="sig rv" aria-hidden="true">Malu</div>
            </div>
          </div>

          <div className="wrap">

              <ol className="principles">
                <li className="rv"><span>01</span><div><h3>Escuta</h3><p>A consulta começa pela sua história: o que incomoda, o que você espera e o que te deixa inseguro na cadeira.</p></div></li>
                <li className="rv"><span>02</span><div><h3>Clareza</h3><p>Explico o que encontrei com calma, mostro as opções e combinamos juntos cada etapa antes de ela acontecer.</p></div></li>
                <li className="rv"><span>03</span><div><h3>Prevenção</h3><p>Tratar hoje é bom. Evitar que o problema volte é melhor, e é aí que mora boa parte do meu cuidado.</p></div></li>
              </ol>
          </div>

          <dl className="wrap creds rv">
            <div><dt>Formação</dt><dd>Odontologia, Universidade Nove de Julho (2025)</dd></div>
            <div><dt>Pós-graduação</dt><dd>Saúde Coletiva</dd></div>
            <div><dt>Registro</dt><dd>{CLINIC.cro}</dd></div>
          </dl>
        </section>

        <section className="care" id="atendimento" aria-labelledby="atendimento-titulo">
          <div className="wrap care-grid">
            <div className="care-side">
              <p className="kicker rv">Tratamentos</p>
              <h2 id="atendimento-titulo" className="rv">Do check-up à cirurgia, <em>sem pressa.</em></h2>
              <p className="care-intro rv">Cada atendimento é individual e com hora marcada. Você não divide a agenda com a sala de espera, e cada consulta tem o tempo de que precisa.</p>
              <a className="btn-ghost rv" href={CLINIC.whatsapp} target="_blank" rel="noopener">
                Tirar uma dúvida no WhatsApp
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
            </div>
            <ol className="care-list">
              {services.map((s, i) => (
                <li key={s.name} className="rv">
                  <span className="care-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{s.name}</h3>
                    <p>{s.text}</p>
                    <ul className="tags" aria-label={`Inclui em ${s.name}`}>
                      {s.tags.map((t) => <li key={t}>{t}</li>)}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="results" id="resultados" aria-labelledby="resultados-titulo">
          <div className="wrap res-head">
            <div>
              <p className="kicker rv">Resultados</p>
              <h2 id="resultados-titulo" className="rv">Antes e depois, <em>sem filtro.</em></h2>
            </div>
            <p className="res-note rv">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6z" /><path d="M9 12l2 2 4-4" /></svg>
              Casos reais do consultório, publicados com autorização dos pacientes.
            </p>
          </div>
          <div className="res-track" role="list">
            {results.map((r, i) => (
              <figure className={`res-card rv split-${r.split}`} role="listitem" key={r.title}>
                <div className="res-img">
                  <Image src={r.img} alt={r.alt} placeholder="blur" sizes="(max-width: 860px) 82vw, 380px" />
                  <span className="chip c-before">Antes</span>
                  <span className="chip c-after">Depois</span>
                </div>
                <figcaption>
                  <span className="res-n">Caso {String(i + 1).padStart(2, "0")}</span>
                  <strong>{r.title}</strong>
                  {r.cap}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="res-hint" aria-hidden="true">Deslize para ver mais <span>→</span></p>
        </section>

        <section className="space" id="consultorio" aria-labelledby="consultorio-titulo">
          <div className="wrap space-grid">
            <div className="space-copy">
              <p className="kicker rv">O consultório</p>
              <h2 id="consultorio-titulo" className="rv">Um espaço feito para você <em>relaxar.</em></h2>
              <p className="rv">Luz natural, madeira clara e nada de corredor lotado. O consultório fica no centro de Ribeirão Pires e foi pensado para que a consulta seja tão tranquila quanto possível.</p>
              <ul className="feats rv">
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6z" /><path d="M9 12l2 2 4-4" /></svg>Campo estéril e paramentação completa</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M12 2v20M4.9 6l14.2 12M4.9 18L19.1 6" /></svg>Ambiente climatizado</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>Um paciente por vez, com hora marcada</li>
              </ul>
            </div>

            <div className="bento">
              <figure className="b-main rv">
                <Image src={atendimento} alt="A doutora paramentada atendendo uma paciente, com instrumentos em campo estéril" placeholder="blur" sizes="(max-width: 860px) 92vw, 420px" />
                <figcaption>Atendimento com biossegurança</figcaption>
              </figure>
              <figure className="b-a rv">
                <Image src={cadeira} alt="Cadeira odontológica e mesa da doutora no consultório em Ribeirão Pires" placeholder="blur" sizes="(max-width: 860px) 46vw, 300px" />
              </figure>
              <figure className="b-b rv">
                <Image src={vistaGeral} alt="Vista geral do consultório com bancada de madeira clara e iluminação indireta" placeholder="blur" sizes="(max-width: 860px) 46vw, 300px" />
              </figure>
              <a className="b-loc rv" href="#visita">
                <span className="b-loc-k">Onde fica</span>
                <strong>Shopping Duaik, 2º andar</strong>
                <span>Rua do Comércio, 127 · Centro</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9" /></svg>
              </a>
            </div>
          </div>
        </section>

        <section className="visit" id="visita" aria-labelledby="visita-titulo">
          <div className="wrap">
            <div className="v-panel rv">
              <div className="v-panel-copy">
                <p className="kicker">Agende sua visita</p>
                <h2 id="visita-titulo">Venha <em>conhecer.</em></h2>
                <p>Mande uma mensagem pelo WhatsApp, conte o que você precisa e a gente encontra o melhor horário para você.</p>
              </div>
              <div className="v-actions">
                <a className="btn-light" href={CLINIC.whatsapp} target="_blank" rel="noopener">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.2-.3-.2-.5-.3Z"/></svg>
                  Agendar pelo WhatsApp
                </a>
                <a className="btn-line" href={CLINIC.instagram} target="_blank" rel="noopener me">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" /></svg>
                  @dra.malucasini_
                </a>
              </div>
            </div>

            <div className="v-info">
              <div className="v-card rv">
                <h3>Endereço</h3>
                <address>Rua do Comércio, 127<br />Shopping Duaik, 2º andar<br />Centro, Ribeirão Pires - SP</address>
                <a className="v-link" href={CLINIC.maps} target="_blank" rel="noopener">Como chegar <span aria-hidden="true">↗</span></a>
              </div>
              <div className="v-card rv">
                <h3>Horário</h3>
                <ul className="week" aria-label="Dias de atendimento">
                  {["S", "T", "Q", "Q", "S", "S", "D"].map((d, i) => (
                    <li key={i} className={i === 2 || i === 4 ? "on" : undefined} aria-hidden="true">{d}</li>
                  ))}
                </ul>
                <p>{CLINIC.hours}</p>
              </div>
              <div className="v-card rv">
                <h3>Contato</h3>
                <p className="v-big">{CLINIC.phoneDisplay}</p>
                <a className="v-link" href={CLINIC.whatsapp} target="_blank" rel="noopener">Chamar no WhatsApp <span aria-hidden="true">↗</span></a>
              </div>
              <div className="v-card rv">
                <h3>Pagamento</h3>
                <ul className="tags"><li>Pix</li><li>Débito</li><li>Crédito</li></ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap f-grid">
          <div>
            <p className="f-brand">Malu Casini Bigi</p>
            <p>{CLINIC.doctor}, cirurgiã-dentista. {CLINIC.cro}</p>
          </div>
          <nav aria-label="Rodapé">
            <a href="#sobre">Sobre</a><a href="#atendimento">Tratamentos</a><a href="#resultados">Resultados</a><a href="#consultorio">Consultório</a><a href="#visita">Contato</a>
          </nav>
        </div>
        <div className="wrap f-bottom"><span>© {new Date().getFullYear()} Dra. Malu Casini Bigi Odontologia</span><span>Ribeirão Pires, SP</span></div>
      </footer>
      <Reveal />
      <SmoothScroll />
    </>
  );
}
